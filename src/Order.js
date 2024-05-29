import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Order = ({ Total, menPage, }) => {
    const navigate = useNavigate();
    let userId = localStorage.getItem("userID");

    const [quantity, setQuantity] = useState();
    const [newValue, setNewvalue] = useState();
    const [total, setTotal] = useState(Total)


    useEffect(() => {
        cartfunc();
    }, []);

    const cartfunc = () => {

        axios.get(`http://localhost:7070/food/getcart/${userId}`)
            .then((res) => {
                console.log("===Res===", res.data);
                setQuantity(res.data);
            })
            .catch((err) => {

            })
    };


    console.log("total", total);

    const incQuantity = ind => {
        quantity[ind].quantity += 1
        let quant = quantity[ind].quantity;
        console.log("increaseQuantiy================", quant)
        setNewvalue(quant)
        quantity[ind].total += quantity[ind].price


        setTotal(total + quantity[ind].price)
        console.log("update total", total);
        localStorage.setItem("totalprice", total)
        // setQuantity(quantity[ind].quantity)

        // setQuantity(cartlist[ind].quantity);
        // console.log( cartlist[ind].quantity);
    };

    const decQuantity = ind => {
        quantity[ind].quantity -= 1;
        console.log("decreaseQuantity========", quantity[ind].quantity);
        setNewvalue(quantity[ind].quantity)
        quantity[ind].total = quantity[ind].total - quantity[ind].price
        setTotal(total - quantity[ind].price)
        localStorage.setItem("totalprice", total)
        // console.log(quantity[ind].total);

    };



    // button click for removing deleteCart
    const deleteCart = (id, i) => {
        console.log(id, i);

        axios.get(`http://localhost:7070/food/deletecart/${userId}/${id}`)
            .then((res) => {

                // quantity.splice(i, 1);
                cartfunc();
                console.log(quantity);
            })
            .catch((err) => {

            })


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
                    {Array.isArray(quantity) && quantity.map((cart, index) => (
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
                                <button type="button" className="btn p-3  " aria-label="Close" onClick={menPage}
                                    data-bs-dismiss="offcanvas" >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                                    </svg> &nbsp;&nbsp;Continue Shopping</button>
                            </div>
                            <div className="col-md-5 text-center mt-2">
                                <button type="button" className="btn  p-3 text-white" onClick={() => {
                                    navigate("/checkout")
                                }}
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