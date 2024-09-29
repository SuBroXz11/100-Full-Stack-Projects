from flask import Blueprint, render_template
from controllers.users import add_user_function
import sys
from models.user import User

main = Blueprint('main', __name__) #routename = main

@main.route('/', methods=['GET'])
def home():
    data=User.get_all()
    return render_template('index.html', data=data)

@main.route('/adduser', methods=['GET', 'POST'])
def add_user():
    data=add_user_function()
    print(data, file=sys.stderr)
    return render_template('adduser.html', data=data)