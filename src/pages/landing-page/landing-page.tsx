import Footer from "pages/public-component/Footer/Footer"
import Navbar from "pages/public-component/Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import HomePage from "./homepage/homepage"
import Login from "./login-and-signup/login-page/Login"
import Signedup from "./login-and-signup/signup-page/Signedup"
import Signup from "./login-and-signup/signup-page/Signup"

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signedup" element={<Signedup />} />
      </Routes>
      <Footer />
    </>
  )
}
export default LandingPage
