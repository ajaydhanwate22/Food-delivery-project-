import React, { useState } from 'react'
import Header from '../../Component/Header/Header'
import Exploremenu from '../../Component/ExploreMenu/Exploremenu'
import FoodDisplay from '../../Component/FoodDisplay/FoodDisplay';
import AppDownload from '../../Component/AppDownload/AppDownload';

export default function Home() {
  const [category, setCategory]= useState("All");
  return (
    <>
      <Header/>
      <Exploremenu  category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload/>
    </>
  )
}
