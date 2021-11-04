import dashLine from "assets/images/Dashboard/dashLine.svg"
import logoImage from "assets/images/Dashboard/logo.svg"
import styled from "styled-components"

import ContBar from "./Components/ContBar"
import HomeBar from "./Components/HomeBar"
import PracBar from "./Components/PracBar"
import StuCBar from "./Components/StuCBar"
import StuMBar from "./Components/StuMBar"

const ColumnDiv = styled.div<{ mar?: string }>`
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => props.mar || "0px"};
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
    <ColumnDiv mar="55px">
      <ColumnDiv>
        <StyledImageI src={logoImage} alt="logo" />
        <StyledImageII src={dashLine} alt="line" />
        <HomeBar />
        <PracBar />
        <StuCBar />
        <StuMBar />
        <ContBar />
      </ColumnDiv>
    </ColumnDiv>
  )
}

export default Sidebar
