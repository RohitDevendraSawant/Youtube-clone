import React, { useEffect } from 'react'

const LiveChatContainer = () => {
  useEffect();
  
  return (
    <div className='bg-slate-100 border p-3 border-black rounded-xl'>
        <div>
            <div className='flex'>
                <img className="w-8 rounded-4xl" src="/assets/images/user.jpg" alt="" />
                <span className=''>Rohit Sawant</span>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur?</span>
            </div>
        </div>
    </div>
  )
}

export default LiveChatContainer;