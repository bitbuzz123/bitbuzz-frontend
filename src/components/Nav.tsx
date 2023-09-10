import React, { useState,SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

const Nav =()=>{
  return(
    <nav className="sticky-top bg-white">
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
