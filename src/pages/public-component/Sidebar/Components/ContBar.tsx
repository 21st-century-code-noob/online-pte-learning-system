import id from "assets/images/Dashboard/icon/idCard.svg"
import styled from "styled-components"

import FunctionBar from "./Components/FunctionBar"
import Icon from "./Components/Icon"
import RowDiv from "./Components/RowDiv"

const ContBar = () => {
  return (
    <RowDiv>
      <Icon source={id} discribe="idCardIcon" />
      <FunctionBar>Contact Us</FunctionBar>
    </RowDiv>
  )
}

export default ContBar
