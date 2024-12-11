import React from 'react'
import Navbar from '../components/Navbar'
import Balance from '../components/Balance'
import User from '../components/Users'
const Dashboard = () => {
  return (
    <div>
      <Navbar username={"Aijaz"} firstLetter={"A"} />
      <Balance amount="10000" />
      <User/>
    </div>
  )
}

export default Dashboard