import React, { useEffect, useState } from 'react'
import FundsTransfer from '../pages/fundsTransfer'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
const User = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetchUsers();
  },[filter])

  const fetchUsers = async () => {
    console.log("inside above api call")
    const response = await axios.get("http://localhost:3000/api/v1/user/filter?filter=" + filter)
    setUsers(response.data.user);
    console.log(response.data.user,"here")
   }
  return (
      <div className='p-4 w-full'>
          <h1 className='font-semibold text-xl'>Users</h1>
          
      
      <input type='text' onChange={e=>setFilter(e.target.value)} placeholder='Search' className="p-4 mt-4 rounded-lg w-full  bg-green-100" />
    
      {users.map((user) => (
       
         <div className='flex rounded-md justify-between p-3 mt-4 bg-gray-200'>
        <h1 className='font-semibold text-xl'>{user.firstname} {user.lastname}</h1>
         <button  onClick={(e) => {
                navigate("/send?id=" + user._id + "&name=" + user.firstname);
          }} label={"Send Money"}
            className=' px-4 py-2 font-semibold   bg-gray-800 rounded-md text-white' >
        Pay
        </button>
      </div>
     ))} 
     
         
    </div>
  )
}

export default User