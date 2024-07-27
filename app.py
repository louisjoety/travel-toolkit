import freecurrencyapi
from dotenv import load_dotenv
import os


API_KEY = os.getenv('FREECURRENCYAPI_KEY')
client = freecurrencyapi.Client('API_KEY')

# Load environment variables from .env file
load_dotenv()

result = client.currencies(currencies=['EUR', 'CAD'])
print(result)
