import React from 'react'
import { Link } from 'react-router-dom'
import './Cards.css';
const Cards = ({filteredItems}) => {
  return (
    <div className="cards">
         {
            filteredItems.map((item)=>{
                return <div  key={item.id} className='car'>
                    <Link to={`/shop/${item.id}`}>
                        <img src={item.image} alt='images' height={200} width={300}/>
                    </Link>
                    <div className="cards-info">
                        <h4>{item.title}</h4>

                        <div className="cards-about">
                            <p className='card-category'>{item.category}</p>
                            <p>${item.price}</p>
                      </div>
                    </div>

                   
                </div>
            })
         }
      
    </div>
  )
}

export default Cards