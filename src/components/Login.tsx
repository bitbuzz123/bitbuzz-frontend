import React, { useState,SyntheticEvent } from "react";
import Motto from "./Motto";
import Nav from "./Nav";
// import { useNavigate } from "react-router-dom";


const Login =()=>{
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  // const navigate = useNavigate();
  const [redir , setRedirect] = useState(false)
  const submit = async (e:SyntheticEvent) =>{
    e.preventDefault();
    await fetch('https://localhost:8000/api/user',{
      method : 'POST',
      headers:{'Content-Type':'application/json'},body:JSON.stringify({
        email  : email  ,
        password    : password
      })
    })
    setRedirect(true)
  }
  
  return(
      <div>
              <Nav/>
      <div className="container">
      <div className="row" style={{justifyContent: 'center'}}>
        <div className="col-md-6 p-5">
          <form action="" method="post" style={{boxShadow:"2px 2px 5px black"}} className=" bg-white p-5 rounded" id="login">
            <Motto/>
            <div id="message"></div>
            <div className="mb-3">
            <label >Email Address</label>
          <input type="email" required className="form-control" name="email" placeholder="Enter Email Address" onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
            <label >Password</label>
          <input type="password" required className="form-control" placeholder="Enter Password" name="pwd" onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="mb-3">
            <button className="btn btn-secondary text-white col-12 signupbtn" type="submit">Login</button>
            </div>
            
            <div className="text-center">
              <hr/>
              <button className="btn text-white col-12 buzzback mb-2"><img src="Gmail.png" alt="" />  Continue with google</button>
              <a href="/signup" className="text-decoration-none text-dark" style={{cursor: 'pointer'}} role="link">Don't have an account? <b className="buzztext">Sign up</b>
              </a>
              <img src="meeting.png" height={100} alt="" />
            </div>
          </form>
        </div>
      </div>
    </div>
      </div>

              
  );
}

export default Login;