/* eslint-disable react/prop-types */

//import { useState } from "react";


const CartItem = ({data}) => {
    
    const {name,brand,price,image,_id} = data;
   
    const handleDelete =(_id)=>{
        console.log(_id);
        fetch(`https://brand-shop-server-side-two.vercel.app/cart/${_id}`,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(data =>  {
            console.log(data)
        } 
        )

    }
    return (
        <div className="mb-10 mt-10">
            <div className="hero h-[200px] w-[400px] bg-base-200 rounded-lg ">
  <div className="hero-content ">
    <img src={image} className="w-[50px] h-[50px] rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-2xl font-bold">{name}</h1>
      <h1 className="text-xl font-bold">{brand}</h1>
      <p className="py-2 text-base font-semibold">Price:{price}</p>
      <button className="btn border-none text-white bg-[#880ED4] px-2" onClick={()=>handleDelete(_id) }>Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CartItem;