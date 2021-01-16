import React from 'react';
// import ProfileCard from '../../components/profile/ProfileCard'
import SearchPage from '../../components/search/SearchPage';

const UserListPage = ({ profiles, isLoading }) => {
  return (
    <div className="h-auto bg-secondary rounded-3xl">
      <div className="px-14 py-10">
        <h1 className="text-2xl font-bold text-primary mb-3">All Users</h1>
        <p className="text-primary font-light text-xs mb-7">Filter by</p>
        <SearchPage/>

        {/* Display Card */}
        
        
      </div>
    </div>
  )
}

export default UserListPage
