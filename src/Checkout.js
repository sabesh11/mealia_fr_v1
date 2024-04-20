import React, { useEffect, useState, } from "react"
import Navbar from "./Navbar"
import NavMobile from "./NavMobile"
import './Checkout.css'
import axios from 'axios';

const Checkout = () =>{
    let userId = localStorage.getItem("userID");
    const [cart, addCart] = useState([])
    
  
    function cartfunc(){

        axios.get(`http://localhost:7070/food/getcart/${userId}`)
        .then((res)=>{
            console.log("===Res===",res.data);
            addCart(res.data);
        })
        .catch((err)=>{

        })
    }
    useEffect(() => {
        cartfunc();
    }, []);
    return(
<div>
    <Navbar/>
    <NavMobile/>
<div class="container-fluid  title p-5">
    <div class="row justify-content-between mt-5 ">
        <div class="col-md-5  mt-2 text-lg-start text-center">
            <h1>Checkout.</h1>
        </div>
        <div class="col-md-5   mt-2 text-lg-end text-center text-white">
            <ul class="sb-breadcrumbs">
                <li><a href="/">Home</a></li>

                <li>Checkout</li>
            </ul>
        </div>
    </div>
</div>
<div class="container-fluid">
    <div class="row mt-5 justify-content-around ">
        <div class="col-md-7 card p-4 border-0 shadow mt-5">
            <div class="row">
               <h3>Billing details.</h3> 
            </div>
            <form class="row  mt-3">
                <div class="col-md-6">
                    <label for="inputEmail4 " class="form-label">First name</label>
                    <input type="text" class="form-control input" id="inputEmail4" />
                </div>
                <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">Last name</label>
                    <input type="text" class="form-control input" id="inputPassword4" />
                </div>
                <div class="col-12 mt-3">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control input" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div class="col-12 mt-3">
                    <label for="inputAddress2" class="form-label">Address 2</label>
                    <input type="text" class="form-control input" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                </div>
                <div class="col-md-6 mt-3">
                    <label for="inputCity" class="form-label">City</label>
                    <input type="text" class="form-control input" id="inputCity" />
                </div>
                <div class="col-md-6 mt-3">
                    <label for="inputState" class="form-label">State</label>
                    <select id="inputState" class="form-select">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div><br/><br/>
                <div class="col-12 mt-5">
                    <h4>Additional information.</h4>
                    <div class="mt-2">
  <label for="exampleFormControlTextarea1" class="form-label">order notes</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
                </div>
               <div class="col-12 mt-5">
                <h4>Payment method.</h4>
                
                <div class="form-check mt-3">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label class="form-check-label" for="flexRadioDefault1">
    Direct bank transfer
  </label>
</div>
<div class="form-check mt-3">
  <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label class="form-check-label" for="flexRadioDefault2">
   Check payments
  </label>
</div>
<div class="form-check mt-3">
  <input class="form-check-input " type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
  <label class="form-check-label" for="flexRadioDefault3">
    cash on delivery
  </label>
</div>
               </div>
                <div class="col-12 mt-3">
                    <div class="col-md-5  mt-2">
                                    <button type="button" class="btn  p-2" aria-label="Close" data-bs-dismiss="offcanvas"
                                    ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-left-circle" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-5.904 2.803a.5.5 0 1 0 .707-.707L6.707 6h2.768a.5.5 0 1 0 0-1H5.5a.5.5 0 0 0-.5.5v3.975a.5.5 0 0 0 1 0V6.707z"/>
</svg>&nbsp; Place order</button>
                                
                            </div>
                </div>
            </form>
        </div>
        <div class="col-md-4 mt-5 ">
            <table class="table table-secondary ">
  <thead>
    <tr class="p-5">
      
      <th scope="col" >Products</th>
      <th scope="col">TotalPrice</th>
    </tr>
  </thead>
  <tbody>
    {/* rendering data */}
    {Array.isArray(cart) && cart.map(cartlist =>(
    <tr   class="p-5 ">
     
       <td>
                <div class="card  mb-3 border-0 bg-transparent " style={{ maxWidth: "300px", }}>
                    <div class="row g-0  ">
                        <div class="col-md-4">
                            <img src={cartlist.img} class="img-fluid rounded-start" alt="..." />
                        </div>
                        <div class="col-md-8  d-flex">
                            <div class="card-body ">
                                <h5 class="card-title" style={{fontSize:" 20px", letterSpacing: "0", fontWeight: "600"}}>
                                  {cartlist.food}  </h5>

                            </div>

                        </div>
                    </div>
                </div>
            </td>
      <td class="text-center  pt-4">{cartlist.total}</td>
     
    </tr>
     ) )}
    <tr class="mt-5 p-5">
       <th style={{fontSize: "20px", letterSpacing: "0", fontWeight: "600"}}
   >Total:</th> 
       <th style={{fontSize: "20px", letterSpacing: "0", fontWeight: "600"}}></th>
    </tr>
    
    
  </tbody>
</table>
        </div>
    </div>
</div>

</div>
    );
}

export default Checkout;