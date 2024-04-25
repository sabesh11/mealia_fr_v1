import React, { useState, useEffect, } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import axios from 'axios';

const Admin = () => {

    const [foodslist, setfood] = useState([]);
    const [food, addfood] = useState({
        food: "",
        img: "",
        quantity: "",
        price: "",
        total: "",
    });

    useEffect(() => {
        return () => {
            fetch("http://localhost:7070/food/getfood",

            )
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    setfood(data);
                    console.log(data);
                })

        }
    }, [])


    const handleChange = (event) => {
        const { name, value } = event.target;
        addfood({ ...food, [name]: value })
        console.log(name, value);
        console.log(food);
    }



    const addFooditem = () => {

        let add = {
            food: food.food,
            img: food.img,
            quantity: food.quantity,
            price: food.price,
            total: food.total,


        }

        fetch(`http://localhost:7070/food/addfood`,
            {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(add),
            }).then(response => response.json())
            .then(data => {

                console.log(data);


            })
    }

    const deleteCart = (id,i) => {
        console.log(id);

        axios.get(`http://localhost:7070/food/deletecart/${id}`)
            .then((res) => {

                foodslist.splice(i, 1);


            })
            .catch((err) => {

            })







    }

    return (
        <>
            <div className="container-fluid pt-5">
                <div className="container">
                    <div className="text-center fs-2 fw-bold">
                        <p>ADMIN DASHBOARD</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container">
                    <Tabs
                        defaultActiveKey="profile"
                        id="fill-tab-example"
                        className="mb-3"
                        fill
                    >
                        <Tab eventKey="employ" title="ADD FOOD DETAILS">
                            <div className="row  pt-5 ">
                                <div className="col-3 d-grid">
                                    <label>food: </label>
                                    <label>img: </label>
                                    <label>price: </label>
                                    <label>quantity: </label>
                                    <label>total: </label>


                                </div>
                                <div className="col-5 d-grid">
                                    <input type="text" onChange={handleChange} name='food' value={food.food}></input>
                                    <input type="text" onChange={handleChange} name='img' value={food.img}></input>
                                    <input type="text" onChange={handleChange} name='price' value={food.price}></input>
                                    <input type="text" onChange={handleChange} name='quantity' value={food.quantity}></input>
                                    <input type="text" onChange={handleChange} name='total' value={food.total}></input>

                                </div>
                            </div>
                            <div className="row text-center pt-3 ms-5 ">

                                <button style={{ width: "9em" }} className="bg-primary p-1 text-white border-0"
                                    onClick={addFooditem}>Add product</button>

                            </div>


                        </Tab>
                        <Tab eventKey="insert" title="UPDATE FOOD DETAILS">
                            <table className="table mt-5">
                                <thead>
                                    <tr>
                                        <th scope="col">Products</th>
                                       
                                        <th scope="col">Price</th>
                                        <th scope="col">Total</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody >
                                    {Array.isArray(foodslist) && foodslist.map((cart, index) => (
                                        <tr  >
                                            <td scope="row">
                                                <div className="card  mb-3 border-0" style={{ maxWidth: "200px", }}>
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <img src={cart.img} className="img-fluid rounded-start" ></img>
                                                        </div>
                                                        <div className="col-md-8  d-flex">
                                                            <div className="card-body ">
                                                                <h5 className="card-title">{cart.food} </h5>

                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                           
                                            <td className="p-4">{cart.price}</td>
                                            <td className="p-4">{cart.total}</td>
                                            <td className="p-4">
                                                <button type="button" className="btn border-0 " onClick={() => deleteCart(cart.id,index)}>
                                                    <i className="bi bi-trash3"></i></button>
                                                <button type="button" className="btn border-0 ">
                                                    <i className="bi bi-pencil-square"></i></button></td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </Tab>

                    </Tabs>
                </div>
            </div>

        </>
    )
}

export default Admin;