/* eslint-disable react/prop-types */


const BrandCollection = ({datas}) => {
  
const {name,image,brand,type,shortDescription,price,rating} = datas;
    return (
        <div className="mb-10">
            <div className="hero h-[300px] w-[600px] bg-base-200 flex-col lg:flex-row">
  <div className="hero-content">
    <img src={image} className="w-[200px] h-[200px] rounded-lg shadow-2xl" />
    <div className="">
      <h1 className="text-2xl font-bold">{name}</h1>
      <h1 className="text-xl font-bold">{brand}</h1>
      <span>{type}</span>
      <p className="py-2 ">{shortDescription}</p>
      <div className="">
        <p>{price}</p>
        <p>{rating}</p>
      </div>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BrandCollection;