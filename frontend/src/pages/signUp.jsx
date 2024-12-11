import React, { useState } from 'react'
import HeadingComponent from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import SubmitButton from '../components/submitButton'
import BottomComponent from '../components/BottomComponent'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
 
 
    const handleSignUp =async () => {
      const response = await axios.post("http://localhost:3000/api/v1/user/signup",{
        email,
        password,
        firstname,
        lastname
      })
      localStorage.setItem("token", response.data.token)
      console.log(response)
      navigate("/dashboard")
    }
  return (
      <div className='flex justify-center'>
          <div className='bg-gray-300 mt-20 p-8 rounded-md'>
              <HeadingComponent label="SignUp" />
               <SubHeading description="Enter your information to create and account" />
       
        <InputBox
         
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
               label="Email" placeholder="johndoe@exmaple.com" />
        
              <InputBox onChange={e=>setPassword(e.target.value)}label={"Password"} placeholder={"**********"} />
              <InputBox onChange={e=>setFirstname(e.target.value)} label={ "First Name"} placeholder={"John" } />
              <InputBox onChange={e=>setLastName(e.target.value)} label={"Last Name "} placeholder={"Doe"} />
              <SubmitButton  onclick={handleSignUp} label={"submit"} />
               <BottomComponent description="Already have an account ?" linkText={"Sign In"} to="/signin"/>
          </div>
         
    </div>
  )
}

export default SignUp