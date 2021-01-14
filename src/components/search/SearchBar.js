import React from 'react'

const SearchBar = () => {
  const BarStyle = {width:"15rem",border:"none", padding:"0.5rem", outline:"none"};
  return (
    <div>
      <input
        id="pTextColor" 
        className="rounded-full"
        style={BarStyle}
        placeholder={"Find in list"}
      />
    </div>
  )
}

export default SearchBar
