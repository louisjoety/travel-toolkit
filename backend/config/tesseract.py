import os
import pytesseract

def setup_tesseract():
    if os.name == 'nt':  
        tesseract_cmd_path = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
    else:
        tesseract_cmd_path = '/usr/bin/tesseract'

    pytesseract.pytesseract.tesseract_cmd = tesseract_cmd_path
