import React, { useState } from 'react';
import './App.css';
import { SearchBar } from "./components/searchBar";
import { SearchResult } from './components/searchResult';


interface User{
  id: number;
  name: string;
}

const App: React.FC = ()=> {
  const [result, setResult] = useState<User[]>([]);
  return (
      <div className="App">
        <div className='searchBarContainer'>
          <SearchBar setResult={setResult} />
          <SearchResult result={result} />
        </div>
      </div>
  );
}


export default App
