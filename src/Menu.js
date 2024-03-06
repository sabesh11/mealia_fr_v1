import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"
import NavMobile from "./NavMobile"
import './Menu.css'

function Menu() {

    const [foodslist, setfood] = useState([]);
    const [count, setCount] = useState(0);
    const [result, setResult] = useState(true)
    const [searchItem, setSearchItem] = useState('')
    // const [filteredfood, setFilteredUsers] = useState(foodslist)
    let cart = []
    let userId= localStorage.getItem("userID");
    console.log(userId);


    useEffect(() => {
        fetch("http://localhost:7070/food/getfood"
        ).then(response => response.json())
            .then(data => {

                console.log(data);
                setfood(data);

            })
        console.log(foodslist);
        
       

        // const filteredItems = foodslist.filter((food) =>
        // food.food.toLowerCase().includes(searchItem.toLowerCase())
        // );

        // setFilteredUsers(filteredItems);
    }, [])



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

    const addtocart = (food) => {
        let add = {
            food: food.food,
            img: food.img,
            quantity: food.quantity,
            price: food.price,
            total: food.total,


        }

        cart.push(add);
        console.log(cart);
        setCount(count + 1);

        fetch(`http://localhost:7070/User/addcart/${userId}`,
        {
          
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(cart),
             } ).then(response => response.json())
            .then(data => {

                console.log(data);
               

            })
    }

    return (
        <div>
            <Navbar count={count} />
            <NavMobile />
            <div class="container-fluid  title p-5">
                <div class="row justify-content-between mt-5 ">
                    <div class="col-md-5  mt-2 text-lg-start text-center">
                        <h1 style={{ color: "black" }}>Mealie menu.</h1>
                    </div>
                    <div class="col-md-5   mt-2 text-lg-end text-center  text-white ">
                        <ul class="sb-breadcrumbs">
                            <li><a href="/">Home</a></li>

                            <li>Menu</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="container d-flex justify-content-between mt-5">
                <div class="row ms-5">
                    {result === true ? <div class="col-10 d-flex align-self-center" style={{ fontsize: "larger" }} >
                        <a class="d-flex text-black-50 " onClick={changeResult}><i class="bi bi-search"></i>&nbsp;Results</a> </div> :
                        <div class="col-md-12 col-11" >
                            <input class="form-control  border border-dark " type="search" placeholder="search food" value={searchItem}
                                onChange={handleInputChange}
                                id="example-search-input" />
                        </div>}



                </div>&nbsp;&nbsp;
                <div class="row justify-content-between me-5">
                    <div class="col-5 text-center align-self-center " style={{ fontsize: "larger" }}>Random</div>&nbsp;&nbsp;
                    <div class="col-5 align-self-center" style={{ fontsize: "larger" }}>
                        <i class="bi bi-three-dots-vertical"></i></div>
                </div>
            </div>
            <div class="container ">
                <div class="row justify-content-around">
                    {Array.isArray(foodslist) && foodslist.map(food => (
                        <div class="col-md-3 card mt-5" style={{ width: "20rem" }} >
                            <img src={food.img} class="card-img-top img-fluid " alt="..." />
                            <div class="card-body">
                                <h4 class="card-title text-center ">{food.food}</h4>
                                <div class="text-center">
                                    <i class="bi bi-star"></i>&nbsp;&nbsp;
                                    <i class="bi bi-star"></i>&nbsp;&nbsp;
                                    <i class="bi bi-star"></i>&nbsp;&nbsp;
                                    <i class="bi bi-star"></i>&nbsp;&nbsp;
                                    <i class="bi bi-star"></i>&nbsp;&nbsp;
                                </div>
                                <p class="card-text text-center">price: ${food.price}</p>

                                <button className="btnn btn" type="button" id="btn"
                                    onClick={() => addtocart(food)} >Add to cart</button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Menu;