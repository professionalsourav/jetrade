import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Frontlayout from './component/frontend/Frontlayout'


import Login from './component/frontend/pages/login/Login';
import Home from './component/frontend/pages/Home';
import Forgotpassword from './component/frontend/pages/forgot/Forgotpassword'
import Dashboard from './component/backend/pages/Dashboard'
import Chat from './component/backend/pages/Chat';
import Payment from './component/backend/pages/Payment'
import Share from './component/backend/pages/Share'
import Withdraw from './component/backend/pages/Withdraw'
import Pagenotfound from './component/Pagenotfound'
import Profile from './component/profile/Profile'
import Directreferal from './component/backend/pages/Directreferal'
import Referalincome from './component/backend/pages/Referalincome'
import Transcation from './component/backend/pages/Transcation'
import Myprofile from './component/profile/page/Myprofile'
import Changepassword from './component/profile/page/Changepassword'
import Support from './component/profile/page/Support'
import Download from './component/profile/page/Download'
import Termandcondition from './component/profile/page/Termandcondition'
import "./index.css"
import Register from './component/frontend/pages/register/Register';
import Sidebar from './component/backend/Sidebar';
import Sidenav from './component/backend/Sidenav';
import Navbar from './component/backend/Navbar';
import Cryptocur from './component/profile/page/Cryptocur';



function App() {


  return (
    <>
    
    <Routes>
      <Route path='/' element={<Frontlayout/>}>
        <Route index element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/forgot' element={<Forgotpassword/>}/>

      </Route>
      
         
           <Route path='/user' element={<Dashboard/>}/>
           <Route path='/user/chat'  element={<Chat/>}/>
           <Route path='/user/withdraw'  element={<Withdraw/>}/>
           <Route path='/user/payment'  element={<Payment/>}/>
           <Route path='/user/share'  element={<Share/>}/>
           <Route path='/user/directreferal'  element={<Directreferal/>}/>
           <Route path='/user/analytics'  element={<Referalincome/>}/>
           <Route path='/user/transcation'  element={<Transcation/>}/>
          <Route path='/user/nav' element={<Navbar/>}/>
        
      
        
     
           <Route path='/profile' element={<Myprofile/>}/>
           <Route path='/profile/changepassword' element={<Changepassword/>}/>
           <Route path='/profile/support' element={<Support/>}/>
           <Route path='/profile/crypto/:id'  element={<Download/>}/>
           <Route path='/profile/termcondition'  element={<Termandcondition/>}/>
           <Route path='/profile/crypto'  element={<Cryptocur/>}/>

      

      <Route path='*' element={<Pagenotfound/>}/>

    </Routes>
    

     
    </>
  )
}

export default App
