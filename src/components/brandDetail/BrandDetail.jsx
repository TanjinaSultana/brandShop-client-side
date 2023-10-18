/* eslint-disable react/prop-types */


const BrandDetail = ({datas}) => {
    const {name,image,brand,type,shortDescription,price,rating,_id} = datas;
    return (
        <div>
           <div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <img src={image}></img>
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">{name}</h1>
      <p className="py-6">{shortDescription}</p>
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BrandDetail;