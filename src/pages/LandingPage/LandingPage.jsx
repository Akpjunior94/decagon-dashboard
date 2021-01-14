import React from 'react'
// import UserListPage from '../UserlistPage/UserListPage'


function LandingPage() { 
  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="border-white border-2 p-6">
        <h1 className="text-white font-bold text-2xl mb-3 "> <span className="font-thin text-3xl">Hello,</span> Emerald</h1>
        <p className="text-white font-thin text-xs mb-7">Welcome to your dashboard, kindly sort through the user base</p>
        <input className="rounded-2xl mb-10 p-4 placeholder-opacity-100 bg-gray-200 focus:bg-white block w-full outline-none"  placeholder="Find a user"></input>
        <h2 className="text-white font-light text-xs">Show Users</h2>
      </div>
    </div>
  )
}

export default LandingPage
