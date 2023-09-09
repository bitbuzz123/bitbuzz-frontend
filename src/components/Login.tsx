import React, { useState,SyntheticEvent } from "react";
import Motto from "./Motto";
import Nav from "./Nav";



const Login =()=>{
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  
 
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  // const handleChange = (e:SyntheticEvent) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Email validation
    if (!email || !email.match(/^\S+@\S+\.\S+$/i)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    } else {
      newErrors.email = '';
    }

    // Password validation
    if (!password || password.length < 8) {
      newErrors.password = 'Password must be at least 6 characters long';
      valid = false;
    } else {
      newErrors.password = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e:SyntheticEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const submit = async (e:SyntheticEvent) =>{
        e.preventDefault();
        await fetch('https://localhost:8000/api/user',{
          method : 'POST',
          headers:{'Content-Type':'application/json'},body:JSON.stringify({
            email  : email  ,
            password    : password
          })
        })
      }
      console.log('Form is valid, submit the data');
    } else {
      console.log('Form contains errors, please fix them');
    }
  };

  
  return(
      <div>
              <Nav/>
      <div className="container">
      <div className="row" style={{justifyContent: 'center'}}>
        <div className="col-md-6 p-5">
          <form action="" onSubmit={handleSubmit} method="post" style={{boxShadow:"2px 2px 5px black"}} className=" bg-white p-5 rounded" id="login">
            <Motto/>
            <div id="message"></div>
            <div className="mb-3">
            <label >Email Address</label>
          <input type="email"  className="form-control" name="email" placeholder="Enter Email Address" onChange={e => setEmail(e.target.value)} />
          <small className="error text-danger">{errors.email}</small>
            </div>
            <div className="mb-3">
            <label >Password</label>
          <input type="password"  className="form-control" placeholder="Enter Password" name="pwd" onChange={e => setPassword(e.target.value)} />
          <small className="error text-danger">{errors.password}</small>
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