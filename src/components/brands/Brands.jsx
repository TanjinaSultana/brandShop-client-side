

const Brands = ({data}) => {
    const {brand,brand_image} = data;
    return (
        <div className="mt-4">
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={brand_image} alt="brand" className="rounded-xl w-full" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{brand}</h2>
    
    
  </div>
</div>
        </div>
    );
};

export default Brands;