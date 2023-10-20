/* eslint-disable react/prop-types */

import { useLoaderData,useParams } from 'react-router-dom';
import BrandCollection from '../brandCollection/BrandCollection';
import { useEffect, useState } from 'react';


const BrandDb = () => {
    const [datas,setDatas]  = useState([]);
    const [error,setError]  = useState(false);
    const {brand}  = useParams()
    
    const data = useLoaderData();
    console.log(data);
    
    useEffect(() => {
    const remainData = data?.filter((item) => item.brand === brand);
    if(remainData?.length == 0 ){
        setError("No Categories Are found ")
    }else{
       
        setDatas(remainData);
}
       
      }, [brand, data]);
     
    return (
        <div>
<div className='mt-8 mb-8'>
<div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/XYtPYJQ/sliderB1.jpg" className="w-full  h-[500px] rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full ">
    <img src="https://i.ibb.co/jhDPcsD/sliderB2.png" className="w-full  h-[500px] rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/fYKZKRQ/sliderB3.jpg" className="w-full  h-[500px]  rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/C2BPBvC/sliderB4.jpg" className="w-full  h-[500px]  rounded-lg" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
</div>


            {error && 
            
                <h1 className='text-3xl mt-4 mb-5 text-center'>{error}</h1> 
            }

               <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

               {
                datas?.map(datas => <BrandCollection key={datas._id} datas={datas}></BrandCollection> )
               }
               </div> 
            
        </div>
    );
};

export default BrandDb;