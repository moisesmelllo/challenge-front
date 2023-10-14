import Image from "next/image";
import { useContext, useEffect } from 'react';
import { CounterContext } from '../utils/ContextApiProvider';
import isUserFollowed from "../utils/isUserFollowed";

function Main ({click, onFollow, following, setFollowing})  {
  const { userData } = useContext(CounterContext);
  const followed = isUserFollowed();

  function handleFollow() {
    onFollow();
  }


  const image = userData?.picture?.thumbnail;
  const largeImage = userData?.picture?.large;
  const fullName = `${userData?.name?.first} ${userData?.name?.last}`;
  const location = `${userData?.location?.city}, ${userData?.location?.state}`;

   function handleClearLocalStorage() {
    localStorage.removeItem('savedPerson');
  }

  return ( 
    <div className="bg-white w-full h-26rem md:h-24rem">
      <Image
        src={image}
        alt='perfil image'
        width={5200}
        height={100}
        className="h-32 object-cover object-center"
      />

      <Image 
        src={largeImage}
        alt='perfil image'
        width={180}
        height={180}
        className="mx-auto relative -top-24 rounded-full"
      />

      <div className="flex flex-col md:flex-row justify-center -top-20 relative px-8 md:px-0">
        <button
          onClick={handleFollow}
          className={` bg-[#9022F3] px-8 py-2 rounded-md text-white mb-2 md:mb-0

          ${
            !followed
              ? 'hover:bg-green-600'
              : 'hover:bg-red-600'
          }`}
        >
          {followed ? 'unFollow' : 'Follow'}
        </button>
        <button
          onClick={click}
          className="border border-gray-300 shadow md:absolute right-0 px-4 py-1 rounded-md md:mr-2 font-bold"
        >
          Try the next one
        </button>
      </div>

      <div className="flex flex-col items-center justify-center mt-4 font-bold relative -top-20">
        <p className="text-4xl">{fullName}</p>
        <p>{location}</p>
      </div>
      <button
        onClick={handleClearLocalStorage}
      >Clear</button>
    </div>
  );
}

export default Main;
