import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/NavVote.css";
import { ConnectWallet } from "@thirdweb-dev/react";

const NavVote = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Perform logout actions here (e.g., clearing local storage, resetting state, etc.)
    // Redirect to the login page after logout
    navigate('/login'); // Replace '/login' with the appropriate logout route
  };

  const handleHome = () => {
    navigate('/home'); // Replace '/home' with the appropriate home route
  };

  // Add other navigation handlers for different pages if needed

  return (
    <div className='vote_nav'>
      <div className='btn_div_nav_vote'>
        <div className='votingblock'>
        <h1 className='blocksecure'>Blocksecure</h1>
        </div>
          
        <button className='bg-red-600 rounded-lg py-3 px-6 mr-4 text-white hover:bg-red-500' onClick={handleHome}>
          Home
        </button>
        <button className='bg-red-600 rounded-lg py-3 px-6 mr-4 text-white hover:bg-red-500' onClick={handleLogout}>
          Logout
        </button>
        <ConnectWallet />

        {/* Add more buttons for other navigation links if required */}
      </div>
    </div>
  );
};

export default NavVote;
