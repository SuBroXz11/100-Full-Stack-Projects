from flask import request
from models.user import User

def add_user_function():
    if request.method == ["POST"]:
        name=request.form['name']
        email=request.form['email']
        password=request.form['password']
        user=User(
            name=name,
            email=email,
            password=password
        )
        
        user.save()
        data={
            "id":"user.id",
            "name":"user.name",
            "email":"user.email",
            "password":"user.password",
        }
        return data