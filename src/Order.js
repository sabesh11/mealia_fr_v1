import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
const Order = ({ cartlist, total }) => {

    let userId = localStorage.getItem("userID");




    function incQuantity(ind) {
        cartlist[ind].quantity += 1

    }

    function decQuantity(ind) {
        cartlist[ind].quantity -= 1;


    }



    // button click for removing deleteCart
    const deleteCart = (id, i) => {
        console.log(id, i);

        axios.get(`http://localhost:7070/food/deletecart/${userId}/${id}`)
            .then((res) => {


            })
            .catch((err) => {

            })
        cartlist.splice(i, 1);
        // let data={
        //     user:'sjjs'
        // }
        // axios.post(`http://localhost:7070/food/set`,data)
        // .then((res)=>{

        // })
        // .catch((err)=>{

        // })




    }

    return (
        <div>
            <div className="container-fluid  title p-5">
                <div className="row justify-content-between mt-5 ">
                    <div className="col-md-5  mt-2 text-lg-start text-center">
                        <h1>Your Order.</h1>
                    </div>
                    <div className="col-md-5   mt-2 text-lg-end text-center  text-white">
                        <ul className="sb-breadcrumbs">
                            <li><a href="/">Home</a></li>

                            <li>Cart</li>
                        </ul>
                    </div>
                </div>
            </div>
            <table className="table mt-5">
                <thead>
                    <tr>
                        <th scope="col">Products</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Total</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody >
                    {Array.isArray(cartlist) && cartlist.map((cart, index) => (
                        <tr  >
                            <td scope="row">
                                <div className="card  mb-3 border-0" style={{ maxWidth: "300px", }}>
                                    <div className="row g-0  ">
                                        <div className="col-md-4">
                                            <img src={cart.img} className="img-fluid rounded-start" alt="..."></img>
                                        </div>
                                        <div className="col-md-8  d-flex">
                                            <div className="card-body ">
                                                <h5 className="card-title">{cart.food} </h5>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="p-4">

                                <button type="button "
                                    className="rounded border-0" onClick={() => decQuantity(index)} id="decrement">-</button>&nbsp;
                                {cart.quantity}&nbsp;
                                <button type="button" className=" rounded border-0 " onClick={() => incQuantity(index)} >+</button>
                            </td>
                            <td className="p-4">{cart.price}</td>
                            <td className="p-4">{cart.total}</td>
                            <td className="p-4">
                                <button type="button" className="btn border-0 " onClick={() => deleteCart(cart.id, index)}>
                                    <i className="bi bi-trash3"></i></button></td>
                        </tr>
                    ))}
                </tbody>

            </table>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="card col-11  mb-3 mt-5 border-0 " style={{ maxWidth: "30rem" }}>

                        <div className="card-body mt-3 p-3  ">
                            <div className="d-flex justify-content-between "><h5 className="card-text">Subtotal:</h5><p>{total}</p></div> <br></br>
                            <div className="d-flex justify-content-between "><h5 className="card-text">Estimated shipping::</h5><p>40</p></div> <br></br>
                            <div className="d-flex justify-content-between "><h4 className="card-text">Total:</h4><h4 >{total + 40}</h4></div> <br />
                        </div>
                        <div className="card-footer bg-transparent row justify-content-between ">
                            <div className="col-md-6 text-center mt-2">
                                <button type="button" className="btn p-3 btn-outline-dark " aria-label="Close"
                                    data-bs-dismiss="offcanvas" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                                    </svg> &nbsp;&nbsp;Continue Shopping</button>
                            </div>
                            <div className="col-md-5 text-center mt-2">
                                <button type="button" className="btn  p-3 text-white"
                                    style={{
                                        backgroundImage: "linear-gradient(68.3deg, rgba(245, 177, 97, 1) 0.4%, rgba(236, 54, 110, 1) 100.2%)",
                                    }}

                                >Checkout</button>

                            </div></div>
                    </div>
                </div>
            </div>




        </div>

    );
}

export default Order;