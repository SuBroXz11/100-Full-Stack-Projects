from flask import Flask, render_template
from config import Config
from extensions import db
from flask_migrate import Migrate

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)  # Load configuration from Config object
    register_resources(app)
    register_extensions(app)
    return app

def register_extensions(app):
    db.init_app(app)
    migrate = Migrate(app, db)  # Initialize Flask-Migrate

def register_resources(app):
    # homepage
    @app.route('/', methods=['GET'])
    def home():
        return render_template('index.html')

if __name__ == '__main__':
    app = create_app()
    app.run('127.0.0.1', port=8080)
