import React from 'react'
import "../styles/NavVote.css"
// import Voting from "../artifacts/contracts/Voting.sol/Voting.json"
// import { ethers } from "ethers";
import { useNavigate } from 'react-router-dom';
const NavVote = () => {
//   const {ethereum}  = window
//   const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
  const navigate = useNavigate()
  
  return (
    <div className='vote_nav'>
        <div className='btn_div_nav_vote'>
        <button className='bg-red-600 rounded-lg py-3 px-6 mr-20 text-white hover:bg-red-500' >Logout</button>
        </div>
    </div>
  )
}

export default NavVote