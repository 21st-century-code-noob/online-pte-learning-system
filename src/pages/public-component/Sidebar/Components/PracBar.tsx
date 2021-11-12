import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import bulb from "assets/images/Dashboard/icon/bulb.svg"
import { useState } from "react"
import styled from "styled-components"

import FunctionBar from "./Components/FunctionBar"
import Icon from "./Components/Icon"
import RowDiv from "./Components/RowDiv"
import Selection from "./Components/Selection"

const Rotate = styled.div<{ clicked?: boolean }>`
  transform: ${(props) => (props.clicked ? "scaleY(-1)" : "none")};
`

const Detail = styled.div<{ clicked?: boolean }>`
  display: ${(props) => (props.clicked ? "block" : "none")};
`

const HomeBar = () => {
  const [clicking, setClicking] = useState(false)

  function handleClick() {
    if (clicking === false) {
      setClicking(true)
    } else setClicking(false)
  }

  return (
    <>
      <RowDiv onClick={handleClick}>
        <Icon source={bulb} discribe="bulbIcon" />
        <FunctionBar>Practice Online</FunctionBar>
        <Rotate clicked={clicking}>
          <KeyboardArrowDownIcon />
        </Rotate>
      </RowDiv>
      <Detail clicked={clicking}>
        <Selection>Speaking</Selection>
        <Selection>Writing</Selection>
        <Selection>Reading</Selection>
        <Selection>Listening</Selection>
      </Detail>
    </>
  )
}

export default HomeBar
