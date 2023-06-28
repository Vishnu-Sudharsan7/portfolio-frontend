import React, { useState, useEffect } from 'react';
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';

const Experience = () => {
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

  const renderCards = (area_of_interest) => {
    if (!area_of_interest) {
      return null; // Handle the case when area_of_interest is undefined or empty
    }

    const frontendTechs = area_of_interest.frontend.split(',');
    const backendTechs = area_of_interest.backend.split(',');

    return (
      <div className='experience__container'>

        <div className='experience__content'>
        {frontendTechs.length > 0 && (
          <div  >
            <h2>Front-End</h2>
            <div>
              {frontendTechs.map((tech, index) => (
                <div key={index} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <h3>{tech}</h3>
                  {/* Additional card content */}
                </div>
              ))}
            </div>
          </div>
        )}

        </div>
        <div className='experience__content'>
        {backendTechs.length > 0 && (
          <div >
            <h2>Back-End</h2  >
            <div>
              {backendTechs.map((tech, index) => (
                <div key={index} className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon" />
                  <h3>{tech}</h3>
                  {/* Additional card content */}
                </div>
              ))}
            </div>
          </div>
        )}
        </div>
      </div>
    );
  };

  return (
    <section id="experience">
       <h2>Areas of Interest</h2>
        <h5>This is my Tech Stack</h5>
      <div>
       

        <div>
          <div className="">
            {data.map((item) => (
              <div key={item._id} className="">
                {renderCards(item.area_of_interest)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
