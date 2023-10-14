'use client'

import Nav from "./components/layout/nav"
import Body from "./components/layout/body"
import { useState,useContext, useEffect } from "react";
import { CounterContext } from "./components/utils/ContextApiProvider";

export default function Home() {
  const {userData} = useContext(CounterContext)
  const [following, setFollowing] = useState([]); // Estado para armazenar as pessoas seguidas

  const handleRemoveFollow = (email) => {
    const savedPerson = localStorage.getItem('savedPerson')

    const savedData = savedPerson ? JSON.parse(savedPerson) : [];

    if (email != null) {
        // Lógica para remover o seguidor com o ID fornecido
        const updatedFollowing = savedData.filter((followed) => followed.email !== email);
        localStorage.setItem('savedPerson', JSON.stringify(updatedFollowing));
        setFollowing(updatedFollowing);
      }
    }

  const handleFollow = () => {
    const savedPerson = localStorage.getItem('savedPerson');
    const savedData = savedPerson ? JSON.parse(savedPerson) : [];

    const isAlreadySaved = savedData.some((followed) => followed.email === userData.email);

    if (!isAlreadySaved) {
        // Adiciona os novos dados ao array
        const updatedFollowing = [...savedData, userData];
        localStorage.setItem('savedPerson', JSON.stringify(updatedFollowing));
        setFollowing(updatedFollowing);
    } else {
        const updatedFollowing = savedData.filter((followed) => followed.email !== userData.email)
        localStorage.setItem('savedPerson', JSON.stringify(updatedFollowing));
        setFollowing(updatedFollowing);
    }
  }

  useEffect(() => {
    // Carregar dados do armazenamento local ao iniciar a página, se houver dados salvos
    const savedPerson = localStorage.getItem('savedPerson');
    if (savedPerson) {
      const savedData = JSON.parse(savedPerson);
      setFollowing(savedData);
      console.log(savedData); // Mostrar todos os dados do armazenamento local no console
    }
  }, []);

  return (
    <main>
      <Nav
        following={following}
        handleFollow={handleFollow}
        handleRemoveFollow={handleRemoveFollow}
        />
      <Body onFollow={handleFollow} following={following} setFollowing={setFollowing} />
    </main>
  )
}
