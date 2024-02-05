import React from 'react'
import "./searchResult.css";
import { SearchSingleResult } from "./searchSingleResult";


interface User{
  id: number;
  name: string;
}
interface SearchResultProps{
  result: User[];
}

export const SearchResult: React.FC<SearchResultProps> = ({result}) => {
  return (
    <div className='results-list'>
     {
      result.map((user) => {
        return <SearchSingleResult user={user} key={user.id} />
      }
     )}
    </div>
  );
}
