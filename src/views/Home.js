import React from 'react';
import HomeLogoImage from '../components/HomeLogoImage.js';
import HomeButtons from '../components/HomeButtons.js';
import Footer from '../components/Footer.js';

export default function Home() {
  return (
    <>
    <div className="homeContainer">
      <HomeLogoImage />
      <HomeButtons />
    </div>
    <Footer/>
    </>
  )
}
