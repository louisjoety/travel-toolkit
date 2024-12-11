import requests
import os

API_KEY = os.getenv('FREECURRENCYAPI_KEY')
BASE_URL = 'https://api.freecurrencyapi.com/v1/latest'

def get_exchange_rates():
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
    if from_currency not in rates or to_currency not in rates:
        raise ValueError("Invalid currency code provided.")
    if from_currency == 'USD':
        conversion_rate = rates[to_currency]
    elif to_currency == 'USD':
        conversion_rate = 1 / rates[from_currency]
    else:
        conversion_rate = rates[to_currency] / rates[from_currency]
    return amount * conversion_rate
