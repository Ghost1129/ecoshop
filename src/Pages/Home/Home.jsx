import React, { useEffect, useState } from 'react'
import Hero from '../../Components/Hero/Hero'
import Navbar from '../../Components/Navbar'

import Products from '../../Components/Products'
import './Home.sass'

const Home = () => {

  let [products, setProducts] = useState([]);
    useEffect(() => {
        fetchData()
    }, [])
  
    async function fetchData() {
      const items = await fetch('https://fakestoreapi.com/products').then(
          (response) => response.json()
      )
      setProducts(items);
      }

  return (
    <>
    <Navbar/>
    <Hero/>
    <Products products ={products}/>
    
    </>
    
  )
}

export default Home