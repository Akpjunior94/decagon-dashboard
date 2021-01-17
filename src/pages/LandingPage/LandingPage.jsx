import React from 'react'
import { UserData } from '../../components/UserData'
import { Link } from 'react-router-dom'
import './LandingPageMenu.css'
import LandingPageSearchBar from '../../components/search/LandingPageSearchBar'


const LandingPage = () => { 


  return (
    <div className="w-full h-screen grid place-items-center">
      <div className="p-6">
        <h1 className="text-white font-bold text-2xl mb-3 "> <span className="font-thin text-3xl">Hello,</span> Emerald</h1>
        <p className="text-white font-thin text-xs mb-7">Welcome to your dashboard, kindly sort through the user base</p>
        <LandingPageSearchBar/>
        <h2 className="text-white font-light text-xs">Show Users</h2>

        {/* Landing page Menu link */}
        {UserData.map((item, index) => {
          return (
            <div className="userListMenu">
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <div className="icon-img" id={"icon"+index}>{item.icon}</div>
                  <span className="menu-text">{item.title}</span>
                </Link>
              </li>
            </div>
          )
        })

        }

      </div>
    </div>
  )
}

export default LandingPage
