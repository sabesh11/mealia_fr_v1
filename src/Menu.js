import React, { useEffect, useState, } from "react"
import Navbar from "./Navbar"
import NavMobile from "./NavMobile"
import './Menu.css'
import axios from 'axios';


import Order from "./Order"

function Menu() {
    const [menuPage, changeMenupage] = useState(true)
    const [foodslist, setfood] = useState([]);
    const [cart, addCart] = useState([])
    const [priceTotal, setPriceTotal] = useState(0);
    const [pricelist, setPrice] = useState([])
    const [count, setCount] = useState(0);
    const [result, setResult] = useState(true)
    const [searchItem, setSearchItem] = useState('')
    const [disabledButtons, setDisabledButtons] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalCart,addModalCart] = useState([])
    // const [filteredfood, setFilteredUsers] = useState(foodslist)
    let userId = localStorage.getItem("userID");
    let token = localStorage.getItem("token")
    console.log(userId);


    //use effect for data rendering
    useEffect(() => {
        return () => {
            fetch("http://localhost:7070/food/getfood", {
                headers: { 'Authorization': `Bearer ${token}`, },
            })
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    setfood(data);
                    console.log(data);
                })
            cartfunc();
        }
    }, [])

    //function for cart item rendering
    function cartfunc() {

        axios.get(`http://localhost:7070/food/getcart/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => {
                console.log("===Res===", res.data);
                addCart(res.data);
                setCount(res.data.length)
            })
            .catch((err) => {

            })
    }

    // const handleInputChange = (e) => {
    //     const searchTerm = e.target.value;
    //     setSearchItem(searchTerm)



    // }
    // const filteredItems = foodslist.filter((food) =>
    //     food.food.toLowerCase().includes(searchItem.toLowerCase())
    //        );

    //      setFilteredUsers(filteredItems);

    const changeResult = () => {
        setResult(false)
    }

    //onclick func for cart adding
    const addtocart = (food, index) => {
        food.quantity++
        console.log("quantity=========", food.quantity);
        let add = {
            food: food.food,
            img: food.img,
            quantity: food.quantity,
            price: food.price,
            total: food.total,


        }
        addModalCart(add)
        cart.push(add);
        setCount(cart.length);
        setShowModal(!showModal);

        //for cart data store in DB 
        fetch(`http://localhost:7070/User/addcart/${userId}`,
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
        pricelist.push(cart[cart.length - 1].total);
        console.log(pricelist);
        setPriceTotal(priceTotal => priceTotal + parseInt(pricelist[pricelist.length - 1]));
        console.log("Totalprice====================================", priceTotal);
        localStorage.setItem("total", priceTotal);
        const updatedDisabledButtons = [...disabledButtons];
        updatedDisabledButtons[index] = true;
        setDisabledButtons(updatedDisabledButtons);



    }


    //for showing components by button click 
    const changePage = () => {
        changeMenupage(false)
    }

    const menPage = () => {
        changeMenupage(true)
    }

    return (
        <div>

            <Navbar changePage={changePage} count={count} cart={cart} />
            <NavMobile />
            {menuPage === true ?
                <div>
                    <div className="container-fluid  title p-5">
                        <div className="row justify-content-between mt-5 ">
                            <div className="col-md-5  mt-2 text-lg-start text-center">
                                <h1 style={{ color: "black" }}>Mealie menu.</h1>
                            </div>
                            <div className="col-md-5   mt-2 text-lg-end text-center  text-white ">
                                <ul className="sb-breadcrumbs">
                                    <li><a >Home</a></li>

                                    <li>Menu</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="container d-flex justify-content-between mt-5">
                        <div className="row ms-5">
                            {result === true ? <div className="col-10 d-flex align-self-center" style={{ fontsize: "larger" }} >
                                <a className="d-flex text-black-50 " onClick={changeResult}><i className="bi bi-search"></i>&nbsp;Results</a> </div> :
                                <div className="col-md-12 col-11" >
                                    <input className="form-control  border border-dark " type="search" placeholder="search food" value={searchItem}
                                        //    onChange={handleInputChange}
                                        id="example-search-input" />
                                </div>}
                            {/* <input className="form-control  border border-dark " type="search" placeholder="search food" value={searchItem}
                                        onChange={handleInputChange}
                                        id="example-search-input" /> */}


                        </div>&nbsp;&nbsp;
                        <div className="row justify-content-between me-5">
                            <div className="col-5 text-center align-self-center " style={{ fontsize: "larger" }}>Random</div>&nbsp;&nbsp;
                            <div className="col-5 align-self-center" style={{ fontsize: "larger" }}>
                                <i className="bi bi-three-dots-vertical"></i></div>
                        </div>
                    </div>
                    <div className="container ">
                        <div className="row justify-content-around">
                            {Array.isArray(foodslist) && foodslist.map((food, index) => (
                                <div className="col-md-3 card mt-5" style={{ width: "20rem" }} >
                                    <img src={food.img} className="card-img-top img-fluid " alt="..." />
                                    <div className="card-body">
                                        <h4 className="card-title text-center ">{food.food}</h4>
                                        <div className="text-center">
                                            <i className="bi bi-star"></i>&nbsp;&nbsp;
                                            <i className="bi bi-star"></i>&nbsp;&nbsp;
                                            <i className="bi bi-star"></i>&nbsp;&nbsp;
                                            <i className="bi bi-star"></i>&nbsp;&nbsp;
                                            <i className="bi bi-star"></i>&nbsp;&nbsp;
                                        </div>
                                        <p className="card-text text-center">price: ${food.price}</p>

                                        <button className="btnn btn" type="button" id="btn" disabled={disabledButtons[index]} 
                                            onClick={() => addtocart(food, index)} >Add to cart</button>

                                    </div>
                                </div>
                            ))}
                        </div>
                        {showModal && (
        <div className="modal fade show" tabIndex="-1" style={{ display: 'inline' }} >
          <div className="modal-dialog modal-dialog-bottom-right ms-4 translate-effect">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Successfully added</h5>
                <button type="button" className="btn-close" onClick={()=>{
                    setShowModal(!showModal);
                }}></button>
              </div>
              <div className="modal-body">
              <div className="card  mb-3 border-0" style={{ maxWidth: "300px", }}>
                                    <div className="row g-0  ">
                                        <div className="col-md-4">
                                            <img src={modalCart.img} className="img-fluid rounded-start" alt="..."></img>
                                        </div>
                                        <div className="col-md-8  d-flex">
                                            <div className="card-body ">
                                                <h5 className="card-title">{modalCart.food} </h5>
                                                <p>1 x ${modalCart.price}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}
                    </div>

                </div>
                : <Order Total={priceTotal} menPage={menPage} />}
        </div>
    )
}

export default Menu;