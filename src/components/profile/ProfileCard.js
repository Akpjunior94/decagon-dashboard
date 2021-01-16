import React from 'react'
import Button from '../button/Button'

const ProfileCard = ({ profiles, isLoading }) => {
  return isLoading ? <h1>Loading....</h1> : <section className = "h-auto w-auto  mb-4 mt-4">  
  {profiles.map((profile) => {
    return (
      <div className="bg-white rounded-xl mb-3 p-4 flex justify-evenly">
      <img alt="img" src={profile.picture.large} className="rounded-full w-24 h-24 border-8 border-bcolor self-center"/>
      <div className = "text-primary">
        <h2 className = "text-lg font-semibold mb-6">{profile.name.first} {profile.name.last}</h2>
        <p className = "text-sm font-medium italic mb-6">{profile.location.city}, {profile.location.state}, {profile.location.postcode}</p>
        <p className = "text-xs font-light">{profile.email} {profile.cell}</p>
      </div>

      <div className="self-end">
        <Button/>
      </div>
    </div>
    )
  
  })}  
  </section>
}




export default ProfileCard
