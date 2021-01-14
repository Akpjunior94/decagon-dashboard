import React from 'react'

const CountryList = () => {
  const BarStyle = {width:"10rem",border:"none", padding:"0.5rem", outline:"none"};
  return (
    <div>
      <input 
        className="rounded-full"
        style={BarStyle}
        placeholder={"Country"}
      />
    </div>
  )
}

export default CountryList
