import React from 'react';
import PicPerDay from './HomeBody';
import Header from './Header';
import '../styles/reset.css'
import '../styles/Home.css';

function Home() {
    return (
        <div className="home-container">
            <Header />
            <PicPerDay />
        </div>
    );
}

export default Home;