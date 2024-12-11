import React, { useState } from 'react';
import HeadingComponent from '../components/SubHeading';
import SubHeading from '../components/SubHeading';
import InputBox from "../components/InputBox";
import SubmitButton from "../components/submitButton";
import BottomComponent from "../components/BottomComponent";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async () => {
    const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
      email,
      password
    })
    localStorage.setItem("token", response.data.token);
    navigate("/dashboard")
  }
  return (
    <div className="flex justify-center">
      <div className="mt-20 p-8 rounded-md bg-gray-300" >
        <HeadingComponent label="SignIn" />
        <SubHeading description=" Enter your credentials to access your account" />
        <InputBox onChange={e=>setEmail(e.target.value)}  label="Email" placeholder="johndoe@gmail.com" />
        <InputBox onChange ={e=> setPassword(e.target.value)} label="Password" placeholder="password" />
        <SubmitButton onclick={handleLogin} label="Login" />
        <BottomComponent   description="Don't have an account ?" linkText="Sign Up" to="/signup"/>

      </div>
    </div>
  )
}

export default SignIn