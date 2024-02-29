import React from "react";
import './Navbar.css'

const Navbar =() =>{
return(
    <div>
<div class="container-fluid d-lg-flex justify-content-between d-none pt-2">
    <div class="row mt-2 ms-2">
        <a>
            <svg viewBox="0 0 24 24" class="icon-white   navbar-brand" style={{width: "35px", height:"35px"}}>
                <path d="M8.1,13.34L3.91,9.16C2.35,7.59 2.35,5.06 3.91,3.5L10.93,10.5L8.1,13.34M13.41,13L20.29,19.88L18.88,21.29L12,14.41L5.12,21.29L3.71,19.88L13.36,10.22L13.16,10C12.38,9.23 12.38,7.97 13.16,7.19L17.5,2.82L18.43,3.74L15.19,7L16.15,7.94L19.39,4.69L20.31,5.61L17.06,8.85L18,9.81L21.26,6.56L22.18,7.5L17.81,11.84C17.03,12.62 15.77,12.62 15,11.84L14.78,11.64L13.41,13Z"></path>
            </svg>&nbsp;<span style={{fontsize: "larger"}}>Mealia</span></a>
    </div>
    <div class="row mt-2">
        <ul class=" flex-grow-1 d-flex">
            <li class="">
                <a class="" href="">Home</a>
            </li>
            <li class="">
                <a class="" href="#">Dishes</a>
            </li>
            <li class="">
                <a class="" href="#">Mega Menu</a>
            </li>
            <li class="">
                <a class="" href="#">Page</a>
            </li>
            <li class="">
                <a class="" href="#">Admin</a>
            </li>

        </ul>
    </div>
    <div class="row mt-2">
        <ul class=" d-flex    me-2" style={{liststyle: "none"}}>

            <li class="li ">

                <a class="" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">

                    <slot></slot>

                </a>

                <div class="offcanvas offcanvas-end " tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
                    <div class="offcanvas-header">
                        <h5 id="offcanvasTopLabel">Your Order.</h5>
                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                        <h3></h3>

                        <div class="card text-dark bg-light mb-3 " style={{maxwidth: "540px",}} >
                            <div class="row g-0 justify-content-center ">
                                <div class="col-md-4">
                                    <img src="" class="img-fluid rounded-start" alt="..." />
                                </div>
                                <div class="col-md-8  d-flex">
                                    <div class="card-body ">
                                        <h5 class="card-title"></h5>
                                      

                                    </div>
                                    <div className="card-footer pt-4" style={{backgroundcolor:" #f5c332"}}
                                        ><h5></h5></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div  className=" offcanvas-footer  text-dark p-3 shadow ">
                        <div class="container-fluid bg-body   ">
                            <div class="row justify-content-around ">
                                <div class="col-md-5 text-center ">
                                    <button type="button" class="btn btn-outline-warning p-3" aria-label="Close"
                                    data-bs-dismiss="offcanvas">View Order</button>
                                </div>
                                <div class="col-md-5 text-center">
                                    <button type="button" class="btn btn-warning p-3" aria-label="Close" data-bs-dismiss="offcanvas"
                                  >Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>

            <li class="li ">
                <a class="" href="#">
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