
import { ChevronDown } from 'lucide-react';

const Personal = ({userData}) => {
  return (
    <div className='flex flex-col'>
      <div className='space-y-4 p-4 h-40'>
        <p className='font-bold text-xl mt-2'>Personal info</p>
        <p>born at: {userData.nat}</p>
        <p>age: {userData.registered.age} years old</p>
      </div>
      <hr className='border border-gray-200'/>
      <div className='flex px-4 py-3 space-x-2 items-center cursor-pointer text-[#6da7ad] font-bold'>
        <ChevronDown />
        <p className='mb-1'>see more</p>
      </div>
    </div>
  )
}

export default Personal