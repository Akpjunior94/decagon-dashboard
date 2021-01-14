import React from 'react'
import CountryList from './CountryList'
import SearchBar from './SearchBar'
import Toogle from './Toogle'

const SearchPage = () => {
  return (
    <div className="flex justify-between items-center">
      <SearchBar 
       
      />
      <CountryList/>    
      <Toogle/>           
    </div>
  )
}

export default SearchPage

