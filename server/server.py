# Remember to create a virtual environment and install necessary packages
from flask import Flask, request
from flask_cors import CORS
import google.generativeai as genai

# API keys in security.py
from security import gemini_key, youtube_key
import requests


# Create app
app = Flask(__name__)
CORS(app)

# Create genai instance
genai.configure(api_key=gemini_key)
model = genai.GenerativeModel('gemini-1.5-flash')

# Json model
modelJson = genai.GenerativeModel('gemini-1.5-flash',generation_config={"response_mime_type": "application/json"})


# DEBUG
DEBUG = True


# Function to send prompt
def send_prompt(prompt):
    received = model.generate_content(prompt)
    if DEBUG:
        print(received.text)
    return received.text

# Get Json response
def send_prompt_json(prompt):
    received = modelJson.generate_content(prompt)
    if DEBUG:
        print(received.text)
    return received.text

# Test route
@app.route('/')
def home():
    return 'Hello, World!'

# Connect to model
@app.route('/generate', methods=['POST'])
def generate():
    try:
        data = request.json
        prompt = data['prompt']
        return {"text": send_prompt(prompt)}
    except Exception as e:
        return {"text": ""}
    
# Connect to JSON model
@app.route('/generate_json', methods=['POST'])
def generate_json():
    try:
        data = request.json
        print(data)
        prompt = data['prompt']
        ans = send_prompt_json(prompt)
        print(ans)
        return {"text": ans}
    except Exception as e:
        return {"text": []}

# Get youtube searches
@app.route('/youtube', methods=['POST'])
def youtube():
    try:
        data = request.json
        prompt = data['prompt']
        # Make GET request to YouTube API
        response = requests.get('https://www.googleapis.com/youtube/v3/search', params={'q': prompt, 'key': youtube_key, 'maxResults':3})
        print(response.json())
        # Parse the response
        data = response.json()
        return data
    except Exception as e:
        return {"error": "An error occurred"}

if __name__ == '__main__':
    app.run(debug=True)