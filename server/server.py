# Remember to create a virtual environment and install necessary packages
from flask import Flask, request
from flask_cors import CORS
import google.generativeai as genai

# API keys in security.py
from security import gemini_key


# Create app
app = Flask(__name__)
CORS(app)

# Create genai instance
genai.configure(api_key=gemini_key)
model = genai.GenerativeModel('gemini-1.5-flash')

# Function to send prompt
def send_prompt(prompt):
    received = model.generate_content(prompt)
    return received.text

# Test route
@app.route('/')
def home():
    return 'Hello, World!'

# Test generative AI route
@app.route('/generate', methods=['POST'])
def generate():
    try:
        data = request.json
        prompt = data['prompt']
        return {"text": send_prompt(prompt)}
    except Exception as e:
        return {"text": ""}


if __name__ == '__main__':
    app.run(debug=True)