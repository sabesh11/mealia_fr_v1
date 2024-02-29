import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
 const [SignupData, setData]=useState({
    name:"",
    email:"",
    password:"",
    cpassword:"",
  })
  
   const handleChange =(event)=>{
      const { name, value } = event.target;
      setData({...SignupData,[name]:value})
      console.log(name, value);
      console.log(SignupData);
    }

   const addData=()=>{
      const sgnData={
        name:SignupData.name,
        email:SignupData.email,
        password:SignupData.password,
        confirmPassword:SignupData.cpassword,
        
      }
      console.log(sgnData);
      fetch("http://localhost:7070/User/signup",{
          
      method:"POST",
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sgnData),

  }).then((res)=>console.log(res))
    }
    return (
        <div>
            {/* <div class="text-center text-white icon-white mt-3">
   <svg viewBox="0 0 24 24" class="icon-white rounded-circle mt-3  " style={{width: "100", height: "100px"}}>
        <path d="M8.1,13.34L3.91,9.16C2.35,7.59 2.35,5.06 3.91,3.5L10.93,10.5L8.1,13.34M13.41,13L20.29,19.88L18.88,21.29L12,14.41L5.12,21.29L3.71,19.88L13.36,10.22L13.16,10C12.38,9.23 12.38,7.97 13.16,7.19L17.5,2.82L18.43,3.74L15.19,7L16.15,7.94L19.39,4.69L20.31,5.61L17.06,8.85L18,9.81L21.26,6.56L22.18,7.5L17.81,11.84C17.03,12.62 15.77,12.62 15,11.84L14.78,11.64L13.41,13Z"></path></svg>
    </div> */}
           
            <form class="mt-3">
            <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" >Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1"  name="name" value={SignupData.name}
    onChange={handleChange} />
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" >Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1"  name="email" value={SignupData.email} 
     onChange={handleChange}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" >Password</label>
    <input type="email" class="form-control" id="exampleInputEmail1"  name="password" value={SignupData.password} 
     onChange={handleChange}/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Confirm password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" name="cpassword" value={SignupData.cpassword} 
     onChange={handleChange}/>
  </div>
  
  <div class="d-grid gap-2">
  <button class="btn btn-danger rounded btnn" type="button" onClick={addData}>Button</button>
</div>
</form> 
  </div>


 
       
      
    );
}



export default Signup;