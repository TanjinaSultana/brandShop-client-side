import  { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import BrandDetail from '../brandDetail/BrandDetail';

const BrandDetails = () => {
    const [datas,setDatas]  = useState([]);
    //const [error,setError]  = useState(false);
    const {_id}  = useParams()
    
    const data = useLoaderData();
   
   console.log(data);
    useEffect(() => {
       
        const remainData = data?.find((item) => item._id == _id);
        setDatas(remainData);
        //console.log(remainData);
        //console.log(data?.find((item) => item._id == _id));
      }, [_id, data]);
    return (
        <div>
        <BrandDetail datas={datas}></BrandDetail>
        </div>
    );
};

export default BrandDetails;