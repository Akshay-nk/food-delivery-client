import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SingleItem from '../components/SingleItem'
import { getFoodAPI } from '../services/allAPI'


function Home() {

  const [foods,setFoods]=useState([])

  const getfoods=async()=>{
    const responce=await getFoodAPI()
    setFoods(responce.data)
    //console.log(foods);
  }
  useEffect(()=>{
    getfoods()
  })
  
  return (
    <>
   <div className='mb-4'>
   <Header/>
   </div>
    
   <div className='m-3'>
   <SingleItem foods={foods}/>
   </div>
    
    
    
    </>
  )
}

export default Home