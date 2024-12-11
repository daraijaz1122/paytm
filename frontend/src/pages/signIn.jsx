import React from 'react';
import HeadingComponent from '../components/heading';
import SubHeading from '../components/SubHeading';
import InputBox from "../components/InputBox";
import SubmitButton from "../components/SubmitButton";
import BottomComponent from "../components/BottomComponent";
const SignIn = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-20 p-8 rounded-md bg-gray-300" >
        <HeadingComponent label="SignIn" />
        <SubHeading description=" Enter your credentials to access your account" />
        <InputBox label="Email" placeholder="johndoe@gmail.com" />
        <InputBox label="Password" placeholder="password" />
        <SubmitButton label="Login" />
        <BottomComponent description="Don't have an account ?" linkText="Sign Up" to="/signup"/>

      </div>
    </div>
  )
}

export default SignIn