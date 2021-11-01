import headset from "assets/images/Dashboard/icon/headset.svg"
import menu from "assets/images/Dashboard/icon/menu-book.svg"
import mic from "assets/images/Dashboard/icon/mic.svg"
import pen from "assets/images/Dashboard/icon/pen.svg"
import styled from "styled-components"

import IconNew from "./Component/IconNew"

const Row = styled.div`
  display: flex;
  background-color: white;
  padding: 16px 50px 0;
  justify-content: space-around;
`

const Practice = () => {
  return (
    <Row>
      <IconNew source={mic} describe="micIcon">
        Speaking
      </IconNew>
      <IconNew source={headset} describe="headsetIcon">
        Listening
      </IconNew>
      <IconNew source={menu} describe="BookIcon">
        Reading
      </IconNew>
      <IconNew source={pen} describe="penIcon">
        Writing
      </IconNew>
    </Row>
  )
}

export default Practice
