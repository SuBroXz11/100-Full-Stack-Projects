from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Dummy data representing a collection of books
books=[
    {"id":1, "title": "Book1", "author": "Author1"},
    {"id":2, "title": "Book2", "author": "Author2"},
    {"id":3, "title": "Book3", "author": "Author3"},
]

# landing page
@app.route('/')
def landing_page():
    return ''' <h1>Welcome to the Book API</h1>
                <h2>Below are the end points you can explore</h2>
                <h3API Endpoints <h3/> 
                <ul>
                <li>GET /books:    Returns a list of all books</li>
                <li> GET /books/{id}   : Returns a book by id</li>
                <li>POST /books   : Creates a new book</li>
                <li>PUT /books/{id}   : Updates a book by id</li>
                <li>DELETE /books/{id}   : Deletes a book by id</li>
                <ul/>'''



#  Get all books
@app.route('/books', methods=['GET'])
def get_books():
    return jsonify(books) # Return the list of books as JSON

#  Get book by id
@app.route('/books/<int:book_id>', methods=['GET'])
def get_book_by_id(book_id):
    for book in books:
        if book['id']==book_id:
            return book
    return {'error': 'Book not found'} # Return error if no book is found with the id

# Add new book
@app.route('/books', methods=['POST'])
def add_book():
    # Create a new book with an incremented id and data from the request body
    new_book ={'id':len(books)+1, 'title':request.json['title'], 'author':request.json['author']}
    books.append(new_book)
    return new_book


# Update book
@app.route('/books/<int:book_id>', methods=['PUT'])
def update_book(book_id):
    for book in books:
        if book['id']==book_id:
            book['title']=request.json['title']
            book['author']=request.json['author']
            return book
    return {'error': 'Book not found'}  
  
# Delete book
@app.route('/books/<int:book_id>', methods=['DELETE'])
def delete_book(book_id):
    for book in books:
        if book['id']==book_id:
            books.remove(book)
            return {'message':'Book deleted successfully'} 
    return {'error': 'Book not found'}  
  
if __name__ == '__main__':
    app.run(debug=True, port=8080) # Start the Flask app in debug mode on port 8080

