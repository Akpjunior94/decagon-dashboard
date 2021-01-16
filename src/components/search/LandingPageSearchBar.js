import React, { useState } from 'react'

const LandingPageSearchBar = () => {


  return (
    <section>
      <form>
        <input 
          className="rounded-2xl mb-10 p-4 placeholder-opacity-100 bg-gray-200 focus:bg-white block w-full outline-none"  
          placeholder="Find a user"
          autoFocus
          />
      </form>
    </section>
  )
}

export default LandingPageSearchBar
