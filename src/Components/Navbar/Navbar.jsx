import React, { useState } from 'react'
import './Navbar.css';
import { FaBars, FaSearch, FaShopify, FaTimes, FaUser } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [menuOpen,setMenuOpen] = useState(false);
    
    const toggle = ()=>{
      setMenuOpen(!menuOpen);
    }

    const navLinks =[
        {title:'Jewelry & Accessories',path:'/'},
        {title:'Clothing & shoes',path:'/'},
        {title:'Home & Living',path:'/'},
        {title:'Wedding & Party',path:'/'},
        {title:'Toys & Entertainment',path:'/'},
        {title:'Art & Collectibles',path:'/'},
        {title:'CraftSupplies & Tools',path:'/'}
    ]
  return (
    <div className='navbar'>
      <div className="nav-start">
           <FaSearch className='search' />
           <Link to='/'><img className='logo'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcWXxSOxMNd8nBgjzC7gIyQoFj_ZSmUP_mDw&usqp=CAU'alt='Coral Logo' height={100} width={100}/></Link>
           <div className="nav-info">
              <div className="nav-info-1">
                <FaUser/>
                Account
              </div>
              <div className="nav-info-1">
                <FaShopify/>
                Shoping
              </div>
           </div>

           <div className="hamburger" onClick={toggle}>
               {
                menuOpen ? <FaTimes size={20}/> : <FaBars size={20}/>
               }
           </div>
      </div>
      <hr className='hor-line'/>
      <div className="nav-links">
          {
            navLinks.map(({title,path})=>{
               return <div key={title}>
                   <Link to={path} className='link'>{title}</Link>
               </div>
            })

          }
      </div>

      <div className={`mobile-links ${menuOpen? " " : "hidden"}`}>
        {
           navLinks.map(({title,path})=>{
            return <div key={title}>
                <Link to={path} className='mob-link link'>{title}</Link>
            </div>
         })
        }
      </div>
    </div>
  )
}

export default Navbar