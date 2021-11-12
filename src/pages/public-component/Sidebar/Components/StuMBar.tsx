import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import file from "assets/images/Dashboard/icon/file.svg"
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

const StuMBar = () => {
  const [clicking, setClicking] = useState(false)

  function handleClick() {
    if (clicking === false) {
      setClicking(true)
    } else setClicking(false)
  }

  return (
    <>
      <RowDiv onClick={handleClick}>
        <Icon source={file} discribe="fileIcon" />
        <FunctionBar>Study Material</FunctionBar>
        <Rotate clicked={clicking}>
          <KeyboardArrowDownIcon />
        </Rotate>
      </RowDiv>
      <Detail clicked={clicking}>
        <Selection>Speaking Template</Selection>
        <Selection>Writing Template</Selection>
        <Selection>Listening Template</Selection>
      </Detail>
    </>
  )
}

export default StuMBar
