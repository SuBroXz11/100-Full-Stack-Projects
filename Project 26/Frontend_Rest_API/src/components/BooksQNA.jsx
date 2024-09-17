import { useState, useEffect } from "react"
import axios from 'axios'
import { toast } from "react-toastify"

const BooksQNA = () => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(false)

    const getBooks = async () => {
        setLoading(true);
        try {
            const response = await axios.get('http://127.0.0.1:8080/books')
            const data = response.data || []
            setBooks(data)
        } catch (error) {
            toast.error("Error fetching the book data!")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getBooks()
    }, [])

    return (
        <div className="mockup-phone border-primary scale-150">
            <div className="camera"></div>
            <div className="display">
                <div className="artboard artboard-demo phone-1">
                    <div className="join join-vertical w-full">
                        <h1 className="text-center my-10 text-2xl font-bold text-white animate-pulse">Frequently Asked Questions</h1>

                        {loading ? (
                            <div className="flex justify-center items-center h-40">
                                <span className="loading loading-spinner loading-lg"></span>
                            </div>
                        ) : (
                            books.map((book, index) => (
                                <div
                                    key={book.id}
                                    className="collapse collapse-arrow join-item border border-base-300 bg-blue-100 text-blue-900 rounded-lg shadow-lg transition-all duration-300 ease-in-out "
                                >
                                    <input type="radio" name="book-accordion" defaultChecked={index === 0} />
                                    <div className="collapse-title text-lg font-medium hover:bg-blue-200 transition-all duration-200">
                                        Who is the author of {book.title} ?
                                    </div>
                                    <div className="collapse-content">
                                        <p>Author: {book.author}</p>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BooksQNA
