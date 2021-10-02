import React from "react"
import styled from "styled-components"

import Down from "./Down-part/Down-part"
import Upper from "./Upper-part/Upper-part"

const Wrapper = styled.section`
  position: sticky;
  top: 10px;
  width: 1440px;
  height: 94px;
  border-color: black;
  border-width: 5px;
  align-items: center;
  z-index: 100000;
`

const NavBar = () => (
  <Wrapper>
    <Upper />
    <Down />
  </Wrapper>
)

export default NavBar
