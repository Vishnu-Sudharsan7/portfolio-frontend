import React, { useState, useEffect } from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocial'

const Header = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/data');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
  
      <header>
        <div className=''>
          
           {data.map((item) => (
          <div key={item._id} className="container.header__container">
            <h5>Hello, I'm</h5>
             <h1>{item.name} </h1>
             <h5 className='text-light'>{item.description}</h5>
            
          </div>
        ))}
         
        
<CTA />
    <div className='me'>
      <img src="https://i.pinimg.com/originals/a7/1f/c8/a71fc8383338e5a8081fd20f117ac484.png"alr="me"/>
    </div>
    <a href="#contact" className='scroll__down'>Scroll Down</a>
    <HeaderSocial />
    </div>
      </header>
    
  )
}

export default Header
