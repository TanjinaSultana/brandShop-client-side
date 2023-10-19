/* eslint-disable react/prop-types */

import toast from "react-hot-toast";


const BrandDetail = ({datas}) => {
    const {name,image,brand,type,shortDescription,price,rating,_id,available} = datas;
    const handleAdd  = e =>{
       e.preventDefault()
        
        fetch(`https://brand-shop-server-side-two.vercel.app/cart`,{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify({name,image,brand,type,shortDescription,price,rating,_id,available})
        })
        .then(res =>res.json() )
        .then(data=>{
          console.log(data);
          if(data.insertedId){
            toast.success("Added to Cart")
          }
        })
    }
    return (
        <div>
           <div className="hero my-10 rounded-lg
            bg-base-200 h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="  mr-10"></img>
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">{name}</h1>
      <h1 className="text-xl font-semibold">{brand}</h1>
      <p className="py-2 text-base font-semibold">{shortDescription}</p>
      <div className="">

      <p className="py-2 text-sm font-semibold">Price:{price}</p>
      </div>
      <p className="py-2 text-sm font-semibold">Available:{available}</p>
      <p className="py-2 text-sm font-semibold">Type:{type}</p>

      <button className="btn border-none text-white bg-[#880ED4]" onClick={handleAdd}>Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BrandDetail;