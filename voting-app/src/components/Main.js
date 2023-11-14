import React from 'react';
import "../styles/Main.css";
import VoteGif from "./FullVotingPhoto.avif";
import Navbar from './NavBar';

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className='hero'>
        <div className='hero-content'>
          <div className='hero-text'>
            <h1 className='hero-heading'>A Decentralized Voting App</h1>
            <p className='hero-subtitle'>
              Secure, Transparent, and Immutable Voting Solutions with Blockchain
            </p>
            <div className='point-wise-description'>
              
            </div>
          </div>
          <div className='hero-image'>
            <img src="https://appinventiv.com/wp-content/uploads/sites/1/2019/10/A-Guide-to-Understand-Blockchain-Consensus-Algorithms.gif" alt='Blockchain Voting GIF' className='hero-gif' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
