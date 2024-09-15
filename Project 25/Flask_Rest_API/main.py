from flask import Flask, jsonify, request

app = Flask(__name__)

# dummy data
books=[
    {"id":1, "title": "Book1", "author": "Author1"},
    {"id":2, "title": "Book2", "author": "Author2"},
    {"id":3, "title": "Book3", "author": "Author3"},
]

#  get all books
@app.route('/books', methods=['GET'])
def get_books():
    return jsonify(books)

#  get book by id
@app.route('/books/<int:book_id>', methods=['GET'])
def get_book_by_id(book_id):
    for book in books:
        if book['id']==book_id:
            return book
    return {'error': 'Book not found'}

if __name__ == '__main__':
    app.run(debug=True, port=8080) # port manually added because default was showing bug

