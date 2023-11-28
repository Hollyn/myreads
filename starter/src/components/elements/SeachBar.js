import { useContext } from "react"
import { Link } from "react-router-dom"
import { SearchContext } from "../../contexts/SearchContext"

const SearchBar = () => {
  const {searchTerm, setSearchTerm} = useContext(SearchContext)
    return (
      <div className="search-books-bar">
      <Link
        className="close-search"
        to='/'
      >
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          value={searchTerm}
          placeholder="Search by title, author, or ISBN"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
    )
}

export default SearchBar