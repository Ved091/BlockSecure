import { useState } from "react";
import "../styles/Register.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Web3Button } from "@thirdweb-dev/react";
// import { useNavigate } from "react-router-dom";
import contractAddress from "./address";

const Register = () => {
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [place, setPlace] = useState("");
//   const navigate = useNavigate()
  const formatDate = (selectedDate) => {
    const parts = selectedDate.split("-");
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  };
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    const newDate = formatDate(selectedDate);
    setDate(newDate);
  };
  
  const handleSignUpClick = async(contract)=>{
    // e.preventDefault(); 
    await contract.call("register", [name, date, place, password]);
  }
  return (
    <div>
      <div className="container_register">
        <div className="forms-container">
          <div className="signin-signup">
            <div className="flex_register">
              <form
                className="sign-in-form"
                onSubmit={(e)=>e.preventDefault()}
              >
                <h2 className="title">Sign Up</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    placeholder="Full Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input
                    type="date"
                    placeholder="DOB"
                    onChange={handleDateChange}
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="text"
                    placeholder="Place"
                    onChange={(e) => setPlace(e.target.value)}
                  />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Web3Button contractAddress={contractAddress} action={(contract) => handleSignUpClick(contract)} >Sign Up</Web3Button>
                <div>Already registered? <a href="/login">Login</a></div>
                <p className="social-text">Or Sign in with social platforms</p>
                <div className="social-media">
                  <a
                    href="https://www.facebook.com"
                    className="social-icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="https://www.twitter.com"
                    className="social-icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TwitterIcon />
                  </a>
                  <a
                    href="https://www.google.com"
                    className="social-icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GoogleIcon />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    className="social-icon"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
