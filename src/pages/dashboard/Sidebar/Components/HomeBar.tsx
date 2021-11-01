import home from "assets/images/Dashboard/icon/home.svg"
import styled from "styled-components"

import FunctionBar from "./Components/FunctionBar"
import Icon from "./Components/Icon"
import RowDiv from "./Components/RowDiv"

const HomeBar = () => {
  return (
    <RowDiv>
      <Icon source={home} discribe="homeIcon" />
      <FunctionBar>Dashboard</FunctionBar>
    </RowDiv>
  )
}

export default HomeBar
