import book from "assets/images/Dashboard/icon/book.svg"
import styled from "styled-components"

import FunctionBar from "./Components/FunctionBar"
import Icon from "./Components/Icon"
import RowDiv from "./Components/RowDiv"

const StuCBar = () => {
  return (
    <RowDiv>
      <Icon source={book} discribe="bookIcon" />
      <FunctionBar>Study Center</FunctionBar>
    </RowDiv>
  )
}

export default StuCBar
