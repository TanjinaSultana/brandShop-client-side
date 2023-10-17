
import Brands from '../brands/Brands';
import { useLoaderData } from 'react-router-dom';

const Brand = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div className=' mb-8'>
            <h1 className='text-2xl font-bold text-center mb-5'>Our Brands</h1>
            <p className='font-medium text-sm text-center '>
            Discover Endless Shopping Possibilities.<br></br>
                Revolutionize Your Shopping Experience withour E-commerce Website.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>

        {
            data?.map(data => <Brands key={data.id} data={data}></Brands>)
        }
            </div>
         
        </div>
       
    );
};

export default Brand;