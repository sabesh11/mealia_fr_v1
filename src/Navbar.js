import React from "react";
import './Navbar.css';
import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

   

const Navbar =({changePage,count,cart}) =>{
    const [show, setShow] = useState(false);
   
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let userId= localStorage.getItem("userID");

  
   

  

//  
return(
    <div>
<div className="container-fluid d-lg-flex justify-content-between d-none pt-2 cc">
    <div className="row mt-2 ms-2">
        <a>
            <svg viewBox="0 0 24 24" className="icon-white   navbar-brand" style={{width: "35px", height:"35px"}}>
                <path d="M8.1,13.34L3.91,9.16C2.35,7.59 2.35,5.06 3.91,3.5L10.93,10.5L8.1,13.34M13.41,13L20.29,19.88L18.88,21.29L12,14.41L5.12,21.29L3.71,19.88L13.36,10.22L13.16,10C12.38,9.23 12.38,7.97 13.16,7.19L17.5,2.82L18.43,3.74L15.19,7L16.15,7.94L19.39,4.69L20.31,5.61L17.06,8.85L18,9.81L21.26,6.56L22.18,7.5L17.81,11.84C17.03,12.62 15.77,12.62 15,11.84L14.78,11.64L13.41,13Z"></path>
            </svg>&nbsp;<span style={{fontsize: "larger"}}>Mealia</span></a>
    </div>
    <div className="row mt-2">
        <ul className=" flex-grow-1 d-flex">
            <li className="">
                <a className="" href="">Home</a>
            </li>
            <li className="">
                <a className="" href="#">Dishes</a>
            </li>
            <li className="">
                <a className="" href="#">Mega Menu</a>
            </li>
            <li className="">
                <a className="" href="#">Page</a>
            </li>
            <li className="">
                <a className="" href="#">Admin</a>
            </li>

        </ul>
    </div>
    <div className="row mt-2">
        <ul className=" d-flex    me-2" style={{liststyle: "none"}}>

            <li className="li ">

                <a className="" href="#" 
                onClick={handleShow} >

                <div className="cart align-self-center ">
        <span className="count">{count}</span>

        <svg xmlns="http://www.w3.org/2000/svg" style={{width: "22px",height: "22px",fill:"white"}} fill="" className="bi bi-cart3 material-icons" viewBox="0 0 16 16" >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg>
    </div>

                </a>

                <Offcanvas show={show} onHide={handleClose}  placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {Array.isArray(cart) && cart.map(cartlist =>(<div className="card text-dark bg-light mb-3 " style={{maxwidth: "540px"}} >
                            <div className="row g-0 justify-content-center ">
                                <div class="col-md-4">
                                    <img src={cartlist.img} class="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div class="col-md-8  d-flex">
                                    <div class="card-body ">
                                        <h5 class="card-title">{ cartlist.food } </h5>
                                        {/* <!-- <p class="card-text bg-danger"
                                        >price: ${{ cartlist.price }}</p> --> */}

                                        {/* <!-- <button @click="$emit('removecart',index)">remove</button> --> */}
                                    </div>
                                    <div class="card-footer pt-4" style={{backgroundcolor: "#f5c332"}}
                                        ><h5>${cartlist.price }</h5></div>
                                </div>
                            </div>
                        </div>
                         ) )}
        </Offcanvas.Body>
        <div class=" offcanvas-footer  text-dark p-3 shadow ">
                        <div class="container-fluid bg-body   ">    
                            <div class="row justify-content-around ">
                                <div class="col-md-5 text-center ">
                                    <button type="button" class="btn  p-3" aria-label="Close"
                                    data-bs-dismiss="offcanvas" onClick={changePage}>View Order</button>
                                </div>
                                <div class="col-md-5 text-center">
                                    <button type="button" class="btn  p-3 text-white " aria-label="Close" data-bs-dismiss="offcanvas"
                                  style={{
                                    backgroundImage: "linear-gradient(68.3deg, rgba(245, 177, 97, 1) 0.4%, rgba(236, 54, 110, 1) 100.2%)", }}
                                   >Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
      </Offcanvas>
            </li>

            <li class="li ">
                <a class="" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg" style={{width: "22px", height: "22px"}} >
                        <path d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,
                4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"></path>
                    </svg></a>
            </li>
            <li class="li ">

                <a class="" href="#"><svg xmlns="http://www.w3.org/2000/svg" style={{width: "22px", height: "22px"}} fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                    </svg></a>
            </li>

        </ul>
    </div>
    </div>
    
    </div>
)

}

export default Navbar;