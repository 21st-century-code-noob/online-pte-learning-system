import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"
import TextField from "@mui/material/TextField"
import Footer from "pages/landing-page/components/Footer/Footer"
import Navbar from "pages/landing-page/components/Navbar/Navbar"
import React from "react"
import { Link } from "react-router-dom"

import Buttons from "../Styles/Buttons.style"
import TextContainer from "../Styles/TextContainer.style"
import Title from "./components/Title/Title"
import { Container } from "./Login.style"
import { Wrapper } from "./Login.style"
import { Background } from "./Login.style"
import { Block } from "./Login.style"
import { Words } from "./Login.style"

const Login = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Block></Block>
      <Background>
        <Wrapper>
          <Title> Sign In </Title>
          <Container>
            <TextContainer>
              <TextField
                label="Email"
                variant="standard"
                fullWidth
                margin="normal"
                //  onChange = {(event,newValue) => this.setState({username:newValue})}
              />
              <br />
              <TextField
                label="Password"
                variant="standard"
                fullWidth
                margin="normal"
                //    onChange = {(event,newValue) => this.setState({password:newValue})}
              />
            </TextContainer>
            <br />
            <Buttons variant="contained" size="large">
              SIGN IN
            </Buttons>
            <br />
            <Words>
              <p>
                Don't have an account?
                <Link to="/signup">
                  <Button variant="text" color="success">
                    Sign Up
                  </Button>
                </Link>
              </p>
            </Words>
          </Container>
        </Wrapper>
      </Background>
      {/* <Footer /> */}
    </div>
  )
}

export default Login
