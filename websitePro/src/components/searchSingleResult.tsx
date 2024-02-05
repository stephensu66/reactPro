import React from 'react'
import "./searchSingleResult.css"

interface User{
    id: number;
    name: string;
  }
interface SearchSingleResultProps{
    user: User;
}

export const SearchSingleResult: React.FC<SearchSingleResultProps> = ({user}) => {
  return (
    <div className='search-result' onClick={(e) => alert(`You clicked on ${user.name}`)}>{user.name}</div>
  )
}
