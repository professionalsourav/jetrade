import React, { useState } from 'react'
import video from "./videoBg.mp4";
import "./Login.css";
import{Link} from "react-router-dom"
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const[uid, setUid] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
      
      
     
      console.log('Form sucessfully submitted');
      Navigate('/user');
    
  };

  return (
    <div className='login'>
      <video src={video} autoPlay loop muted/>
        
     
      <div className="form">
        <h1>Login</h1>
          <form onSubmit={handleSubmit}>
             <div className="lb-3">
            <label htmlFor="exampleInputEmail1" className='input'>UserId</label>
              <input type="tel"
          value={uid}
          onChange={(e) => setUid(e.target.value)} className="form-control" id="exampleInputEmail1" />
   
              </div>
               <div className="mb-3">
                 <label htmlFor="exampleInputPassword1" className='input'>Password</label>
                  <input type="password" value={password}
          onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
                          </div>
             <div className="mb-9 form-check">
                 <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                   <label className='input' htmlFor="exampleCheck1">Remember Me</label>
             </div>
                <button type="submit" class="btn btn-sm btn-dark">Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <Link to='/forgot' class="btn btn-sm btn-dark">forgot password</Link><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <p className='input'>already have an account ?<Link to='/' class="btn btn-sm btn-link">Signup</Link></p>
          </form>


      </div>
    </div>
  )
}

export default Login