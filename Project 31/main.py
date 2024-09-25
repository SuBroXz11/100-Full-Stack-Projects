from flask import Flask, request, jsonify
from time import time

app = Flask(__name__)

# Settings for rate limiting

MAX_REQUESTS = 2 # Maximum requests allowed
TIME_WINDOW = 60 # Time window in seconds (e.g., 60 seconds)

# Dictionary to store users' request logs (user IPs and timestamps)

user_requests = {}

def is_rate_limited(ip):
    current_time = time()

    # Clean up old requests from the list that are outside the time window
    if ip in user_requests:
        user_requests[ip] = [timestamp for timestamp in user_requests[ip] if current_time - timestamp < TIME_WINDOW]

    # Check if the user is within the allowed request limit
    if ip in user_requests and len(user_requests[ip]) >= MAX_REQUESTS:
        return True
    else:
        # Log the current request timestamp
        if ip not in user_requests:
            user_requests[ip] = []
        user_requests[ip].append(current_time)
        return False

@app.route('/api/resource', methods=['GET'])
def api_resource():
    user_ip = request.remote_addr

    if is_rate_limited(user_ip):
        return jsonify({"error": "Rate limit exceeded. Try again later."}), 429

    return jsonify({"message": "Success! You have accessed the resource."})

if __name__ == "__main__":
    app.run(debug=True, port=8080)
