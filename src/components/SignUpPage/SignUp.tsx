import "./SignUp.css";
import Logo from "../logo/logo";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="sign-up-container">
      <div className="sign-up-img">
        <span className="logo-signup-container-desktop">
          <Logo />
        </span>
        <img
          src="asset\images\img-1.png"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="sign-up-form-container">
        <div className="form-top">
          <span className="logo-signup-container-mobile">
            <img src="asset\images\logo.png" style={{ width: "40%" }} />
          </span>
          <span className="Acc-owner">Already have an account?</span>
          <Link to="/" className="btn btn-danger login">
            LOG IN
          </Link>
        </div>
        <div>
          <h5 className="notice">Please Register Here</h5>
          <form className="form-container">
            <div className="name-container text-area-2in1">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>
            <div className="email-container text-area-full">
              <input type="text" placeholder="Email" />
            </div>
            <div className="passkey-container text-area-2in1">
              <input type="text" placeholder="Enter Passkey" />
              <input type="text" placeholder="Confirm Passkey" />
            </div>
            <div className="mobile-container text-area-full">
              <input type="text" placeholder="Phone Number" />
            </div>
            <div className="DOB-and-gender-container text-area-2in1">
              <input type="text" placeholder="Date of Birth" />
              <span className="fa fa-chevron-down drop" />
              <input type="text" placeholder="Gender" />
              <span className="fa fa-chevron-down drop" />
            </div>
            <div className="home-address-container text-area-full">
              <input type="text" placeholder="Home Address" />
            </div>
            <h5 className="notice">Learning History</h5>

            <div className="academic-level-container text-area-full">
              <input type="text" placeholder="State Your Academic Level" />
            </div>
            <div className="home-address-container text-area-full">
              <input
                type="text"
                placeholder="State Any Privious Academic Certification"
              />
            </div>
            <div className="home-address-container text-area-full">
              <input
                type="text"
                placeholder="What are you most interested in Learning"
              />
            </div>
            <div className="home-address-container text-area-full">
              <input type="text" placeholder="Any sponsors or Reference" />
            </div>
            <div className="button-container ">
              <input
                type="submit"
                value="Register"
                className="btn btn-danger"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
