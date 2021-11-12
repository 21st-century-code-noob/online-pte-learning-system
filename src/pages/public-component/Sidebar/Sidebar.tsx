import dashLine from "assets/images/Dashboard/dashLine.svg"
import logoImage from "assets/images/Dashboard/logo.svg"
import styled from "styled-components"

import ContBar from "./Components/ContBar"
import HomeBar from "./Components/HomeBar"
import PracBar from "./Components/PracBar"
import StuCBar from "./Components/StuCBar"
import StuMBar from "./Components/StuMBar"

const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const ColumnDivNew = styled(ColumnDiv)`
  margin-top: 30px;
  margin-left: 55px;
`

const StyledImageI = styled.img`
  width: 89px;
  margin-left: 10px;
`

const StyledImageII = styled.img`
  margin: 27px 0;
`

const Sidebar = () => {
  return (
    <ColumnDivNew>
      <ColumnDiv>
        <StyledImageI id="top" src={logoImage} alt="logo" />
        <StyledImageII src={dashLine} alt="line" />
        <HomeBar />
        <PracBar />
        <StuCBar />
        <StuMBar />
        <ContBar />
      </ColumnDiv>
    </ColumnDivNew>
  )
}

export default Sidebar
