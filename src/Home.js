
import { useState } from "react";
import React from "react";
import Signin from "./Signin"
import Signup from "./Signup";
import "./Home.css"
import { Link } from "react-router-dom";

const Home = () => {
  const [isLoggedIn, changeComp] = useState(true);

  const signin = () => {

    changeComp(false);
    console.log(isLoggedIn);
  };

  const signup = () => {
    changeComp(true);
    console.log(isLoggedIn);
  }

  return (
    <div>
      <div className="container mt-4 ">
        <div className="row justify-content-center mt-3 ms-0 me-0 pb-3">
          <div className="card shadow col-md-6 rounded" style={{ width: "27rem" }}>
            <div className="row head p-2  head">
              <h2 className="text-center text-white ">Mealia</h2>
            </div>
            <div className="text-center text-white icon-white mt-3">
              <svg viewBox="0 0 24 24" className="icon-white rounded-circle " style={{ width: " 70px", height: "70px", fill: "#f5c332" }}>
                <path d="M8.1,13.34L3.91,9.16C2.35,7.59 2.35,5.06 3.91,3.5L10.93,10.5L8.1,13.34M13.41,13L20.29,19.88L18.88,21.29L12,14.41L5.12,21.29L3.71,19.88L13.36,10.22L13.16,10C12.38,9.23 12.38,7.97 13.16,7.19L17.5,2.82L18.43,3.74L15.19,7L16.15,7.94L19.39,4.69L20.31,5.61L17.06,8.85L18,9.81L21.26,6.56L22.18,7.5L17.81,11.84C17.03,12.62 15.77,12.62 15,11.84L14.78,11.64L13.41,13Z"></path></svg>
            </div>
            <div className="card-body mt-2">
              <div className="text-center">
                <button type="button" className="btn  w-50" onClick={signup}>Signup</button>
                <button type="button" className="btn  w-50" onClick={signin}>Signin</button>

              </div>
              {isLoggedIn === true ? <Signup /> : <Signin />}

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Home;