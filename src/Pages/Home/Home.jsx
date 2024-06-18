import React from 'react'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import Product from '../Product/Product'
import Collections from '../Collectons/Collections'
import BestSelling from '../BestSellers/BestSelling'
import NewsLetter from '../NewsLetter/NewsLetter'


const Home = () => {
  return (
    <div>
        <Banner/>
        <Category/>
        <Product/>
        <Collections/>
        <BestSelling/>
        <NewsLetter/>
        
    </div>
  )
}

export default Home