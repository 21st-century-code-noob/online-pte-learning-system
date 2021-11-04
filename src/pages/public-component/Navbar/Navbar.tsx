import React from "react"
import styled from "styled-components"

import Down from "./Down-part/Down-part"
import Upper from "./Upper-part/Upper-part"

const Wrapper = styled.section`
  position: sticky;
  top: 0rem;
  background-color: white;
  width: 100%;
  z-index: 100000;
`

const NavBar = () => (
  <Wrapper>
    <Upper />
    <Down />
  </Wrapper>
)

export default NavBar
