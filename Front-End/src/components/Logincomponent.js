/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
 
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { loginUser } from "../admin/action/employee_action";
import './style.css';
import Navcompnent from './Navcompnent';
import Footercomponent from './Footercomponent';
import { useDispatch, useSelector } from 'react-redux';
import './Login.css';
import Avatar from "./Formimg/avatar.svg";
import Bg from "./Formimg/bg.svg";
import Wavess from "./Formimg/wavess.jpg";
import SageLogo from "./Formimg/sageLogo.ico";


function Logincomponent() {
 

const [password, setPassword] = useState("");
const[show,setShow] = useState("password") 
const [email, setEmail] = useState("")
const dispatch = useDispatch()

   const user = {password, email};

    const PostData = () => {
      sessionStorage.setItem("currentUser", JSON.stringify(user));
      dispatch(loginUser(user))
    };


return (
    <div><Navcompnent/><br/><br/><br/><br/><br/><br/><br/>
    <div>
      <h1 className="head33">Sage Training Institute</h1>
    </div>
    <img class="wave" src={Wavess} />
    <div class="containers">
      <div class="img">
        <img src={Bg} />
      </div>
      <div class="login-content">
      <div class="form1">
          <img class="img11" src={Avatar} />
          <h2 class="title">Welcome</h2>
          <div class="input-div one">
            <div class="i">
              <i class="fas fa-user"></i>
            </div>
            <div class="div">
        <input
        type="text"
        placeholder="email"
        value={email}
        class="input"
        onChange={(e)=>setEmail(e.target.value)}
        />
        </div>
            </div>
            <div class="input-div pass">
              <div class="i">
                <i class="fas fa-lock"></i>
              </div>
              <div class="div">
        <input
        type="password"
        placeholder="password"
        value={password} onChange={(e) => setPassword(e.target.value)}
        class="input"
        />
        </div>
            </div>
            <a href="#">Forgot Password?</a>
            <button className='btns btn btn-success mb-4 mt-2 st_input_class' onClick={() => PostData()}>Login</button>
            </div> </div>
      </div><Footercomponent/>
    </div>
               
   
);
    }

    const inputs = document.querySelectorAll(".input");

function addcl() {
  let parent = this.parentNode.parentNode;
  parent.classList.add("focus");
}

function remcl() {
  let parent = this.parentNode.parentNode;
  if (this.value === "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", addcl);
  input.addEventListener("blur", remcl);
});

export default Logincomponent;