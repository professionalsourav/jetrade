import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';

const Footer = () => {
  const navigateToWebsite = () => {
    window.open('https://centumworld.com/', '_blank');
  };
  return (
    <div className='footer'>
       <p>
            All Right Reserved  <b onClick={navigateToWebsite}>&copy;CentumWorld</b>
        </p>
       
    </div>
  )
}

export default Footer