import React from 'react'
// import { GiCloudDownload } from 'react-icons/fa'

const MalePagination = ({ profilesPerPage, totalProfiles, paginate  }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProfiles / profilesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <nav>
        <ul className="flex justify-between">
          <button className="bg-color focus:outline-none rounded-full  text-sm px-4 border  text-white ">
            {/* <GiCloudDownload/> */}
            Download results
          </button>

          <div className='flex justify-end'>
          {pageNumbers.map(number => (
            <li key={number} onClick={() => paginate(number)} className='page-no border rounded border-pink-300 p-3 '>
              <a>
                {number}
              </a>
            </li>
          ))}
          <button className="prev rounded border mx-1  p-2 outline-none" ><span>&#60;</span></button>
          <button className="next rounded border  p-2 outline-none"><span>&#62;</span></button>
          </div>
        </ul>

      </nav>
  )
}

export default MalePagination
