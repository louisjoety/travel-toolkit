import cv2
import pytesseract
from PIL import Image
import nltk
from nltk.tokenize import sent_tokenize
from nltk.corpus import stopwords
from nltk.probability import FreqDist
from nltk.tokenize import word_tokenize
from heapq import nlargest

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

def main(image_path, tesseract_cmd_path):
    setup_tesseract(tesseract_cmd_path)
    text = convert_image_to_text(image_path)
    if text:
        print("Extracted Text:")
        print(text)
    else:
        print("No text extracted.")

if __name__ == "__main__":
    image_path = '' # TODO: Add file path to image
    tesseract_cmd_path = r'C:\Program Files\Tesseract-OCR\tesseract.exe' 
    main(image_path, tesseract_cmd_path)