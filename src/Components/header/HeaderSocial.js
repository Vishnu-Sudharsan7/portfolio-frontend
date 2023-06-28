import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai';
import{AiFillGithub} from 'react-icons/ai';
import {AiOutlineDribbble} from 'react-icons/ai';


const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com' target='blank'><AiFillLinkedin/></a>
      <a href='https://github.com' target='blank'><AiFillGithub/></a>
      <a href='https://dribble.com' target='blank'><AiOutlineDribbble/></a>
    </div>
  )
}

export default HeaderSocial
