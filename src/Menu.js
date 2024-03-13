import React, { useEffect, useState, } from "react"
import Navbar from "./Navbar"
import NavMobile from "./NavMobile"
import './Menu.css'



import Order from "./Order"

function Menu() {
    const [menuPage, changeMenupage] = useState(true)
    const [foodslist, setfood] = useState([]);
    const [cart, addCart] = useState([])
    const [priceTotal, setPriceTotal] = useState(0);
    const [pricelist,setPrice] =useState([])
    const [count, setCount] = useState(0);
    const [result, setResult] = useState(true)
    const [searchItem, setSearchItem] = useState('')
    // const [filteredfood, s  etFilteredUsers] = useState(foodslist)
    let userId = localStorage.getItem("userID");
    console.log(userId);

    //use effect for data rendering
    useEffect(() => {
        return () => {
            fetch("http://localhost:7070/food/getfood")
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
    const cartfunc = () => {
        fetch(`http://localhost:7070/food/getcart/${userId}`
        ).then(response => response.json())
            .then(data => {

                console.log("jsonData", data);
                addCart(data);
                setCount(data.length);

            })
        console.log("cartDetail", cart);
    };

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)

        //   const filteredItems = foodslist.filter((food) =>
        //   food.food.toLowerCase().includes(searchItem.toLowerCase())
        //   );

        //   setFilteredUsers(filteredItems);

    }

    const changeResult = () => {
        setResult(false)
    }

    //onclick func for cart adding
    const addtocart = (food) => {
        food.quantity++
        console.log("quantity=========", food.quantity);
        let add = {
            food: food.food,
            img: food.img,
            quantity: food.quantity,
            price: food.price,
            total: food.total,


        }
        cart.push(add);
        setCount(cart.length);

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



    }

    //for showing components by button click 
    const changePage = () => {
        changeMenupage(false)
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
                                    <li><a href="/">Home</a></li>

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
                                        onChange={handleInputChange}
                                        id="example-search-input" />
                                </div>}



                        </div>&nbsp;&nbsp;
                        <div className="row justify-content-between me-5">
                            <div className="col-5 text-center align-self-center " style={{ fontsize: "larger" }}>Random</div>&nbsp;&nbsp;
                            <div className="col-5 align-self-center" style={{ fontsize: "larger" }}>
                                <i className="bi bi-three-dots-vertical"></i></div>
                        </div>
                    </div>
                    <div className="container ">
                        <div className="row justify-content-around">
                            {Array.isArray(foodslist) && foodslist.map(food => (
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

                                        <button className="btnn btn" type="button" id="btn"
                                            onClick={() => addtocart(food)} >Add to cart</button>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
                : <Order cartlist={cart} total={priceTotal} />}
        </div>
    )
}

export default Menu;