import React,{useState,useEffect} from 'react'
import './services.css'
import {BsFillCheckCircleFill} from'react-icons/bs'

const Services = () => {
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
    <section id='services'>
      <h2>These are my projects</h2>
      {data.map((item)=>(
 <div className='container services__container'>
 <article className='service'>
   <div className='service_head'>
     <h3>{item.Project1_title}</h3>
   </div>
   <div className='service__list'>
    <p>{item.Project1_description}</p>
   </div>
 </article>
 <article className='service'>
   <div className='service_head'>
     <h3>{item.Project2_title}</h3>
   </div>
   <ul className='service__list'>
      <p>{item.Project2_description}</p>
   </ul>
 </article>
 <article className='service'>
   <div className='service_head'>
     <h3>{item.Project3_title}</h3>
   </div>
   <ul className='service__list'>
    <li><BsFillCheckCircleFill className='serivice_list-icon'/>
     <p>Lorem</p>
     </li>
    <li><BsFillCheckCircleFill className='serivice_list-icon'/>
     <p>Lorem</p>
     </li>
    <li><BsFillCheckCircleFill className='serivice_list-icon'/>
     <p>Lorem</p>
     </li>
    <li><BsFillCheckCircleFill className='serivice_list-icon'/>
     <p>Lorem</p>
     </li>
    <li><BsFillCheckCircleFill className='serivice_list-icon'/>
     <p>Lorem</p>
     </li>
   </ul>
 </article>
</div>
      ))}
     
    </section>
  )
}

export default Services
