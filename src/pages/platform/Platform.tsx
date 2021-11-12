import Footer from "pages/public-component/Footer/Footer"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import styled from "styled-components"

import Dashboard from "./Dashboard/Dashboard"
import Navigation from "./Navigation/Navigation"
import Sidebar from "./Sidebar/Sidebar"

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.background_color};
  display: flex;
  padding-top: 50px;
`

const Platform = () => {
  return (
    <>
      <Wrapper>
        <Sidebar />
        <div>
          <Navigation />
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Wrapper>
      <Footer />
    </>
  )
}

export default Platform
