import React, { useState } from "react";
import { BiGlobe } from "react-icons/bi";
import { Link } from "react-router-dom";
import Logo from "../Components/Assets/Icons/Logo.svg";
import Login_img from "../Components/Assets/Images/Login.png";
import InputField from "../Components/InputField/InputField";
import PasswordInput from "../Components/InputField/PasswordInput";
import Selector from "../Components/Selector/Selector";

function LogIn() {
  const options = [
    { value: "English", label: "English" },
    { value: "French", label: "French" },
    { value: "Spanish", label: "Spanish" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    console.log(`Selected: ${selectedOption.label}`);
  };

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };

  return (
    <div className="logIn_page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="login_form">
              <div className="login_header">
                <img src={Logo} alt="" />
                <div className="lang_selector">
                  <BiGlobe className="icons" />
                  <Selector
                    options={options}
                    onChange={handleChange}
                    placeholder="English"
                    value={selectedOption}
                  />
                </div>
              </div>
              <div className="form_area">
                <div className="mb-5">
                <h1>Sign in to Modifii</h1>
                <p className="mt-2">Simple, all-in-one management software</p>
                </div>
                <form action="" className="input_form">
                  <InputField
                    type="email"
                    value={name}
                    placeholder="Username or email"
                    onChange={handleNameChange}
                  />
                  <PasswordInput
                    type="password"
                    value={pass}
                    placeholder="Password"
                    onChange={handlePassChange}
                  />
                  <div className="forget_area">
                    <span className="remember_me">
                      <input type="radio" className="redio_input" />
                      <p>Remember me</p>
                    </span>
                    <Link to="#" className="fuP">
                      Forget your password?
                    </Link>
                  </div>
                  <Link to="">
                    <button className="btn">Log In</button>
                  </Link>
                </form>
              </div>
              <div className="logIn_footer">
                <Link to="">Privacy Policy</Link>
                <p>Copyright 2024</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <div className="login_img">
              <img src={Login_img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
