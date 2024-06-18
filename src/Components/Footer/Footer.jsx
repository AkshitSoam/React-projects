import React from 'react'
import './Footer.css';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {

    const footerPart1 = [
        {id:1,link:"Necklaces"},
        {id:2,link:"Hoodies"},
        {id:3,link:"Jewelery Box"},
        {id:4,link:"T-Shirt"},
        {id:5,link:"Jacket"}
    ]

    const footerPart2 = [ 
       {id:1,link:"Contact us"},
        {id:2,link:"Track Your Order"},
        {id:3,link:"Product Care & repair"},
        {id:4,link:"Book an Appointment"},
        {id:5,link:"Shipping and Returns"}
    ]

    const footerPart3 = [ 
        {id:1,link:"Our Producers"},
         {id:2,link:"Sitemap"},
         {id:3,link:"Faq"},
         {id:4,link:"About us"},
         {id:5,link:"Terms and Conditions"}
     ]

  return (
    <div className='footer'>
        <div className="footer-start">
            <div className="footer-1-data">
                <div className="footer-para">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Neque, doloremque? Nihil delectus quibusdam dolore unde<br/>voluptate iure corporis dolorum debitis.
                </div>
                <div className="footer-logos">
                     <img src='https://i.pinimg.com/originals/f5/93/73/f5937348aa3be865dd0df29019d06320.jpg' height={90} width={390} alt='logos'/>
                </div>
            </div>
            <div className="footer-2-data">
                <div className="footer-2-heading">
                    <h2>CATALOG</h2>
                    {
                      footerPart1.map(({id,link})=>{
                        return <div key={id}>
                            <Link to='product' spy={true} smooth={true} duration={400} className='footer-links'>
                                <p>{link}</p>
                            </Link>
                        </div>
                      })
                    }
                </div>
            </div>
            <div className="footer-3-data">
                <h2>Customer Servies</h2>
                {
                    footerPart2.map(({id,link})=>{
                         return <div key={id}>
                            <NavLink to={`/services/${link}`} className='footer-links navlinks' target='-'>
                                <p>{link}</p>
                            </NavLink>
                         </div>
                    })
                }
            </div>
            <div className="footer-4-data">
                <h2>About us</h2>
                {
                    footerPart3.map(({id,link})=>{
                        return <div key={id}>
                             <NavLink to={`/about/${link}`} className='footer-links  navlinks' target='-'>
                                <p >{link}</p>
                             </NavLink>
                        </div>
                    })
                }
            </div>

            <div className="top-icon">
            <Link to='navbar' spy={true} smooth={true} duration={800}>
              <p className='arrow-text '>Back to top</p>
            </Link>
        </div>
        </div>
        <hr className='white'/>
    </div>
  )
}

export default Footer