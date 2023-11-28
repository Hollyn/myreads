import { createContext, useState, useCallback, useEffect } from "react";
import * as BookAPI from "../utils/BooksAPI";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const serchBook = async (term) => {
        const res = await BookAPI.search(term.trim(), 10);
        if (!Array.isArray(res)){
          console.error()
        } else {
          setBooks(res);
        }
      };
      serchBook(searchTerm);
  }, [searchTerm]);

  const updateBook  = (book) => {
    BookAPI.update(book, book.shelf)
    const updatedBook = books.some(b => b.id === book.id)
    if (updatedBook) {
      setBooks([...books.filter(b => b.id !== book.id), book])
    } else {
      setBooks(books.concat(book))
    }
  }

  const value = {
    searchTerm,
    setSearchTerm,
    books,
    setBooks,
    loading,
    setLoading,
    updateBook,
  };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchProvider;
