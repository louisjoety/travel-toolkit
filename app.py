import cv2
import pytesseract
from PIL import Image
import nltk
from nltk.data import find
from nltk.tokenize import sent_tokenize
from nltk.corpus import stopwords
from nltk.probability import FreqDist
from nltk.tokenize import word_tokenize
from heapq import nlargest

def ensure_nltk_data():
    resources = [
        ('tokenizers/punkt', 'punkt'),
        ('corpora/stopwords', 'stopwords'),
        ('corpora/wordnet', 'wordnet')
    ]
    
    for resource_path, resource_name in resources:
        try:
            find(resource_path)
        except LookupError:
            nltk.download(resource_name)

ensure_nltk_data()

def setup_tesseract(tesseract_cmd_path):
    pytesseract.pytesseract.tesseract_cmd = tesseract_cmd_path

def convert_image_to_text(image_path):
    try:
        image = cv2.imread(image_path)
        if image is None:
            raise ValueError(f"Image not found at the path: {image_path}")
        
        rgb_image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        
        text = pytesseract.image_to_string(rgb_image)
        
        return text
    except Exception as e:
        print(f"Error: {e}")
        return ""
    
def summarize_text(text, n_sentences=3):
    stop_words = set(stopwords.words('english'))
    words = word_tokenize(text.lower())
    filtered_words = [word for word in words if word.isalnum() and word not in stop_words]
    
    word_frequencies = FreqDist(filtered_words)
    max_frequency = max(word_frequencies.values())
    for word in word_frequencies.keys():
        word_frequencies[word] = (word_frequencies[word] / max_frequency)
    
    sentence_scores = {}
    sentences = sent_tokenize(text)
    for sentence in sentences:
        for word in word_tokenize(sentence.lower()):
            if word in word_frequencies.keys():
                if sentence not in sentence_scores.keys():
                    sentence_scores[sentence] = word_frequencies[word]
                else:
                    sentence_scores[sentence] += word_frequencies[word]
    
    summary_sentences = nlargest(n_sentences, sentence_scores, key=sentence_scores.get)
    summary = ' '.join(summary_sentences)
    return summary

def main(image_path, tesseract_cmd_path):
    setup_tesseract(tesseract_cmd_path)
    text = convert_image_to_text(image_path)
    if text:
        print("Extracted Text:")
        print(text)
        
        summary = summarize_text(text)
        print("\nSummary:")
        print(summary)
    else:
        print("No text extracted.")

if __name__ == "__main__":
    image_path = 'image.png' # TODO: Add file path to image
    tesseract_cmd_path = r'C:\Program Files\Tesseract-OCR\tesseract.exe' 
    main(image_path, tesseract_cmd_path)