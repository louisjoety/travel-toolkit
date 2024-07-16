from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.post('/get-quote')
def get_quote():
    data = request.get_json()
    if data['number'] == 1:
        return jsonify({"quote": "success"})
    return jsonify({"quote": "unknown request"})

if __name__ == '__main__':
    app.run(debug=True)
