import React from 'react'
import './Banner.css';
import {FaShopify} from 'react-icons/fa';
import { Link } from 'react-scroll';
const Banner = () => {
  return (
    <div className='banner'>
        <div className="banner-start">
            <div className="ban-info">
                <div className="ban-head">
                   <h1>Collections</h1>
                </div>

               <div className="ban-para">
                   <p>You Can Explore ans Shop Many Different Collection<br/>
                      From Various Brand 
                    </p>
               </div>
                
                <Link to='product' spy={true} smooth={true}duration={400} ><div className="button"><FaShopify size={20}/>Shop Now</div></Link>
            </div>

            <div className="ban-img">
                <img className='banner-img' src='https://github.com/mdalmamunit427/react-ecommerce-minimal-website/blob/main/public/images/banner.png?raw=true' alt='' height={470} width={490}/>
            </div>
        </div>
    </div>
  )
}

export default Banner