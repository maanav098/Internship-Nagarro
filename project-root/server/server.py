import os
import requests
from flask import Flask, request, jsonify, render_template # type: ignore
import google.generativeai as genai



app = Flask(__name__)


genai.configure(api_key="AIzaSyAcjLJXQ3s3NQ1IavOgBxr9KSr_74oIzsQ")

# Initialize Gemini model
model = genai.GenerativeModel('gemini-1.5-flash')

# Define Gemini API URL
GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent'

# Handle CORS for development (optional)
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

# Route for serving the React frontend (if applicable)
@app.route("/")
def index():
    return render_template("index.html")

# Route to handle login functionality (example)
@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    # Example authentication logic
    if email == "123@gmail.com" and password == "123":
        return jsonify({"message": "Login successful!"}), 200 
    else:
        return jsonify({"message": "Invalid email or password"}), 401  

# Route to handle Gemini API search
@app.route("/gemini", methods=["POST"])
def gemini_search():
    if request.method == "POST":
        data = request.get_json()
        query = data.get("query")

        try:
            # Generate content using Gemini model
            response = model.generate_content(query)
            generated_text = response.text
            return jsonify({"result": generated_text}), 200

        except Exception as e:
            error_message = f"Error generating content: {str(e)}"
            return jsonify({"error": error_message}), 500

# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)
