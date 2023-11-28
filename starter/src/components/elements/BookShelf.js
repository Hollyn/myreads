import { useContext } from "react"
import Book from "./Book"
import { BookShelfContext } from "../../contexts/BookShelfContext"

const BookShelf = ({title, books}) => {
  const {updateBooks} = useContext(BookShelfContext)
  const handleUpdateBook = (book) => updateBooks(book)
    return (
        <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {
                        books.map(book => (
                            <Book key={book.id} book={book} onUpdateBook={handleUpdateBook} />
                        ))
                    }
                  </ol> 
                </div>
        </div>
    )
}

export default BookShelf