import Footer from "pages/public-component/Footer/Footer"
import ScrollBackButton from "pages/public-component/ScrolBackButton/ScrollBack"
import Sidebar from "pages/public-component/Sidebar/Sidebar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import styled from "styled-components"

import Dashboard from "./dashboard/dashboardPage"
import Practice from "./practicing/PracticeHomepage/OnlinePractice"
import RAList from "./practicing/QuestionType/RA/QuestionList/RAList"

const PageStyle = styled.div`
  position: relative;
`

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.background_color};
  display: flex;
`

const Row = styled.div`
  flex: 1;
`

const DashboardPage = () => {
  return (
    <PageStyle>
      <ScrollBackButton link="#top">Scroll Back</ScrollBackButton>
      <Wrapper>
        <Sidebar />
        <Row>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/practice/speaking/RA" element={<RAList />} />
          </Routes>
        </Row>
      </Wrapper>
      <Footer />
    </PageStyle>
  )
}

export default DashboardPage
