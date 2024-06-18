import React from 'react'
import './Category.css';
import { Link } from 'react-router-dom';

const Category = () => {
  
  const images = [
    {id:1,img:'https://assets.turbologo.ru/blog/ru/2021/11/12081458/Gucci_logo.png'},
    {id:2,img:'https://assets.turbologo.ru/blog/ru/2021/11/12073500/Burberry-Logo.png'},
    {id:3,img:'https://assets.turbologo.ru/blog/ru/2019/12/18163325/3-poloski-adidas-logo.png'},
    {id:4,img:'https://assets.turbologo.ru/blog/ru/2021/11/12082117/ZARA-logo.png'}
  ]
 
  return (
    <div className='category'>
        <div className="cat-img">
          {
            images.map(({id,img})=>{
               return <img key={id} src={img} height={100} width={200} className='logos'/>
            })
          }
        </div>

        {/* for clothing images */}
        <div className="cloth-explore">
          <div className="cloth-text">
           <Link to='/' className='cloth-text-link'>
              <h3>Explore New And <br/>Popular Styles</h3>
           </Link> 
          </div>
          <div className="cloth-img">
            <div className="cloth-img-section-1 effect">
              <Link to='/'> 
                  <img src='https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnJhbmQlMjBjbG90aGVzfGVufDB8fDB8fHww' alt='' height={200} width={300}/>
              </Link>

              <Link to='/'> 
                  <img src='https://images.unsplash.com/photo-1566206091558-7f218b696731?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHN0eWxlfGVufDB8fDB8fHww' alt='' height={200} width={300}/>
              </Link>
            </div>
            <div className="cloth-img-section-2 effect">
                 <Link to='/'> 
                    <img src='https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJyYW5kJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D' alt='' height={170} width={150}/>
                </Link>

                <Link to='/'> 
                  <img src='https://plus.unsplash.com/premium_photo-1675130119382-6f891206f406?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHN0eWxlfGVufDB8fDB8fHww' alt='' height={170} width={150}/>
               </Link>

               <Link to='/'> 
                  <img src='https://images.unsplash.com/photo-1525299374597-911581e1bdef?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3R5bGV8ZW58MHx8MHx8fDA%3D' alt='' height={170} width={150}/>
               </Link>

              <Link to='/'> 
                  <img src='https://images.unsplash.com/photo-1608748010899-18f300247112?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0eWxlfGVufDB8fDB8fHww' alt='' height={170} width={150}/>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Category;