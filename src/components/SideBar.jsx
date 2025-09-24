import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isSideBarOpen = useSelector((state) => state.app.isSideBarOpen);

  if (!isSideBarOpen) return null;
  
  return (
    <div className='p-2 m-2'>
        <ul>
            <li className='text-lg font-semibold p-1 m-1'><Link to="/">Home</Link></li>
            <li className='text-lg font-semibold p-1 m-1'>Shorts</li>
            <li className='text-lg font-semibold p-1 m-1'>subscriptions</li>
            <li className='text-lg font-semibold p-1 m-1'>Youtube Music</li>
            <hr />
            <li className='text-lg font-semibold p-1 m-1'>You</li>
            <li className='text-lg font-semibold p-1 m-1'>History</li>
            <li className='text-lg font-semibold p-1 m-1'>Playlist</li>
            <li className='text-lg font-semibold p-1 m-1'>Your Videos</li>
            <li className='text-lg font-semibold p-1 m-1'>Watch later</li>
            <li className='text-lg font-semibold p-1 m-1'>Liked videos</li>
            <li className='text-lg font-semibold p-1 m-1'>Downloads</li>
        </ul>
    </div>
  )
}

export default SideBar