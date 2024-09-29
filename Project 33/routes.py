from flask import Blueprint, render_template
from controllers import add_user_function

main = Blueprint('main', __name__) #routename = main

@main.route('/', methods=['GET'])
def home():
    return render_template('index.html')

@main.route('/adduser', methods=['GET', 'POST'])
def add_user():
    data=add_user_function()
    return render_template('adduser.html')