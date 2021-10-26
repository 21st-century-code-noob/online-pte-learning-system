import { styled } from "@mui/material/styles"
import TextField from "@mui/material/TextField"
import Footer from "pages/landing-page/components/Footer/Footer"
import Navbar from "pages/landing-page/components/Navbar/Navbar"
import React from "react"
import { Link } from "react-router-dom"

import Buttons from "../Styles/Buttons.style"
import TextContainer from "../Styles/TextContainer.style"
import Title from "./components/Title/Title"
import { Words } from "./Signedup.style"
import { Container } from "./Signup.style"
import { Wrapper } from "./Signup.style"
import { Background } from "./Signup.style"
import { Block } from "./Signup.style"

const Signedup = () => {
  return (
    <div>
      <Block />
      <Background>
        <Wrapper>
          <Title>Sign up successfully</Title>
          <Container>
            <Words>
              <p>Welcome to Cuckoo!</p>
              <p>Cindy</p>
            </Words>
            <Link to="/login">
              <Buttons variant="contained" size="large">
                SIGN IN NOW
              </Buttons>
            </Link>
          </Container>
        </Wrapper>
      </Background>
    </div>
  )
}

export default Signedup
