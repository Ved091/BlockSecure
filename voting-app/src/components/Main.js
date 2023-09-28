import React from 'react'
import "../styles/Main.css"
import Vote from "./FullVotingPhoto.avif"
import Navbar from './NavBar';
const Main = () => {
  return (
    <div>
        
        <Navbar/>
        <div className='home'>
        <div className='heading'>Why do we need to use <br/> Decentralize Voting System?</div>
        <div  className='para'>A decentralized voting system offers a transformative solution to some of <br/> the fundamental challenges and concerns associated with traditional <br/> centralized voting systems. The need for such a system stems <br/> from the desire to enhance transparency, security, accessibility, and <br/> trustworthiness in the electoral process.Decentralized voting systems also <br/> address issues related to inclusivity and accessibility. Traditional voting <br/> methods often present obstacles for individuals who are unable to <br/> physically visit polling stations due to factors such as location, health, <br/> or mobility challenges. </div>
        <img src={Vote} width={600} className='photo' alt='this is it'/>
        {/* <div className='line'></div> */}
        <br/>
        <hr/>
    </div>
    </div>
  )
}

export default Main