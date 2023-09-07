import React, { useState,SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";

const Motto =()=>{
  return(
    <div>
      <p className="text-center"  style={{justifyContent:'center'}}>
      <img src="logo.jpg" height={65} alt="" /></p>
      <p style={{fontFamily:'Unna, serif'}} className="text-center h2 mb-5">We create , You believe</p>
    </div>

              
  );
}

export default Motto;
