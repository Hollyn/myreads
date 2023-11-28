
import { APP as CONSTANTS } from "../../constants/constants";
import ButtonSearch from "../elements/ButtonSearch";
import Header from "../elements/Header";
import BookShelf from "../elements/BookShelf";
import { useContext } from "react";
import { BookShelfContext } from "../../contexts/BookShelfContext";

function getBookByShelf (books, shelf) {
    return books.filter(book => book.shelf === shelf)
}
  

const Shelves = () => {
    const {books} = useContext(BookShelfContext)
    return (
        <div className="app">
            <div className="list-books">
            <Header />
            <div className="list-books-content">
                <div>
                <BookShelf 
                    key={CONSTANTS.SHELVES_IDS.CURRENTLY_READING}
                    title={CONSTANTS.SHELF_TITLE.CURRENTLY_READING} 
                    books={getBookByShelf(books, CONSTANTS.SHELVES_IDS.CURRENTLY_READING)}
                    />
                <BookShelf 
                    key={CONSTANTS.SHELVES_IDS.WANT_TO_READ}
                    title={CONSTANTS.SHELF_TITLE.WANT_TO_READ} 
                    books={getBookByShelf(books, CONSTANTS.SHELVES_IDS.WANT_TO_READ)}/>
                <BookShelf 
                    key={CONSTANTS.SHELVES_IDS.READ}
                    title={CONSTANTS.SHELF_TITLE.READ} 
                    books={getBookByShelf(books, CONSTANTS.SHELVES_IDS.READ)}/>
            </div>
            </div>
            <ButtonSearch />
            </div>
        </div>
    )
}

export default Shelves