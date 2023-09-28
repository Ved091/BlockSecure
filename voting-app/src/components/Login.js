import {useState} from "react";
// import {useNavigate} from "react-router-dom"
// import {ethers} from "ethers"
// import Voting from "../artifacts/contracts/Voting.sol/Voting.json"
import { Web3Button } from "@thirdweb-dev/react";
import contractAddress from "./address";
import "../styles/Login.css"
const Login = () => {

  const [address, setAddress] = useState('')
  const [password, setPassword] = useState('')
//   const navigate = useNavigate()
//   const {ethereum} = window
  
  return (
    <div className="login_login">
      <div className="center">
      <h1>Login</h1>
      <form onSubmit={(e)=>e.preventDefault()}>
        <div className="txt_field">
          <input type="text" required onChange={(e)=> setAddress(e.target.value)}/>
          <span></span>
          <label>Address</label>
        </div>
        <div className="txt_field">
          <input type="password" required onChange={(e)=> setPassword(e.target.value)}/>
          <span></span>
          <label>Password</label>
        </div>
        <div className="pass">Forgot Password?</div>
        {/* <input type="submit" value="Login" className="button_login"/> */}
        <Web3Button contractAddress={contractAddress} action={async(contract)=> contract.call("login",[address,password])}>Login</Web3Button>
        <div className="signup_link">
          Not registered? <a href="/register" >Signup</a>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
