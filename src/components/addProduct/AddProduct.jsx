import toast from "react-hot-toast";


const AddProduct = () => {
    const handleAdd = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brand.value;
        const type = form.type.value;
        const shortDescription = form.shortDes.value;
        const price = form.price.value;
        const rating = form.Rating.value;
        const available = form.available.value;
        const addProduct ={name,image,brand,type,shortDescription,price,rating,available};
        console.log(addProduct);

        fetch('https://brand-shop-server-side-two.vercel.app/brand',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(addProduct)
        })
        .then(res =>res.json() )
        .then(data=>{
          console.log(data);
          if(data.insertedId){
            toast.success("Data Added");
          }
        })
    }
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-8 mb-8'>Add Product</h1>
            <form className='mb-5 container mx-auto items-center rounded-lg  shadow-2xl bg-[#f4c8f9] py-10' onSubmit={handleAdd}>
                <div className='flex flex-col gap-10 lg:w-1/3  lg:flex-row container mx-auto'>

                <div className="form-control">
  <label className="label">
    <span className="label-text">Name</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='name' placeholder="name" className="input input-bordered" />
  </label>
</div>
                <div className="form-control">
  <label className="label">
    <span className="label-text">Image</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='image' placeholder="Image" className="input input-bordered" />
  </label>
</div>
                </div>
                <div className='flex flex-col gap-10 lg:w-1/3  lg:flex-row container mx-auto'>

                <div className="form-control">
  <label className="label">
    <span className="label-text">Brand Name</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='brand' placeholder="Brand name" className="input input-bordered" />
  </label>
</div>
                <div className="form-control">
  <label className="label">
    <span className="label-text">Type</span>
  </label>
  <label className="input-group">
    
    <input type="text" name="type" placeholder="Type" className="input input-bordered" />
  </label>
</div>
                </div>
                <div className='flex flex-col gap-10 lg:w-1/3  lg:flex-row container mx-auto'>

                <div className="form-control">
  <label className="label">
    <span className="label-text">Price</span>
  </label>
  <label className="input-group">
    
    <input type="number" name='price' placeholder="Price" className="input input-bordered" />
  </label>
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text">Short Description</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='shortDes' placeholder="ShortDescription" className="input input-bordered" />
  </label>
</div>                
                </div>
                <div className='flex flex-col gap-10 lg:w-1/3  lg:flex-row container mx-auto'>

                      
            <div className="form-control">
                  <label className="label">
              <span className="label-text">Rating</span>
  </label>
  <label className="input-group">
    
    <input type="number" name='Rating' placeholder="Rating" className="input input-bordered" />
  </label>
</div>                
            <div className="form-control">
                  <label className="label">
              <span className="label-text">Available</span>
  </label>
  <label className="input-group">
    
    <input type="text" name='available' placeholder="Available" className="input input-bordered" />
  </label>
</div>                
               </div>
               <div className='flex flex-col gap-10 lg:w-1/3  lg:flex-row container mx-auto'>

                <button className="btn bg-[#880ED4] text-white  mt-4 px-10">Add</button>
               </div>
            </form>
        </div>
    );
};

export default AddProduct;