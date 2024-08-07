import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';


function Signin() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [SigninData, setData] = useState({
    name: null,

    password: null,

  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...SigninData, [name]: value })
    console.log(name, value);
    console.log(SigninData);
  }

  const addData = () => {
    const sgnData = {
      name: SigninData.name,

      password: SigninData.password,


    }
    console.log(sgnData);
    fetch("http://localhost:7070/User/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(sgnData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);
      
        if (data != null) {
          localStorage.setItem("userID", data.id);
          localStorage.setItem("userName", data.name);
          const token = data.token;
          // Store the token securely, e.g., in localStorage
          localStorage.setItem('token', token);
          navigate("/menu");
          
        } else {
          console.log("Failed to fetch data");
        }
      })
      
    let nwarning = document.getElementById("nameWarning");
    let pwarning = document.getElementById("passwarning");

    if (SigninData.name == '' || SigninData.name == null ) {
      nwarning.innerHTML = "Enter your Name";
      nwarning.style.color = "red";
      pwarning.innerHTML = "Enter Password";
      pwarning.style.color = "red";
    } else if (SigninData.password == '' || SigninData.password == null) {
      pwarning.innerHTML = "Enter Password";
      pwarning.style.color = "red";
    } else if (SigninData.name == '' || SigninData.name == null && SigninData.password == '' || SigninData.password == null) {
      nwarning.innerHTML = "Enter your Name";
      nwarning.style.color = "red";
      pwarning.innerHTML = "Enter Password";
      pwarning.style.color = "red";

    } 

  }
  return (
    <div>
      {/* <div class="text-center text-white icon-white mt-3">
   <svg viewBox="0 0 24 24" class="icon-white rounded-circle mt-3  " style={{width: "100", height: "100px"}}>
        <path d="M8.1,13.34L3.91,9.16C2.35,7.59 2.35,5.06 3.91,3.5L10.93,10.5L8.1,13.34M13.41,13L20.29,19.88L18.88,21.29L12,14.41L5.12,21.29L3.71,19.88L13.36,10.22L13.16,10C12.38,9.23 12.38,7.97 13.16,7.19L17.5,2.82L18.43,3.74L15.19,7L16.15,7.94L19.39,4.69L20.31,5.61L17.06,8.85L18,9.81L21.26,6.56L22.18,7.5L17.81,11.84C17.03,12.62 15.77,12.62 15,11.84L14.78,11.64L13.41,13Z"></path></svg>
    </div> */}

      <form className="mt-3">
        <div className="mb-2">
          <label for="exampleInputEmail1" className="form-label" >Name</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="name" value={SigninData.name}
            onChange={handleChange} />


        </div>
        <p id="nameWarning"></p>

        <div class="mb-2">
          <label for="exampleInputEmail1" className="form-label" >Password</label>
          <input type="email" className="form-control" id="exampleInputEmail1" name="password" value={SigninData.password}
            onChange={handleChange} />


        </div>
        <p id="passWarning"></p>


        <div className="d-grid gap-2">
          <button className="btn btnn btn-danger rounded" type="button" onClick={addData}>Button</button>
        </div>
      </form>
    </div>





  );
}



export default Signin;