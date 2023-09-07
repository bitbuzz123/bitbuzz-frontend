import React, { useState,SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

const Nav =()=>{
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const navigate = useNavigate();
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
  const handleRedirect = () => {
    navigate('/admin/products');
  };

  // Your component code here

  // Example of how to trigger a redirect
  if (redir){
    handleRedirect()
  }
  return(
    <nav className="sticky-top">
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <nav className="navbar navbar-expand-lg " >
            <div className="container-fluid">
            <a className="navbar-brand animate__animated animate__pulse animate__infinite" id="hire" href=""><img src="logo.jpg" height={50} alt="" /></a>
              <div className="d-inline-block">
                <a href="" className="btn btn-outline-secondary">Login</a>
                <a href="" className="btn btn-primary signupbtn">Sign Up</a>
              </div>
            </div>
          </nav>
        </div>
      </div>
  </div>
  </nav>

              
  );
}

export default Nav;
