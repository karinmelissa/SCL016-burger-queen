import React, { Component } from 'react';
import HomeLogoImage from '../components/HomeLogoImage.js';
import HomeButtons from '../components/HomeButtons.js';

export default function Home() {
    return (
        <div className="homeContainer">
            <HomeLogoImage/>
            <HomeButtons/>
        </div>
    )
}
