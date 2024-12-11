from flask import Blueprint, jsonify, request
from config.tesseract import setup_tesseract
from services.image_processing import convert_image_to_text
from services.translation import translate_text
from services.summarization import summarize_text
from services.currency import get_exchange_rates, convert_currency

routes = Blueprint('routes', __name__)

@routes.route('/api/convert', methods=['POST'])
def convert():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400

    image_file = request.files['image']
    setup_tesseract()

    text = convert_image_to_text(image_file)

    if text:
        return jsonify({'text': text})
    else:
        return jsonify({'error': 'No text extracted'}), 400

@routes.route('/api/translate', methods=['POST'])
def translate():
    data = request.json
    text = data.get('text', '')
    target_language = data.get('target_language', 'en')

    if not text:
        return jsonify({'error': 'No text provided'}), 400

    translated_text = translate_text(text, target_language)
    return jsonify({'translated_text': translated_text})

@routes.route('/api/convert_and_summarize', methods=['POST'])
def convert_and_summarize():
    if 'image' not in request.files:
        return jsonify({'error': 'No image file provided'}), 400

    image_file = request.files['image']
    setup_tesseract()

    text = convert_image_to_text(image_file)

    if not text:
        return jsonify({'error': 'No text extracted from the image'}), 400

    summary = summarize_text(text)

    if summary:
        return jsonify({'summary': summary})
    else:
        return jsonify({'error': 'Error during summarization'}), 500

@routes.route('/api/currency_convert', methods=['POST'])
def currency_convert():
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
