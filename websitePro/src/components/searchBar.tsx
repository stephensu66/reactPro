import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";
import "./searchBar.css";

interface User{
  id: number;
  name: string;
}
interface SearchBarProps{
  setResult: (result: User[]) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({setResult }) => {
  const [input, setInput] = useState<string>("");

  const fetchData = (value: string) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json: User[]) => {
        const result = json.filter((user) => {
            return (
            value && user && user.name && user.name.toLowerCase().includes(value)
        );
      });
    setResult(result);
        
    });
  };

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
