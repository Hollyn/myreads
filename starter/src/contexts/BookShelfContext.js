import { createContext, useState, useEffect } from "react";
import * as BookAPI from '../utils/BooksAPI'

export const BookShelfContext = createContext()

const BookShelfProvider = ({children}) => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const getBooks = async() => {
          const res = await BookAPI.getAll()
          setBooks(res)
        }
        getBooks()
      }, [])

    const updateBooks  = (book) => {
        BookAPI.update(book, book.shelf)
        const updatedBook = books.some(b => b.id === book.id)
        if (updatedBook) {
          setBooks([...books.filter(b => b.id !== book.id), book])
        } else {
          setBooks(books.concat(book))
        }
      }

    const value = {books, setBooks, updateBooks}
    return <BookShelfContext.Provider value={value}>{children}</BookShelfContext.Provider> 
}

export default BookShelfProvider

