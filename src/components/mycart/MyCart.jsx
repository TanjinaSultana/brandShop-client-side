import { useLoaderData } from "react-router-dom";
import CartItem from "../cartItem/CartItem";


const MyCart = () => {
    const data = useLoaderData();
    
    return (
        <div>
            <h1 className="text-2xl ">My Cart Item</h1>
            {
                data?.map(data => <CartItem key={data._id} data={data}></CartItem> )
            }
        </div>
    );
};

export default MyCart;