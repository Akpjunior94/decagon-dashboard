import React from 'react'
import Button from '../button/Button'

const ProfileCard = ({ profiles, isLoading }) => {
  return isLoading ? <h1>Loading....</h1> : 
  <section className = "bg-white h-auto p-5 flex justify-evenly rounded-xl mb-4 mt-4"> 
    <img className = "rounded-full w-24 h-24 border-8 border-bcolor self-center" src={profiles.results[0].picture.large} alt=""/>
    <div className = "text-primary">
      <h2 className = "text-lg font-semibold mb-6">{profiles.results[0].name.first} {profiles.results[0].name.last}</h2>
      <p className = "text-sm font-medium italic mb-6">{profiles.results[0].location.city}, {profiles.results[0].location.state}, {profiles.results[0].location.postcode}</p>
      <p className = "text-xs font-light">{profiles.results[0].email} {profiles.results[0].cell}</p>
    </div>

    <div className="self-end">
      <Button/>
    </div>
    
  </section>
}




export default ProfileCard
