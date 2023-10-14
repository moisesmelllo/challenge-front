'use client'

import { ChevronDown } from 'lucide-react';
import { X } from 'lucide-react';
import { useState } from 'react';
import Following from '../body/Following';

const Nav = ({following, handleFollow, handleRemoveFollow}) => {
  const [toggle, setToggle ] = useState(false)
  return (
    <>
    <div className='absolute flex justify-between w-screen z-10 bg-[#8722f3] p-8 shadow-2xl text-white'>
      <p>users_like.me</p>
      {!toggle ? (
        following ? (
          <div 
            className='flex space-x-2 cursor-pointer' 
            onClick={() => setToggle(!toggle)}>
              <p>
                {`Following ${following.length} users`}
              </p>
              <ChevronDown />
          </div>
        ) : null
      ) : (
        <div 
            className='absolute end-10 bg-white text-black min-h-[20rem] max-h-[20rem] min-w-[20rem] mb-4 border border-black
             overflow-y-scroll' 
            >
              <div 
                onClick={() => setToggle(!toggle)}
                className='text-[#8722F3] flex justify-end items-center font-bold py-2 px-4 text-xl cursor-pointer'>
                {`Following ${following.length} users`}
                <X 
                  className='text-black ml-1'
                />
              </div>
              {following && following.map((follower) => (
                <Following
                  key={follower.email}
                  follower={follower}
                  handleFollow={handleFollow} 
                  handleRemoveFollow={handleRemoveFollow}
                  />
              ))}
          </div>
        
      )}
    </div>
    <div className='flex justify-center items-start bg-[#9022F3] text-3xl pb-32 pt-32 text-white'>
        <p>Find new users like you</p>
      </div>
    </>
  )
}

export default Nav