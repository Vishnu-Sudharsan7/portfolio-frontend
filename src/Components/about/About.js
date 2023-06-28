import React, {useState,useEffect} from 'react'
import './about.css'
import {BsFillAwardFill} from 'react-icons/bs'
import {GrCertificate} from 'react-icons/gr'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const About = () => {

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
      <section id='about'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src='data:image/jpeg;base64,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' alt='About Image'></img>

            </div>
          </div>
          {data.map((item)=>(
            <div key={item._id} className='about__content'>
            <div className='about_cards'>
              <article className='about__card'>
                <BsFillAwardFill className='about__icon'/>
                <h5>Experience</h5>
                <small>{item.Years_of_Experience} Experience</small>
              </article>
              <article className='about__card'>
                <GrCertificate className='about__icon'/>
                <h5>Education</h5>
                <small>{item.Education}</small>
              </article>
              <article className='about__card'>
                <AiOutlineFundProjectionScreen className='about__icon'/>
                <h5>Projects</h5>
                <small>{item.Projects}</small>
              </article> 
            </div>
            <p>
            {item.About}
            </p>
            
            <a href='#contact' className='btn btn-primary'>Let's Get Connected</a>
          </div>

          ))}
          
        </div>



      </section>

    </div>
  )
}

export default About
