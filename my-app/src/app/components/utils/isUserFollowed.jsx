import { useContext } from 'react'
import { CounterContext } from '../utils/ContextApiProvider'

const isUserFollowed = () => {
  const {userData} = useContext(CounterContext)

  const savedPerson = localStorage.getItem('savedPerson');
    const savedData = savedPerson ? JSON.parse(savedPerson) : [];
    // Adiciona a pessoa seguida à lista de pessoas seguidas

    const isAlreadySaved = savedData.some((followed) => followed.email === userData.email);




  return (
    isAlreadySaved
  )
}



export default isUserFollowed

