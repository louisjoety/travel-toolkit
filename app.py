from flask import Flask, request, jsonify
from flask_cors import CORS
import cv2
import pytesseract
from PIL import Image
import numpy as np
from nltk.tokenize import sent_tokenize
from googletrans import Translator
import os
from dotenv import load_dotenv
import requests

load_dotenv()

API_KEY = os.getenv('FREECURRENCYAPI_KEY')
BASE_URL = 'https://api.freecurrencyapi.com/v1/latest'

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

def summarize_text(text, num_sentences=3):
    try:
        sentences = sent_tokenize(text)
        
        if len(sentences) <= num_sentences:
            summary = ' '.join(sentences)
        else:
            summary = ' '.join(sentences[:num_sentences])

        return summary
    except Exception as e:
        print(f"Error during summarization: {e}")
        return ""

@app.route('/api/convert_and_summarize', methods=['POST'])
def convert_and_summarize():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400

    image_file = request.files['image']
    tesseract_cmd_path = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
    setup_tesseract(tesseract_cmd_path)

    text = convert_image_to_text(image_file)

    if not text:
        return jsonify({'error': 'No text extracted from the image'}), 400

    summary = summarize_text(text)

    if summary:
        return jsonify({'summary': summary})
    else:
        return jsonify({'error': 'Error during summarization'}), 500

def get_exchange_rates():
    """
    Fetch the latest currency exchange rates from the API.
    """
    headers = {'apikey': API_KEY}
    try:
        response = requests.get(BASE_URL, headers=headers)
        if response.status_code == 200:
            data = response.json()
            return data['data']
        else:
            print(f"Error fetching rates: {response.status_code} - {response.text}")
            return None
    except requests.exceptions.RequestException as e:
        print(f"Request Error: {e}")
        return None

def convert_currency(amount, from_currency, to_currency, rates):
    """
    Convert a given amount from one currency to another using the provided exchange rates.
    """
    if from_currency not in rates or to_currency not in rates:
        raise ValueError("Invalid currency code provided.")

    if from_currency == 'USD':
        conversion_rate = rates[to_currency]
    elif to_currency == 'USD':
        conversion_rate = 1 / rates[from_currency]
    else:
        conversion_rate = rates[to_currency] / rates[from_currency]
    
    return amount * conversion_rate

@app.route('/api/currency_convert', methods=['POST'])
def currency_convert():
    """
    API endpoint to perform currency conversion.
    """
    data = request.json
    try:
        amount = float(data.get('amount', 0))
        from_currency = data.get('from_currency', 'USD').upper()
        to_currency = data.get('to_currency', 'EUR').upper()

        if amount <= 0:
            return jsonify({'error': 'Amount must be greater than 0'}), 400

        rates = get_exchange_rates()
        if not rates:
            return jsonify({'error': 'Failed to fetch exchange rates'}), 500

        converted_amount = convert_currency(amount, from_currency, to_currency, rates)
        return jsonify({
            'converted_amount': converted_amount,
            'from_currency': from_currency,
            'to_currency': to_currency,
            'rate': rates[to_currency]
        })
    except ValueError as ve:
        return jsonify({'error': str(ve)}), 400
    except Exception as e:
        print(f"Unexpected Error: {e}")
        return jsonify({'error': 'An unexpected error occurred'}), 500

if __name__ == '__main__':
    app.run(debug=True)
