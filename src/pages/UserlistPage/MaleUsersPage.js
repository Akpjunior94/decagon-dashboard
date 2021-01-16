import React, { useState, useEffect} from 'react'
import MalePagination from '../../components/button/MalePagination'
import ProfileCard from '../../components/profile/ProfileCard'
import SearchPage from '../../components/search/SearchPage'

const MaleUsersPage = () => {
  const [profiles, setProfiles] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [profilesPerPage] = useState(3)
  const [isLoading, setIsLoading] = useState(true) 

  const fetchProfiles = () => {
    fetch("https://randomuser.me/api/?page=3&results=50&seed=abc/?inc=gender")
      .then((response) => response.json())
      .then((response) => {

        const males = response.results.filter(data => data.gender === "male");
        
          
          setProfiles(males);
          setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  // Get current profile
  const indexOfLastProfile = currentPage *profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = profiles.slice(indexOfFirstProfile, indexOfLastProfile);

  // change page
  const paginate = pageNumber => setCurrentPage(pageNumber)

  
  return (
    <div className="h-auto bg-secondary rounded-3xl">
      <div className="px-14 py-10">
        <h1 className="text-2xl font-bold text-primary mb-3">Male Users</h1>
        <p className="text-primary font-light text-xs mb-7">Filter by</p>
        <SearchPage/>

        {/* Display Card */}
        <ProfileCard profiles = {currentProfiles} isLoading = {isLoading} />
        <MalePagination profilesPerPage={profilesPerPage} totalProfiles={profiles.length} paginate={paginate}/>
        
      </div>
    </div>
  )
}

export default MaleUsersPage
