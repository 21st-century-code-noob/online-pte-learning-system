import { KeyboardArrowDown as KeyboardArrowDownIcon } from "@material-ui/icons"
import React from "react"
import styled from "styled-components"

const DIV = styled.div`
  width: 100%;
  height: 80%;
  background-color: #3bcbbe;
  position: relative;
  display: flex;
  justify-content: space-between;
`
const STRONG = styled.strong`
  position: relative;
  top: 20%;
  left: 5%;
  font-size: 25px;
  color: white;
  align-item: center;
`
const UL = styled.ul`
  width: 600px;
  top: 20%;
  right: 10%;
  display: flex;
  position: relative;
  font-size: 15px;
  color: white;
  flex-direction: row;
  list-style: none;
  justify-content: space-between;
`

const LI = styled.li`
  list-style-type: none;
  align-item: center;
  .title {
    bottom: 15%;
  }
`

const ALink = styled.a<{ white?: boolean }>`
position: relative;
text-decoration: none;
font-weight:bold;
${({ white }) => (white ? "background-color: white; color: black" : "background-color:#3BCBBE; color: white")};
border-radius: 10px;
padding 15px;
`

const Down = () => (
  <DIV>
    <STRONG>Cuckoo</STRONG>
    <UL>
      <LI>
        <ALink href="#">Home</ALink>
      </LI>
      <LI>
        <ALink href="#" className="title">
          PTE Practice
        </ALink>
        <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
      </LI>
      <LI>
        <ALink href="#">Login</ALink>
      </LI>
      <LI>
        <ALink href="#" white>
          Sign up
        </ALink>
      </LI>
    </UL>
  </DIV>
)

export default Down
