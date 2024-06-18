import React from 'react'
import './Collection.css';
import { Link } from 'react-scroll';
const Collections = () => {
  return (
    <div className='collection'>
        <div className="collection-img">
            <h2 className='img-zara'><img src='https://assets.turbologo.ru/blog/ru/2021/11/12082117/ZARA-logo.png' alt='' height={100} width={180}/></h2>
            <p className='collection-para'>Lustrous Yet Understand.THe New Evening<br/>
            Wear Collection Exclusively Offered At the <br/>
            Reopend Giorgio Armani Boutique in Loss<br/>
            Angeles</p>
            <Link to='product' spy={true} smooth={true} duration={400}><div className="button-1">See Collection</div></Link>
        </div>
    </div>
  )
}

export default Collections