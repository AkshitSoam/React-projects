import React from 'react'
import './NewLetter.css';
import { Link } from 'react-router-dom';
const NewsLetter = () => {

    const newsImages = [
        {id:1,tags:"Footwear and Clothing",source:'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2xvdGhpbmd8ZW58MHx8MHx8fDA%3D'},
        {id:2,tags:"Woolen CLothes",source:'https://plus.unsplash.com/premium_photo-1677451335829-c863209d463b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNsb3RoaW5nfGVufDB8fDB8fHww'},
        {id:3,tags:"Air Shoes",source:'https://images.unsplash.com/photo-1588099768531-a72d4a198538?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNsb3RoaW5nfGVufDB8fDB8fHww'},
        {id:4,tags:"T-Shirts",source:'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3RoaW5nfGVufDB8fDB8fHww'},
        {id:5,tags:"Jeans",source:'https://images.unsplash.com/photo-1604272490759-7c465473958a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D'},
        {id:6,tags:"GYM Outfits",source:'https://images.unsplash.com/photo-1619341680266-5aefe75d1fbd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8'},
    ]
  return (
    <div className='newsletter'>
       <div className="news-start">
            <div className="news-head">
                <h1>Follow Product and Discount in Instagram</h1>
            </div>
            <div className="news-img">
                {
                    newsImages.map(({id,source,tags})=>{
                        return <div className="" key={id}>
                            <Link to={`/products/${id}`}>
                              <img src={source} height={180} width={180} className='images'/>
                             </Link>
                             <p className='news-img-para'>{tags}</p>
                        </div>
                    })
                }
            </div>
            <div className="news-subscribe">
                <h1>Or Subscribe TO The NewLetter</h1>
            </div>
            <div className="news-input">
                <div className="news-input-1">
                    <input type='email' placeholder='Enter Email' className='input' />
                    {/* <div className="line"></div> */}
                    <hr className='line'/>
                </div>
                <div className="btn ">
                    Submit
                    <hr/>
                </div>
            </div>
       </div>
    </div>
  )
}

export default NewsLetter