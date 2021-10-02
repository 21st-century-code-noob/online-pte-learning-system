import { Phone as PhoneIcon } from "@material-ui/icons"
import { Room as RoomIcon } from "@material-ui/icons"
import React from "react"
import styled from "styled-components"

const DIV = styled.div`
  width: 100%;
  height: 30%;
`

const UL = styled.ul`
  background-color: white;
  display: flex;
  position: relative;
  width: 20%;
  left: 70%;
  font-size: 5px;
  font-color: #718096;
  flex-direction: row;
  list-style: none;
  justify-content: space-around;
`
const LI = styled.li`
  list-style-type: none;
`
const Upper = () => (
  <DIV>
    <UL>
      <LI>
        <RoomIcon>room</RoomIcon>
        13 Elizabeth Street
      </LI>
      <LI>
        <PhoneIcon>phone</PhoneIcon>
        +61 400 00000
      </LI>
    </UL>
  </DIV>
)

export default Upper
