import React, { useState } from 'react'
import "./Forgot.css"
import video from "./videoBg.mp4";
import{Link} from "react-router-dom"

const Forgotpassword = () => {


  const [password, setPassword] = useState("");
  const [reEnterPassword,setReEnterPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
      
   
      // Perform form submission logic
      console.log('Form submitted');
    
  };



  return (
    <div className='forgot'>
      <video src={video} autoPlay loop muted/>
        
     
        <div className="form">
          <h1>Forget password</h1>
         <form onSubmit={handleSubmit}>
    <div className="lb-3">
      <label htmlFor="exampleInputEmail1" className='input'>New Password</label>
      <input type="password" value={password}
          onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputEmail1" />
     
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className='input'>Confirm Password</label>
      <input type="password" value={reEnterPassword}
          onChange={(e) => setReEnterPassword(e.target.value)}  className="form-control" id="exampleInputPassword1" />
    </div>
    
    <button type="submit" class="btn btn-dark">Reset</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    
    
  </form>
  
  
        </div>
    </div>
  )
}

export default Forgotpassword