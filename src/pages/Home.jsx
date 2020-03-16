import React from 'react'
import Menu from '../components/Menu';

/* image */
import Tawhid from '../assets/tawhid2.png'
/* CSS */
import '../App.css';

const Home = () => {
    return (
        <div className="home-area">
            <Menu />
            <img src={Tawhid} alt="image not found!" />
        </div>
    )
}

export default Home;
