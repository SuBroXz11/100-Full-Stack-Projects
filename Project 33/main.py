from flask import Flask, render_template

def create_app():
    app = Flask(__name__)
    register_resources(app)
    return app

def register_resources(app):
    # homepage
    @app.route('/', methods=['GET'])
    def home():
        return render_template('index.html')
    
if __name__=='__main__':
    app = create_app()
    app.run('127.0.0.1', port=8080)