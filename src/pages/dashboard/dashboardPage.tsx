import Footer from "pages/public-component/Footer/Footer"
import styled from "styled-components"

import Content from "./Content/Content"
import Navigation from "./Navigation/Navigation"
import Sidebar from "./Sidebar/Sidebar"

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.background_color};
  display: flex;
  padding-top: 50px;
`

const dashboardPage = () => {
  return (
    <>
      <Wrapper>
        <Sidebar />
        <div>
          <Navigation />
          <Content />
        </div>
      </Wrapper>
      <Footer />
    </>
  )
}

export default dashboardPage
