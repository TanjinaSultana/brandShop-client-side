
import { useState } from 'react';
import Banner from '../banner/Banner';
import Brand from '../brand/Brand';
import Category from '../categories/Category';
import Choose from '../choose/Choose';

import './Home.css'

const Home = () => {
   
    
   
    return (
       <div>
       
        <Banner></Banner>
        <Brand></Brand>
        <Choose></Choose>
        <Category></Category>
      </div>
        
        
    );
};

export default Home;