# server/app.py
from flask import Flask # type: ignore

app = Flask(__name__)  # This line creates a Flask app instance. The __name__ is a special Python variable representing the name of the current module.

# This decorator invokes Flask so that whenever a user visits the URL "/hi",
# it should run the function hello_world().
@app.route("/hi")
def hello_world():
    return ({"players": ["PLAYER 1", "PLAYER 2", "PLAYER 3"]})  # Return JSON response

# This condition checks if the script is being run directly (not imported as a module).
if __name__ == "__main__":
    # This runs the Flask app in debug mode.
    app.run(debug=True)
