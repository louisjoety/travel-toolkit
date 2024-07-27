import os
from dotenv import load_dotenv
import requests

# Load environment variables from .env file
load_dotenv()

API_KEY = os.getenv('FREECURRENCYAPI_KEY')
BASE_URL = 'https://api.freecurrencyapi.com/v1/latest'

def get_exchange_rates():
    headers = {'apikey': API_KEY}
    response = requests.get(BASE_URL, headers=headers)
    
    if response.status_code == 200:
        data = response.json()
        return data['data']
    else:
        return None

def convert_currency(amount, from_currency, to_currency, rates):
    if from_currency == 'USD':
        conversion_rate = rates[to_currency]
    elif to_currency == 'USD':
        conversion_rate = 1 / rates[from_currency]
    else:
        conversion_rate = rates[to_currency] / rates[from_currency]
    
    converted_amount = amount * conversion_rate
    return converted_amount

if __name__ == "__main__":
    amount = float(input("Enter the amount: "))
    from_currency = input("Enter the currency you are converting from (e.g., USD): ")
    to_currency = input("Enter the currency you are converting to (e.g., EUR): ")
    
    rates = get_exchange_rates()
    
    if rates:
        converted_amount = convert_currency(amount, from_currency, to_currency, rates)
        print(f"{amount} {from_currency} is equal to {converted_amount} {to_currency}")
    else:
        print("Error in fetching exchange rates. Please check your API key and internet connection.")
