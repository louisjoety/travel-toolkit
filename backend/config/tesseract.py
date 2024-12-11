import pytesseract

def setup_tesseract():
    tesseract_cmd_path = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
    pytesseract.pytesseract.tesseract_cmd = tesseract_cmd_path
