import React from 'react'
import HeadingComponent from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import SubmitButton from '../components/submitButton'
import BottomComponent from '../components/BottomComponent'

const SignUp = () => {
    const handleOnchange = () => {
        console.log("submitted")
    }
  return (
      <div className='flex justify-center'>
          <div className='bg-gray-300 mt-20 p-8 rounded-md'>
              <HeadingComponent label="SignUp" />
              <SubHeading description="Enter your information to create and account" />
              <InputBox label="Email" placeholder="johndoe@exmaple.com" />
              <InputBox label={"Password" } placeholder={"**********"} />
              <InputBox label={ "First Name"} placeholder={"John" } />
              <InputBox label={"Last Name "} placeholder={"Doe"} />
              <SubmitButton  onclick={handleOnchange} label={"submit"} />
               <BottomComponent description="Already have an account ?" linkText={"Sign In"} to="/signin"/>
          </div>
         
    </div>
  )
}

export default SignUp