import React, { useState, useEffect } from 'react';
import { AiFillLinkedin, AiFillGithub, AiOutlineDribbble } from 'react-icons/ai';

const HeaderSocial = () => {
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
      {data.map((item) => (
        <div className='header__socials' key={item._id}>
          <a href={item.linkedin} target='_blank' rel='noopener noreferrer'>
            <AiFillLinkedin />
          </a>
          <a href={item.git_link} target='_blank' rel='noopener noreferrer'>
            <AiFillGithub />
          </a>
          <a href='' target='_blank' rel='noopener noreferrer'>
            <AiOutlineDribbble />
          </a>
        </div>
      ))}
    </div>
  );
};

export default HeaderSocial;
