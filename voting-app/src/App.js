import "./styles/Home.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Register from "./components/Register";
import Login from "./components/Login";
import VotingPage from "./components/VotingPage";
export default function Home() {
  return (
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/votingPage" element={<VotingPage/>}/>
    </Routes>
  );
}
// https://thirdweb.com/mumbai/0x6bC2c49F8C399Ae6F721819470AFd07402435E8b
