'use client'

import Main from '@/app/components/body/Main'
import Personal from '../body/Personal'
import Contact from '../body/Contact'

import { useState, useEffect } from 'react'

const url = 'https://randomuser.me/api/'

const Body = () => {

  const [userData, setUserData] = useState(null)

  async function fetchData() {
      const res = await fetch(url)
      const data = await res.json()

      setUserData(data.results[0])
    }

    useEffect(() => {
      fetchData()
    }, [])
    
    function handleClick() {
      fetchData();
    }

    if (!userData) {
      return <div>Carregando...</div>;
      
    }

  return (
    <div className='w-2/3 mx-auto'>
      <div className='relative flex flex-col -top-28 shadow border border-gray-400'
      >
        <Main click={handleClick} userData={userData} />
      </div>

      <div className='flex relative bg-white -top-28 mt-1 space-x-1'>
        <div className='shadow border border-gray-400 w-[100%]'>
          <Personal userData={userData}/>
        </div>

        <div className='shadow border border-gray-400 w-[100%]'>
          <Contact userData={userData}/>
        </div>

      </div>
    </div>
  )
}

export default Body