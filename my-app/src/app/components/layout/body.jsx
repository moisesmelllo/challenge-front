import Main from '@/app/components/body/Main'
import React from 'react'
import Personal from '../body/Personal'
import Contact from '../body/Contact'

const Body = () => {
  return (
    <div className='relative flex flex-col items-center mx-auto -top-28
    h-[40rem] border border-black w-2/3 bg-white'>
      <Main />
      <div className='flex mt-64 h-[100%] w-[100%]'>
        <Personal />
        <Contact />
      </div>
    </div>
  )
}

export default Body