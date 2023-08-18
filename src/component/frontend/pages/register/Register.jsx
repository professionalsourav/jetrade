import React, { useState } from 'react'
import video from "./videoBg.mp4";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import "./Register.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

  const[ph, setPh] = useState("");
  const[uid, setUid] = useState("");
  const [name, setName] = useState("");
  const [adhar, setAdhar] = useState("");
  const [pan, setPan] = useState("");
  const [adress, setAdress] = useState("");
  const [password, setPassword] = useState("");
  const [reEnterPassword,setReEnterPassword] = useState("");
  const [referal, setReferal] = useState("");
  const [errors, setErrors] = useState({});
  const Navigate = useNavigate();


  


   
  

 
      
  const handleSubmit = async  (e) => {
    e.preventDefault();
       
    try{
             const formData = {
              ph,
              uid,
              name, 
              adhar,
              pan,
              adress,
              password,
              referal,


             }

             const response = await axios.post("http://localhost:8000/register",formData);
             console.log(response.data);

             Navigate('/login');
    }
    catch(error){
      console.error(error);
    }
  };



   
  return (
    <div className='forgot'>
      <video src={video} autoPlay loop muted/>
        
     
        <div className="form">
          <h1>Register</h1>
         <form  onSubmit={handleSubmit}>

         <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className='input'>Referal</label>
      <input type="text"
          value={referal}
          onChange={(e) => setReferal(e.target.value)} className="form-control"
           id="exampleInputPassword1"
            />
                

    </div>



         <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className='input'>Name</label>
      <input type="text"
          value={name}
          onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputPassword1" />
                

    </div>


    <div className="lb-3">
      <label htmlFor="exampleInputEmail1" className='input'>Phone Number
      <PhoneInput
country={"in"}
type='text'
value={ph}
name= "ph"
onChange={setPh}
/>
</label>

     
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className='input'> User Id</label>
      <input type="tel"
          value={uid}
          onChange={(e) => setUid(e.target.value)}  className="form-control" id="exampleInputPassword1" />
    </div>

    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className='input'>Adhar Number</label>
      <input type="tel"
          value={adhar}
          onChange={(e) => setAdhar(e.target.value)} className="form-control" id="exampleInputPassword1" />
    </div>


    <div className="mb-3">
    <label htmlFor="formFile" className='input'>Adhar card front</label>
    <input className="form-control" type="file" id="formFile" />
  </div>
  <div className="mb-3">
    <label htmlFor="formFile" className='input'>Adhar card Back</label>
    <input className="form-control" type="file" id="formFile" />
  </div>


    <select className="form-select" aria-label="Default select example">
      
         <option selected>Gender</option>
          <option value={1}>male</option>
        <option value={2}>Female</option>
  
           </select>

           <br/>
         
           <select className="form-select" aria-label="Default select example">
      
           <option selected>Country</option>
            <option value={1}>India</option>
             <option value={2}>USA</option>
            <option value={2}>Russia</option>
            <option value={2}>China</option>
             <option value={3}>other..</option>

             </select>

             <br/>
            
            <div className="mb-3">
          <label htmlFor="birthday" className='input'>D.O.B:-</label>
          <br/>
          <input type="date" id="birthday" name="birthday" />
          </div>
    
    
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className='input'>PAN</label>
      <input type="text"
          value={pan}
          onChange={(e) => setPan(e.target.value)} className="form-control" id="exampleInputPassword1" />
    </div>

    <div className="mb-3">
    <label htmlFor="formFile" className="input">PAN CARD PHOTO</label>
    <input className="form-control" type="file" id="formFile" />
  </div>


  <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className='input'>Adress</label>
      <input  type="text"
          value={adress}
          onChange={(e) => setAdress(e.target.value)} className="form-control" id="exampleInputPassword1" />
    </div>
    
    
    <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className='input'> Password</label>
      <input type="password" value={password}
          onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
    </div>
    
    <button type="submit" class="btn btn-dark">submit</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/login" class="btn btn-dark">Login</Link>
    
  </form>
  
  
        </div>
    </div>
  )
}

export default Register