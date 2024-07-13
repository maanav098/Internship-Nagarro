from flask import Flask, request, jsonify, render_template
import google.generativeai as genai
import os
import tempfile

app = Flask(__name__)

# Configure the GenAI API
genai.configure(api_key="AIzaSyAcjLJXQ3s3NQ1IavOgBxr9KSr_74oIzsQ")

# Initialize the Gemini model
model = genai.GenerativeModel('gemini-1.5-pro-latest')

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
    try:
        if 'file' in request.files:
            file = request.files['file']
            query = request.form.get("query")
            print(f"Received file: {file.filename}")
            print(f"Received query: {query}")

            # Save the file temporarily
            tempdir = tempfile.mkdtemp()
            file_path = os.path.join(tempdir, file.filename)
            file.save(file_path)

            # Generate content using Gemini model
            response = model.generate_content([query, file_path])
            generated_text = response.text

            # Clean up the temporary file
            os.remove(file_path)
            os.rmdir(tempdir)

            return jsonify({"result": generated_text}), 200
        else:
            data = request.get_json()
            query = data.get("query")
            print(f"Received query: {query}")

            # Generate content using Gemini model
            response = model.generate_content(query)
            generated_text = response.text

            return jsonify({"result": generated_text}), 200

    except Exception as e:
        error_message = f"Error generating content: {str(e)}"
        print(error_message)
        return jsonify({"error": error_message}), 500

# Run the Flask app
if __name__ == "__main__":
    app.run(debug=True)
