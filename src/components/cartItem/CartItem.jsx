/* eslint-disable react/prop-types */


const CartItem = ({data}) => {
    const {name,brand,price,image} = data;
    return (
        <div className="mb-10 mt-10">
            <div className="hero h-[200px] w-[400px] bg-base-200">
  <div className="hero-content ">
    <img src={image} className="w-[50px] h-[50px] rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-2xl font-bold">{name}</h1>
      <h1 className="text-xl font-bold">{brand}</h1>
      <p className="py-2">{price}</p>
      <button className="btn px-2">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default CartItem;