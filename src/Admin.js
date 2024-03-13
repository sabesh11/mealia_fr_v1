import React,{ useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Admin = () =>{
     
    const [food, addfood] = useState({
        food:"",
        img:"",
        quantity:"",
        price:"",
        total:"",
});

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
          
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(add),
             } ).then(response => response.json())
            .then(data => {

                console.log(data);
               

            })
    }
    
return(
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
      <Tab eventKey="employ" title="FOOD DETAILS">
        <div className="row justify-content-center pt-5">
           <div className="col-md-2 d-grid">
           <label>food: </label>
           <label>img: </label>
           <label>price: </label>
           <label>quantity: </label> 
           <label>total: </label>
          

           </div>
           <div className="col-md-2 d-grid">
           <input  type="text" onChange={handleChange} name='food' value={food.food}></input>
           <input  type="text" onChange={handleChange} name='img' value={food.img}></input> 
           <input  type="text" onChange={handleChange} name='price' value={food.price}></input> 
           <input  type="text" onChange={handleChange} name='quantity' value={food.quantity}></input> 
           <input  type="text" onChange={handleChange} name='total' value={food.total}></input> 
         
           </div>
        </div>
            <div className="row text-center pt-3">
               
                 <button style={{width:"9em"}} className="bg-primary p-1 text-white border-0"
                 onClick={addFooditem}>Add product</button>
                
            </div>
       
    
      </Tab>
    
    </Tabs>
        </div>
    </div>
      
    </>
)    
}

export default Admin;