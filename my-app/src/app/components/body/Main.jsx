import Image from "next/image"

const Main = () => {
  return ( 
    <div className="w-[100%] h-32 bg-no-repeat bg-cover bg-center bg-[url('/perfil.png')]">
      <Image 
        src='/perfil.png'
        alt='perfil image'
        width='150'
        height='150'
        className="mx-auto mt-16"
      />

      <div className="w-[100%] mt-3 flex justify-center items-center relative">
          <button className="bg-[#9022F3] px-8 py-2 rounded-md text-white">Follow
          </button>
          <button 
          className="border border-gray-300 shadow absolute right-0 px-4 py-1 rounded-md mr-2 font-bold">
          Try the next one
          </button>
      </div>

    <div className="flex flex-col items-center justify-center mt-2 font-bold">
      <p className="text-4xl">Moises Melo</p>
      <p>Guarulhos, são paulo</p>
    </div>
    </div>
  )
}

export default Main