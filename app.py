import cv2
import pytesseract
from PIL import Image
from google.cloud import translate_v2 as translate
from dotenv import load_dotenv
import os

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

def translate_text(text, target_language="en"):
    try:
        translate_client = translate.Client()
        result = translate_client.translate(text, target_language=target_language)
        return result["translatedText"]
    except Exception as e:
        print(f"Error: {e}")
        return ""

def main(image_path, tesseract_cmd_path):
    load_dotenv()  # Load environment variables from .env file

    setup_tesseract(tesseract_cmd_path)
    text = convert_image_to_text(image_path)
    
    if text:
        print("Extracted Text:")
        print(text)
        translated_text = translate_text(text, target_language="en")
        if translated_text:
            print("\nTranslated Text:")
            print(translated_text)
        else:
            print("Translation failed.")
    else:
        print("No text extracted.")

if __name__ == "__main__":
    image_path = '' # TODO: Add file path to image
    tesseract_cmd_path = r'C:\Program Files\Tesseract-OCR\tesseract.exe' 
    main(image_path, tesseract_cmd_path)
