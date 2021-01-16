import React, { useState } from 'react'

const LandingPageSearchBar = ({ getQuery }) => {
  const [text, setText] = useState('')

    const onChange = (q) => {
      setText(q)
      getQuery(q)
    }

  return (
    <section>
      <form>
        <input 
          className="rounded-2xl mb-10 p-4 placeholder-opacity-100 bg-gray-200 focus:bg-white block w-full outline-none"  
          placeholder="Find a user"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
          />
      </form>
    </section>
  )
}

export default LandingPageSearchBar
