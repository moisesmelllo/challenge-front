'use client'

import Image from "next/image"

function Main ({click, userData})  {

  const image = userData.picture.thumbnail
  return ( 
    <div className="bg-white w-[100%] h-[26rem] md:h-[24rem]">

        <Image
          src={image}
          alt='perfil image'
          width={5200}
          height={100}
          className={`h-32 object-cover object-center`}
        />


      <Image 
        src={userData.picture.large}
        alt='perfil image'
        width='180'
        height='180'
        className="mx-auto relative -top-24 rounded-full"
      />

      <div className="flex flex-col md:flex-row  justify-center -top-20 relative px-8 md:px-0">
          <button className="bg-[#9022F3] px-8 py-2 rounded-md text-white mb-2 md:mb-0">Follow
          </button>
          <button
          onClick={click}
          className="border border-gray-300 shadow md:absolute right-0 px-4 py-1 rounded-md md:mr-2 font-bold">
          Try the next one
          </button>
      </div>

    <div className="flex flex-col items-center justify-center mt-4 font-bold relative -top-20">
      <p className="text-4xl">{userData.name.first} {userData.name.last}</p>
      <p>{userData.location.city}, {userData.location.state}</p>
    </div>
    </div>
  )
}

export default Main