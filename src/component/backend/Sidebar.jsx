import React, { useState } from 'react'
import "./Sidebar.css"
import { AnimatePresence, motion } from 'framer-motion'
import {FaBars, FaHome} from "react-icons/fa"
import {SiWebmoney} from "react-icons/si"
import {BsFillChatFill} from "react-icons/bs"
import {GiTakeMyMoney} from "react-icons/gi"
import {GiMoneyStack} from "react-icons/gi"
import {GiReceiveMoney} from "react-icons/gi"
import {FaMoneyBillTrendUp} from "react-icons/fa6"
import {GiRapidshareArrow} from "react-icons/gi"
import { NavLink } from 'react-router-dom';

const routes = [
  {
    path: "/user",
    name: "Dashboard",
    icon: <FaHome/>,
  },
  {
    path: "/user/chat",
    name: "Chat",
    icon: <BsFillChatFill/>,
  },
  {
    path: "/user/directreferal",
    name: "Referal",
    icon: <SiWebmoney/>,
  },
  {
    path: "/user/payment",
    name: "Payment",
    icon: <GiTakeMyMoney/>,
  },
  {
    path: "/user/referalincome",
    name: "Referal Income",
    icon: <GiMoneyStack/>,
  },
  {
    path: "/user/withdraw",
    name: "Withdrawal",
    icon: <GiReceiveMoney/>,
  },
  {
    path: "/user/transcation",
    name: "Transcation",
    icon: <FaMoneyBillTrendUp/>,
  },
  {
    path: "/user/share",
    name: "Share",
    icon: <GiRapidshareArrow/>,
  }



];

const Sidebar = ({childern}) => {
  const [isOpen, setIsOpen] =useState(true );

const toggle = () => setIsOpen(!isOpen);





  return ( <div className='main-container'>
    <motion.div animate= {{width: isOpen ? "200px" : "45px"}} className='sidebar'>


  <div className="top_section">
    {isOpen && <h1 className='logo'>
       JETTRADE FX
    </h1>}
    <div className="bars">
      <FaBars onClick={toggle}/>
    </div>
  </div>
  
  
  <section className='"routes'>
    {routes.map((route) => (
      <NavLink to={route.path} key = {route.name} className= "link">
        <div className='icon'>{route.icon} </div>
        <AnimatePresence>
        
        {isOpen && <motion.div className='link-text'>{route.name}</motion.div>}
        </AnimatePresence>
      </NavLink>
    ))}
  </section>
  </motion.div>
    <main>{childern}</main>

      </div>
  )
  
}

export default Sidebar