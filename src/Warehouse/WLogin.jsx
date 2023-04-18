import React from "react";

// import "./indextoggle";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
function WLog() {
   

  const navigate = useNavigate();
     const [username,setUseranme] = useState('')
     const [password,setPassword] = useState('')
     const [authenticated, setauthenticated] = useState(
          localStorage.getItem(localStorage.getItem("authenticated") || false)
        );
        const users = [{ username: "amaan", password: "123" }];
     const handleSubmit = (e) => {
          e.preventDefault()
          const account = users.find((user) => user.username === username);
          if (account && account.password === password) {
              setauthenticated(true)
              localStorage.setItem("authenticated", true);
              navigate("/dashboard")
          }
        };
     
    //   const sigin = ()=>{
    //     Axios.post('http://localhost3001/register',{email : emailReg,password : passwordReg}).then((response)=>{
    //       console.log(response)
    //     });

    //   };
    
    return ( 
    <div className="log">
    {/* <h2 className="logo">Logiship</h2> */}
<div className="cont">  
  <div className="form sign-in">
    {/* <form onSubmit={handleSubmit}> */}
    <h2>Welcome, Let's ship it!</h2>
    <label>
      <span id="UserUnique">Username</span>
      <input type="email" />
    </label>
    <label>
      <span id="UserPass">Password</span>
      <input type="password"/>
    </label>
    <label>
        <span id="UserArea">Area</span>
        <input type="text" />
      </label>
    <p className="forgot-pass">Forgot password?</p>
    <button type="button" className="submit" onClick={handleSubmit}>Sign In</button>
    {/* </form> */}
  </div>  
  <div className="sub-cont">
    <div className="img">
      <div className="img__text m--up">
        <h2>New here?</h2>
        <p>Sign up and discover great amount of new opportunities!</p>
      </div>
      <div className="img__text m--in">
        <h2>One of us?</h2>
        <p>If you already have an account, just sign in.</p>
      </div>
      <div className="img__btn">
        <span className="m--up">Sign Up</span>
        <span className="m--in">Sign In</span>
      </div>
    </div>
    <div className="form sign-up">
      <h2>Join Us!</h2>
      <label>
        <span id="UserUnique">Name</span>
        <input type="text" />
      </label>
      <label>
        <span id="UserUnique">Email</span>
        <input type="email" />
      </label>
      <label>
        <span id="UserUnique">Password</span>
        <input type="password" />
      </label>
      <label>
        <span id="UserUnique">Area</span>
        <input type="text" />
      </label>
      <button type="button" className="submit">Sign Up</button>
      
    </div>
   </div>
  </div>
  
 </div>
    )
    
    
     
}
   
export default WLog;