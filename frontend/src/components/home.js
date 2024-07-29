import React from 'react';
import '../assets/home.css';
import Navbar from './navbar';
import TopCompanies from './TopCompanies';
import banner from '../assets/banner.png';
import discover from '../assets/discover.png';
import sponsor from '../assets/sponsor.png';
import footer from '../assets/footer.png'

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <header className="header">
        <h1>Find your dream job now</h1>
        <p>5 lakh+ jobs for you to explore</p>
        <form className="search-form">
          <input style={{width:'100%'}}
            type="text"
            placeholder="Enter skills / designations / companies"
            className="search-input"
          />
          <input
            type="text"
            placeholder="Select experience"
            className="search-input"
          />
          <input
            type="text"
            placeholder="Enter location"
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </header>
      <div>
        <img className='banner' src={banner}></img>
      </div>
      <TopCompanies />
      <div>
        <img className='banner1' src={discover}></img>
      </div>
      <div>
        <img className='banner1' src={sponsor}></img>
      </div>
      <div>
        <img className='banner2' src={footer}></img>
      </div>
    </div>
  );
};

export default HomePage;
