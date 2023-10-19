/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
const BrandCollection = ({datas}) => {
  
const {name,image,brand,type,shortDescription,price,rating,_id} = datas;
    return (
        <div className="mb-10 ">
        <div className="card w-96 bg-[#f4c8f9] shadow-xl ">
  <figure className="">
  <img src={image} className="w-[100px] h-[100px] rounded-xl shadow-2xl" />

  </figure>
  <div className="card-body items-center text-center ">
      <h1 className="text-2xl font-bold">{name}</h1>
      <h1 className="text-base font-bold">{brand}</h1>
      <span className="text-base font-medium">Type:{type}</span>
  <p className="font-semibold">{shortDescription}</p>

  <div className="flex gap-2">

  <p className="text-base font-medium ">Price:{price}</p>
  <p className="text-sm font-medium">Rating:{rating}</p>
  </div>

    <div className="card-actions">
  <div className="btn-group gap-5">
  <Link to={`/${_id}`}>
  
  <button className="btn border-none text-white bg-[#880ED4]" >Details</button>
  </Link>
  <Link to={`/update/${_id}`}>
  <button className="btn border-none text-white bg-[#880ED4]">Update</button>
  </Link>
  
  </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default BrandCollection;