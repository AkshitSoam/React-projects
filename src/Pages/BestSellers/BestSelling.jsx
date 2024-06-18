import React, { useEffect, useState } from 'react'
import './BestSelling.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
// Import Swiper styles

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Cards from '../Cards/Cards';

const BestSelling = () => {

  const [products,setProducts] = useState([]);

  useEffect(()=>{
    fetch('product.json').then(res=>res.json()).then(data=>setProducts(data));
  },[])

  const bestSellers = products.filter((item)=>item.status === "Best Selers");

  return (
    <div className='selling'>
        <div className="sell-heading">Best Sellers</div>
        <div className="sell-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Placeat corrupti tempore accusantium nisi animi? Necessitatibus earum nobis unde nulla totam.
        </div>
        <div className="sell-slider">
       <Swiper
       slidesPerView={3}
        spaceBetween={10}
        
        autoplay={{
          delay: 2300,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
       {
        bestSellers.map((product)=>{
          return <SwiperSlide key={product.id}>
              <Link to={`/shop/${product.id}`}>
                        <img src={product.image} alt='images' height={200} width={300}/>
                    </Link>
                    <div className="cards-info">
                        <h4>{product.title}</h4>

                        <div className="cards-about">
                            <p className='card-category'>{product.category}</p>
                            <p>${product.price}</p>
                      </div>
                    </div>
          </SwiperSlide>
        })
       }
      </Swiper>
    
        </div>
    </div>
  )
}

export default BestSelling