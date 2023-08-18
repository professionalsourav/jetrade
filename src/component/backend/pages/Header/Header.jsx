import React from 'react'
import {MailOutlined} from "@ant-design/icons"

import { Image, Space, Typography } from 'antd'

import img from "./lion.jpeg"
import "./Header.css"
import { FcComboChart } from "react-icons/fc";
import { AiFillBell } from "react-icons/ai";


const Header = () => {
  return (
    <div className= "header-back">
      {/* <Image
         width={40}
         src={img}  ></Image> */}
      <Typography><FcComboChart/>JETTRADE FX</Typography>
      
        <MailOutlined style = {{fontSize: 24}}/>
      
      
      
      </div>
  )
}

export default Header