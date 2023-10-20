import { useLoaderData } from "react-router-dom";
//import CartItem from "../cartItem/CartItem";
import { useState } from "react";
import toast from "react-hot-toast";


const MyCart = () => {
    const data = useLoaderData();
    const [user,setUser] = useState(data);
    const handleDelete =(_id)=>{
        console.log(_id);
        fetch(`https://brand-shop-server-side-two.vercel.app/cart/${_id}`,{
            method:'DELETE'
        })
        .then(res=> res.json())
        .then(data =>  {
            if(data.deletedCount>0){
                toast.success("data deleted succes");
                const remaining = user.filter(user=> user._id !== _id)
                setUser(remaining)
            }
        } 
        )

    }
    
    return (
        <div>
            <h1 className="text-xl font-bold my-4">My Cart Item</h1>
            {
                // data?.map(data => <CartItem key={data._id} data={data}></CartItem> )
                 user?.map(data =>  (<div className="mb-10 mt-10" key={data._id}>
                 <div className="hero h-[200px] w-[400px] bg-base-200 rounded-lg ">
       <div className="hero-content ">
         <img src={data.image} className="w-[50px] h-[50px] rounded-lg shadow-2xl" />
         <div>
           <h1 className="text-2xl font-bold">{data.name}</h1>
           <h1 className="text-xl font-bold">{data.brand}</h1>
           <p className="py-2 text-base font-semibold">Price:{data.price}</p>
           <button className="btn border-none text-white bg-[#880ED4] px-2" onClick={()=>handleDelete(data._id) }>Delete</button>
         </div>
       </div>
     </div>
             </div>) )
            }
        </div>
    );
};

export default MyCart;