import { ChevronDown } from 'lucide-react';

const Contact = ({userData}) => {
  return (
    <div className='flex flex-col'>
      <div className='space-y-4 p-4'>
        <p className='font-bold text-xl mt-2'>Contact info</p>
        <p className='hidden sm:block whitespace-pre-line break-words overflow-clip'>email: {userData.email}</p>
        <p>phone 1: {userData.phone}</p>
      </div>
      <hr className='border border-gray-200'/>
      <div className='flex px-4 py-3 space-x-2 items-center cursor-pointer text-[#6da7ad] font-bold'>
        <ChevronDown />
        <p className='mb-1'>see more</p>
      </div>
    </div>
  )
}

export default Contact
