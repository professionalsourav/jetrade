import React from 'react'
import { NavLink , Link} from 'react-router-dom';
import {FcLike, FcDribbble, FcBullish} from "react-icons/fc"
import {CiMenuKebab} from "react-icons/ci"
import {FaChartSimple} from "react-icons/fa6"
import {ImWindows} from "react-icons/im"
import "./Header.css"


const Header = () => {

  const navigateToWebsite = () => {
    window.open('https://centumworld.com/', '_blank');
  };

  return (
    <>
 <div className='header'>
 <nav className="navbar navbar-expand-lg bg-body-primary">
  <div className="container-fluid">
    
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to="/" className="navbar-brand" > <FcBullish style={{fontSize:"larger", color:"blueviolet"}}/> JETTRADE FX</Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <button onClick={navigateToWebsite} class="btn btn-transparent">Home</button>
        </li>
       
       
      
        <li className="nav-item">
          <NavLink to='/' className="nav-link" style={{fontFamily:"'Playfair Display', serif"}}>SIGNUP</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/login' className="nav-link" >LOGIN</NavLink>
        </li>
       
       
       
       
      </ul>
    
    </div>
  </div>
</nav>
</div>

    </>
  )
}


export default Header