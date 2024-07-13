import cv2
import pytesseract
from PIL import Image

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

def convert_image_to_text(image_path):
    
    image = cv2.imread(image_path)
    
    rgb_image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    
    text = pytesseract.image_to_string(rgb_image)
    
    return text

if __name__ == "__main__":
    image_path = '' # TODO: Add file path to image
    text = convert_image_to_text(image_path)
    print("Extracted Text:")
    print(text)
    