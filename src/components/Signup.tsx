import { useState,SyntheticEvent } from "react";
import Nav from "./Nav";
import Motto from "./Motto";


const Signup =()=>{
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [confirmpassword , setConfirm] = useState('')

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
      newErrors.password = 'Password must be at least 8 characters long';
      valid = false;
    } else {
      newErrors.password = '';
    }

    // Confirm Password validation
    if (password !== confirmpassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    } else {
      newErrors.confirmPassword = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e:SyntheticEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      const submit = async (e:SyntheticEvent) =>{
        e.preventDefault();
        await fetch('https://localhost:8000/api/signupauth',{
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
          <div className="container-fluid">
  <div className="row" style={{justifyContent: "center"}}>
    <div className="col-md-4" >
      <form onSubmit={handleSubmit} method="post"  className="col-md-12 my-3 bg-white p-4 rounded" style={{boxShadow:'3px 4px 7px black'}} >
        <Motto/>
        <div className="row mb-3">
          <div className="col-12">
            <input type="email" className='form-control' placeholder='Enter Your Email Address' name="email" id="" onChange={e => setEmail(e.target.value)}  />
            <small className="error text-danger">{errors.email}</small>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
            <input type="password" name=" pwd" className='form-control' placeholder='Enter Your Password' onChange={e => setPassword(e.target.value)} />
            <small className="error text-danger">{errors.password}</small>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12">
          <input type="confirmpassword" name="confirm" className='form-control' placeholder='Enter Your Confirm Password' onChange={e => setConfirm(e.target.value)} />
          <small className="error text-danger">{errors.confirmPassword}</small>
          </div>
        </div>
        
       
        <div className="mb-3 text-center">
          <button className=" col-12  btn text-white  signupbtn" type="submit">SignUp</button>
        </div>
        <div className="text-center">
          <p><hr/></p>
          <a href="/login" className="text-decoration-none buzztext"  style={{cursor: "pointer"}} role="link"><b>Existing User?</b></a>
        </div>
      </form>
    </div>
  </div>
</div>
       
      </div>
      
  
              
  );
}

export default Signup;