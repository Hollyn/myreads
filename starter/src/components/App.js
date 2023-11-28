import "../css/App.css";
import Search from "./pages/Search";
import { Routes, Route } from 'react-router-dom'
import Shelves from "./pages/Shelves";
import SearchProvider from "../contexts/SearchContext";
import BookShelfProvider from "../contexts/BookShelfContext";

function App() {
  return (
    <Routes>
        <Route
          path="/search" 
          element={
            <SearchProvider>
              <Search />
            </SearchProvider>
          }/>
        <Route
          exac path='/'
          element={

        <BookShelfProvider>
            <Shelves />
        </BookShelfProvider>
          }
        />
    </Routes>
    
  );
}

export default App;
