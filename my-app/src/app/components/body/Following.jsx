import Image from "next/image"


const Following = ({follower, handleRemoveFollow}) => {

  return (
    <div className="flex items-center">
      <Image 
        src={follower.picture.medium}
        alt="follower perfil picture"
        height={10}
        width={30}
        className="rounded-full mx-4 my-4"
      />
      <div className="text-xs flex flex-col justify-center items-start text-start">
        <div className="flex">
          <p>{follower.name.first}</p>
          <p>{follower.name.last}</p>
        </div>
        <p>
          {follower.location.city}
          {follower.location.state}
        </p>
      </div>
      <button 
        onClick={() => handleRemoveFollow(follower.email)}
        className="mx-4 ml-auto bg-red-600 text-white text-xs h-6 w-20 cursor-pointer">
          unfollow
      </button>
    </div>
  )
}

export default Following