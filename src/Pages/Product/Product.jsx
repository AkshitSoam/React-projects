import React, { useEffect, useState } from 'react'
import './Product.css'
import {FaFilter} from 'react-icons/fa'
import Cards from '../Cards/Cards'
const Product = () => {

    //show all product
    const showAll = ()=>{
      setFilteredItems(products);
      selectedCategory('all');
    }

     //filtering function
     const filteredItem = (category)=>{
      const filtered = category == 'all' ? (products) : products.filter((item)=> item.category === category);
      setFilteredItems(filtered);
      setSelectedCategory(category);
 };



    const productLink = [
        {id:1,tags:"All Product",onClick:{showAll}},
        {id:2,tags:'Clothing'},
        {id:3,tags:'Hoodies'},
        {id:4,tags:"Bag"}
    ]

    const [products,setProduct] = useState([]);
    const [filteredItems,setFilteredItems] = useState([]);
    const [selectedCategory,setSelectedCategory] = useState('all');
    const [sortOptions,setSortOption] = useState('default');

    useEffect(()=>{
      const fetchData = async()=>{
        try {
          const response = await fetch('product.json');
          const result = await response.json();
          setProduct(result);
          setFilteredItems(result);
          
        } catch (error) {
           console.log(error);
        }
       
      }
      fetchData();
    },[])

   
  
  return (
    <div className='product'>
       <div className="product-start">
          <div className="product-head">
            <h2>Subscribe To The Newsletter</h2>
          </div>

          <div className="product-links">
            <div className="product-link-1">
                {
                    productLink.map(({id,tags,onClick})=>{
                       return <div key={id} onClick={onClick}>{tags}</div>
                    })
                }
            </div>
            <div className="product-link-2">
                <div className="product-link-2-icon">
                   <FaFilter/>
                </div>
                <div className="options">
                  <select className='options-value'>
                    <option value='default'>Default</option>
                    <option value='A-Z'>A-Z</option>
                    <option value='Z-A'>Z-A</option>
                    <option value='Low-To-High'>Low-To-High</option>
                    <option value='High-To-Low'>High-To-Low</option>
                  </select>
                </div>
            </div>
          </div>

          <div className="product-card">
            <Cards filteredItems = {filteredItems}/>
          </div>
       </div>
   </div>
  )
}

export default Product;