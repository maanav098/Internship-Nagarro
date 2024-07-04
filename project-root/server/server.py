# server/app.py
from flask import Flask, request, jsonify # type: ignore

app = Flask(__name__)  # This line creates a Flask app instance. The __name__ is a special Python variable representing the name of the current module.

# This decorator invokes Flask so that whenever a user visits the URL "/hi",
# it should run the function hello_world().
@app.route("/hi")
def hello_world():
    return ({"players": ["PLAYER 1", "PLAYER 2", "PLAYER 3"]})  
@app.route("/login", methods=["GET","POST"])
def login():
    data = request.get_json()  # Get the JSON data sent from the frontend
    email = data.get("email")
    password = data.get("password")
    if email == "123@gmail.com" and password == "123":
        return jsonify({"message": "Login successful!"}), 200 
    else:
        return jsonify({"message": "Invalid email or password"}), 401  



# This condition checks if the script is being run directly (not imported as a module).
if __name__ == "__main__":
    
    app.run(debug=True)# This runs the Flask app in debug mode.

