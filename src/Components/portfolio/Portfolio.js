import React,{useState,useEffect} from 'react'
import './portfolio.css'
import{AiOutlineAppstore} from 'react-icons/ai'
import{SiAppstore} from 'react-icons/si'

const Portfolio = () => {

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
    <div>
      <h5>My Recent work</h5>
      <h2>Experience</h2>
      {data.map((item)=>(
        <div className='container portfolio__container'>
        <br></br>
      <h3>{item.Company_name}</h3>
        <article className='portfolio__item'>
        
        

          <div className='portfolio__item-image'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK4Acf1T9Cfi0l0UR0uXjVruhkwYtOBLYeJUw18sgxCA&s' />
         <div>
        
         <div className='portfolio__des'><p>
          {item.About_the_role}
          </p>
          
          <div className='Btn-class'><a href={item.link1} target='blank' className='btn'>
          <AiOutlineAppstore className='portfolio-logo'/>
          Playstore
          </a>
          <a href='https://apps.apple.com/in/app/soulocal/id1630926421' target='blank' className='btn'>
          <SiAppstore className='portfolio-logo'/>
          Appstore
          </a></div>

          </div>
          

         </div>
       
          
         
          </div>
         
          
        </article>
      </div>
      ))}
      
      
    </div>
    
  )
}

export default Portfolio
