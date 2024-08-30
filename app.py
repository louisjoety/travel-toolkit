from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import pytesseract
from PIL import Image
import numpy as np
import os
from googletrans import Translator

app = Flask(__name__)
CORS(app)  

def setup_tesseract(tesseract_cmd_path):
    pytesseract.pytesseract.tesseract_cmd = tesseract_cmd_path

def convert_image_to_text(image_file):
    try:
        image = cv2.imdecode(np.frombuffer(image_file.read(), np.uint8), cv2.IMREAD_COLOR)
        if image is None:
            raise ValueError("Invalid image file")

        rgb_image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        text = pytesseract.image_to_string(rgb_image)
        return text
    except Exception as e:
        print(f"Error: {e}")
        return ""

def translate_text(text, target_language='en'):
    try:
        translator = Translator()
        translated = translator.translate(text, dest=target_language)
        return translated.text
    except Exception as e:
        print(f"Translation Error: {e}")
        return ""

@app.route('/api/convert', methods=['POST'])
def convert():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400

    image_file = request.files['image']
    tesseract_cmd_path = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
    setup_tesseract(tesseract_cmd_path)

    text = convert_image_to_text(image_file)

    if text:
        return jsonify({'text': text})
    else:
        return jsonify({'error': 'No text extracted'}), 400

@app.route('/api/translate', methods=['POST'])
def translate():
    data = request.json
    text = data.get('text', '')
    target_language = data.get('target_language', 'en')

    if not text:
        return jsonify({'error': 'No text provided'}), 400

    translated_text = translate_text(text, target_language)
    return jsonify({'translated_text': translated_text})

if __name__ == '__main__':
    app.run(debug=True)