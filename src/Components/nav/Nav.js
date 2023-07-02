import React from 'react'
import './nav.css'
import {AiFillHome} from 'react-icons/ai'
import{AiOutlineUser} from 'react-icons/ai'
import{AiOutlineBook} from 'react-icons/ai'
import{MdMiscellaneousServices} from 'react-icons/md'
import{AiFillPhone} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav]= useState('#')
  return (
    <nav>
      <a href='#header' onClick={()=> setActiveNav('#')} className={activeNav === '#header'?'active':''}><AiFillHome/></a>
      <a href='#about' onClick={()=> setActiveNav('#about')}className={activeNav === '#about'?'active':''}><AiOutlineUser/></a>
      <a href='#experience' onClick={()=> setActiveNav('#experience')}className={activeNav === '#experience'?'active':''}><AiOutlineBook/></a>
      <a href='#services' onClick={()=> setActiveNav('#services')}className={activeNav === '#services'?'active':''}><MdMiscellaneousServices/></a>
      <a href='#contact' onClick={()=> setActiveNav('#contact')}className={activeNav === '#contact'?'active':''}><AiFillPhone/></a>
    </nav>
  )
}

export default Nav
