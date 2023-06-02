import React, { useState, createContext } from "react";
import Home from "./pages/Home";

export const SearchContext = createContext("SearchContext");

function App() {
  const [filterValue, setFilterValue] = useState("")
  return (
    <SearchContext.Provider value={{filterValue, setFilterValue}}>
      <Home />
    </SearchContext.Provider>
  );
}

export default App;
