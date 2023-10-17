

const AddProduct = () => {
    const handleAdd = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const shortDescription = form.shortDes.value;
        const price = form.price.value;
        const rating = form.Rating.value;
        const addProduct ={name,image,brandName,type,shortDescription,price,rating};
        console.log(addProduct);
    }
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-8 mb-8'>Add Product</h1>
            <form className='mb-5' onSubmit={handleAdd}>
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
    
    <input type="text" name='brandName' placeholder="Brand name" className="input input-bordered" />
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
    
    <input type="text" name='Rating' placeholder="Rating" className="input input-bordered" />
  </label>
</div>                
                </div>
              
                <button className="btn btn-active btn-secondary mt-4 px-10">Add</button>
            </form>
        </div>
    );
};

export default AddProduct;