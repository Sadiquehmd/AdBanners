'use client';
import Head from 'next/head';
import AdBanner from '../components/AdBanner';
import { useState } from 'react';
const HomePage = () => {
  
const [adBanners,setAdBanners]=useState<any[]>(require('../../public/adbanner.json'));
const handleUpdate=(updated:any)=>{
  setAdBanners(
   adBanners.map((banner)=>banner.id === updated.id ? updated :banner
    )
    )}


  return (
    
    <div className="container mx-auto px-4 py-8">
  
      <div className='container-flex'>
      <div className="ad-banner-container">
      {adBanners.map((banner:any) => (
          <li key={banner.id}>
            <AdBanner {...banner} onUpdate={handleUpdate}/>
          </li>
        ))}  
      </div>
    </div>
    </div>
  );
};

      

export default HomePage;