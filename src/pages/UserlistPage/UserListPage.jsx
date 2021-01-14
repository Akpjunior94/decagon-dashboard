import React, { useState, useEffect } from 'react';
import ProfileCard from '../../components/profile/ProfileCard'
import axios from 'axios';
import SearchPage from '../../components/search/SearchPage';

const UserListPage = () => {
  const [profiles, setProfiles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProfiles = async () => {
      const result = await axios(`https://randomuser.me/api/`);

      console.log(result.data);
      setProfiles(result.data);
      setIsLoading(false);
    }

    fetchProfiles()
  }, [])

  return (
    <div className="h-auto bg-secondary rounded-3xl">
      <div className="px-14 py-10">
        <h1 className="text-2xl font-bold text-primary mb-3">All Users</h1>
        <p className="text-primary font-light text-xs mb-7">Filter by</p>
        <SearchPage/>

        {/* Display Card */}
        <ProfileCard profiles = {profiles} isLoading = {isLoading}/>
        <ProfileCard profiles = {profiles} isLoading = {isLoading}/>
        <ProfileCard profiles = {profiles} isLoading = {isLoading}/>
      </div>
    </div>
  )
}

export default UserListPage