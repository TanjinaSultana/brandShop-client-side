/* eslint-disable no-undef */
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";


const Update = () => {
    const loadedUser = useLoaderData();
    const handleUpdate = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const shortDescription = form.shortDes.value;
        const price = form.price.value;
        const rating = form.Rating.value;
        const updateProduct ={name,image,brand,type,shortDescription,price,rating};
        console.log(updateProduct);
        fetch(`https://brand-shop-server-side-two.vercel.app/brand/${loadedUser._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
              },
              body:JSON.stringify(updateProduct)
        })
          .then(res =>res.json() )
          .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                toast.success("submit succes");
            }
          })
    }
    return (
        <div className="mt-8 mb-10">
            <h1 className='text-3xl font-bold text-center mt-8 mb-8'>Update Product</h1>
            <form className='mb-5 w-full max-w-sm shadow-2xl bg-[#f4c8f9] flex-shrink-0 text-center p-10 rounded-lg' onSubmit={handleUpdate} >
                <div className='flex flex-col gap-10 lg:w-1/3  lg:flex-row container mx-auto'>

                <div className="form-control">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='name' defaultValue={loadedUser?.name} placeholder="name" className="input input-bordered" />
  </label>
</div>
                <div className="form-control">
  <label className="label">
    <span className="label-text">Image</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='image' defaultValue={loadedUser?.image} placeholder="Image" className="input input-bordered" />
  </label>
</div>
                </div>
                <div className='flex flex-col gap-10 lg:w-1/3  lg:flex-row container mx-auto'>

                <div className="form-control">
  <label className="label">
    <span className="label-text">Brand Name</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='brand' defaultValue={loadedUser?.brandName} placeholder="Brand name" className="input input-bordered" />
  </label>
</div>
                <div className="form-control">
  <label className="label">
    <span className="label-text">Type</span>
  </label>
  <label className="input-group">
    
    <input type="text" name="type" defaultValue={loadedUser?.type} placeholder="Type" className="input input-bordered" />
  </label>
</div>
                </div>
                <div className='flex flex-col gap-10 lg:w-1/3  lg:flex-row container mx-auto'>

                <div className="form-control">
  <label className="label">
    <span className="label-text">Price</span>
  </label>
  <label className="input-group">
    
    <input type="number" name='price' defaultValue={loadedUser?.price} placeholder="Price" className="input input-bordered" />
  </label>
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text">Short Description</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='shortDes' defaultValue={loadedUser?.shortDescription} placeholder="ShortDescription" className="input input-bordered" />
  </label>
</div>                
                </div>
                <div className='flex flex-col gap-10 lg:w-1/3  lg:flex-row container mx-auto'>

                      
            <div className="form-control">
                  <label className="label">
              <span className="label-text">Rating</span>
  </label>
  <label className="input-group">
    
    <input type="number" name='Rating' defaultValue={loadedUser?.rating} placeholder="Rating" className="input input-bordered" />
  </label>
</div>                
                </div>
              
                <button className="btn border-none text-white bg-[#880ED4] mt-4 px-10">Submit</button>
            </form>
        </div>
    );
};

export default Update;