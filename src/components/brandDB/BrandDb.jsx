/* eslint-disable react/prop-types */

import { useLoaderData,useParams } from 'react-router-dom';
import BrandCollection from '../brandCollection/BrandCollection';
import { useEffect, useState } from 'react';


const BrandDb = () => {
    const [datas,setDatas]  = useState([]);
    const [error,setError]  = useState(false);
    const {brand}  = useParams()
    
    const data = useLoaderData();
    
    useEffect(() => {
    const remainData = data?.filter((item) => item.brandName === brand);
    if(remainData?.length == 0 ){
        setError("No Categories Are found ")
    }else{
       
        setDatas(remainData);
}
       
      }, [brand, data]);
     
    return (
        <div>
            {error && 
            
                <h1 className='text-3xl mt-4 mb-5'>{error}</h1> 
            }

               <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>

               {
                datas?.map(datas => <BrandCollection key={datas._id} datas={datas}></BrandCollection> )
               }
               </div> 
            
        </div>
    );
};

export default BrandDb;