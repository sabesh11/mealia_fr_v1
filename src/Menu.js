import React, { useEffect,useState } from "react"
import Navbar from "./Navbar"
import NavMobile from "./NavMobile"
import './Menu.css'

function Menu() {
//     let  foodslist= [
//         {
//         img: "https://starbelly-react.vercel.app/img/menu/3.jpg",
//         food: "Dosa",
//         price: 100,
//         total: 100,
//         quantity: 0

//     },
//     {
//         img: "https://starbelly-react.vercel.app/img/menu/2.jpg",
//         food: " Chicken Briyani",
//         price: 230,
//         total: 230,
//         quantity: 0

//     },
//     {
//         img: "https://starbelly-react.vercel.app/img/menu/4.jpg",
//         food: "Mutton Briyani",
//         price: 280,
//         total: 280,
//         quantity: 0
//     },
//     {
//         img: "https://starbelly-react.vercel.app/img/menu/1.jpg",
//         food: "Masala Dosa",
//         price: 150,
//         total: 150,
//         quantity: 0
//     },
//     {
//         img: "https://starbelly-react.vercel.app/img/menu/5.jpg",
//         food: "Fried rice",
//         price: 130,
//         total: 130,
//         quantity: 0
//     },
//     {
//         img: "https://starbelly-react.vercel.app/img/menu/8.jpg",
//         food: "Pongal",
//         price: 70,
//         total: 70,
//         quantity: 0
//     },
//     {
//         img: "https://starbelly-react.vercel.app/img/menu/7.jpg",
//         food: "Chicken roast",
//         price: 150,
//         total: 150,
//         quantity: 0
//     },
//     {
//         img: "https://starbelly-react.vercel.app/img/menu/11.jpg",
//         food: "Mutton sukka",
//         price: 200,
//         total: 200,
//         quantity: 0
//     },

//     {
//         img: "https://starbelly-react.vercel.app/img/menu/12.jpg",
//         food: "Egg parotta",
//         price: 80,
//         total: 80,
//         quantity: 0
//     },
//     {
//         img: "https://starbelly-react.vercel.app/img/menu/10.jpg",
//         food: "Chicken roast",
//         price: 250,
//         total: 250,
//         quantity: 0
//     },
//     {
//         img: "https://starbelly-react.vercel.app/img/menu/6.jpg",
//         food: "cheveroti",
//         price: 180,
//         total: 180,
//         quantity: 0
//     },
// ]
  const [foodslist,setfood] = useState([]);


useEffect(() => {
    fetch("http://localhost:7070/food/getfood"
          ) .then(response => response.json())
          .then(data => {

            console.log(data);
            setfood(data);

          })
        console.log(foodslist);
        
 
  },[])
 


    return (
        <div>
            <Navbar />
            <NavMobile />
            <div class="container-fluid  title p-5">
        <div class="row justify-content-between mt-5 ">
            <div class="col-md-5  mt-2 text-lg-start text-center">
                <h1 style={{color:"black"}}>Mealie menu.</h1>
            </div>
            <div class="col-md-5   mt-2 text-lg-end text-center ">
                <ul class="sb-breadcrumbs">
                    <li><a href="/">Home</a></li>

                    <li>Menu</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="container d-flex justify-content-between mt-5">
        <div class="row ms-5">
            {/* <div class="col-md-12 col-11" >
                <input class="form-control  border border-dark " type="search" placeholder="search food"
                  id="example-search-input" />
            </div> */}
            <div class="col-10 d-flex align-self-center" style={{fontsize: "larger"}} >
                <a class="d-flex text-black-50 "><i class="bi bi-search"></i>&nbsp;Results</a> </div>

        </div>&nbsp;&nbsp;
        <div class="row justify-content-between me-5">
            <div class="col-5 text-center align-self-center " style={{fontsize: "larger"}}>Random</div>&nbsp;&nbsp;
            <div class="col-5 align-self-center" style={{fontsize: "larger"}}>
                <i class="bi bi-three-dots-vertical"></i></div>
        </div>
    </div>
    <div class="container ">
        <div class="row justify-content-around">
      {foodslist.map(food =>(
            <div class="col-md-3 card mt-5" style={{width: "20rem"}} >
                <img src={food.img} class="card-img-top img-fluid " alt="..." />
                <div class="card-body">
                    <h4 class="card-title text-center ">{ food.food }</h4>
                    <div class="text-center">
                        <i class="bi bi-star"></i>&nbsp;&nbsp;
                        <i class="bi bi-star"></i>&nbsp;&nbsp;
                        <i class="bi bi-star"></i>&nbsp;&nbsp;
                        <i class="bi bi-star"></i>&nbsp;&nbsp;
                        <i class="bi bi-star"></i>&nbsp;&nbsp;
                    </div>
                    <p class="card-text text-center">price: ${ food.price }</p>
                   
                    <button class="btn " type="button" id="btn"  data-bs-toggle="modal" data-bs-target="#trackModal"
                   >Add to cart</button>
                    <div class="modal custom   carousel-fade " id="trackModal" tabindex="-1" role="dialog" aria-labelledby="trackModalLabel" aria-hidden="true">
    <div class="modal-dialog ms-5">
        <div class="modal-content ">

            <div class="modal-header  border-0">
                <h5 class="text-center">Successfully added</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            <p></p>

            </div>

            <div class="modal-body row">
                <div class="col-md-5">
                    <img src="" alt="" />
                </div>
                <div class="col-md-5"></div>
              
            </div>

            <div class="modal-footer row justify-content-around border-0 ">
                
                                <div class="col-md-5 text-center ">
                                    <button type="button" class=" btn-outline-warning p-2 bg-transparent " aria-label="Close"
                                  >View Order</button>
                                </div>
                                <div class="col-md-5 text-center">
                                    <button type="button" class="btn btn-warning p-2" aria-label="Close"
                                    >Checkout</button>
                                </div>
                          
            </div>
        </div>
    </div>
</div>
                </div>
            </div>
))}
        </div>
    </div>
        </div>
    )
}

export default Menu;