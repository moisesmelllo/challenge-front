'use client'

import { createContext, useState, useEffect } from 'react'

export const CounterContext = createContext();

// 2 - criar provider

const url = 'https://randomuser.me/api/'

export const CounterContextProvider = ({children}) => {
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

  return (
    <CounterContext.Provider value={{ userData, setUserData, handleClick}}>
      {children}
    </CounterContext.Provider>

  )
}