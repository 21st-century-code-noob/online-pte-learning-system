import Content from "pages/practicing/PracticeHomepage/Content/Content"
import Navigation from "pages/practicing/PracticeHomepage/Navigation/Navigation"
import Footer from "pages/public-component/Footer/Footer"
import ScrollBackButton from "pages/public-component/ScrolBackButton/ScrollBack"
import Sidebar from "pages/public-component/Sidebar/Sidebar"
import styled from "styled-components"

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
          <Navigation />
          <Content />
        </Row>
      </Wrapper>
      <Footer />
    </PageStyle>
  )
}

export default DashboardPage
