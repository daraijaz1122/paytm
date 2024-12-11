import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignUp from "./pages/signUp"
import SignIn from "./pages/signIn"
import Dashboard from "./pages/dashboard"
import FundsTransfer from "./pages/fundsTransfer"
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn/> } />
          <Route path="/dashboard" element={ <Dashboard/>} />
          <Route path="/fundstransfer" element={<FundsTransfer/> } />
      </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
