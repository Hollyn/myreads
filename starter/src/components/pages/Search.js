import { SearchContext } from "../../contexts/SearchContext"
import SearchBar from "../elements/SeachBar"
import { useContext } from "react"
import  Book  from '../elements/Book'

const Search = () => {
  const {books, updateBook} = useContext(SearchContext)
  const handleUpdateBook = (book) => {
    updateBook(book)
  }
  console.log(books)
    return (
        <div className="search-books">
        <SearchBar />
        <div className="search-books-results">
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

export default Search