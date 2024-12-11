import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Balance from '../components/Balance'
import User from '../components/Users'
import axios from 'axios'
const Dashboard = () => {
  const [userData, setUserData] = useState("")
  const fetchUser = async () => {
    const response = await axios.post('localhost:')
  }
  return (
    <div>
      <Navbar username={"Aijaz"} firstLetter={"A"} />
      <Balance amount="10000" />
      <User/>
    </div>
  )
}

export default Dashboard