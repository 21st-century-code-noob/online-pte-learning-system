import { Visibility, VisibilityOff } from "@mui/icons-material"
import { FormControl, FormHelperText, IconButton, Input, InputAdornment, InputLabel } from "@mui/material"
import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"
import TextField from "@mui/material/TextField"
import Footer from "pages/landing-page/components/Footer/Footer"
import Navbar from "pages/landing-page/components/Navbar/Navbar"
import React from "react"
import { Link } from "react-router-dom"
import { BooleanLiteral } from "typescript"

import Buttons from "../Styles/Buttons.style"
import TextContainer from "../Styles/TextContainer.style"
import Title from "./components/Title/Title"
import { Container } from "./Signup.style"
import { Wrapper } from "./Signup.style"
import { Background } from "./Signup.style"
import { Block } from "./Signup.style"
import { Words } from "./Signup.style"

interface State {
  showPassword: boolean
}

const Signup = () => {
  const [passwordVisibility, setPasswordVisibility] = React.useState<boolean>(false)

  const handlePasswordVisibilityChange = () => {
    setPasswordVisibility(!passwordVisibility)
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <div>
      <Block />
      <Background>
        <Wrapper>
          <Title> Create an account </Title>
          <Container>
            <TextContainer>
              <FormControl required variant="standard" margin="normal" fullWidth={true}>
                <InputLabel htmlFor="username">Username</InputLabel>
                <Input id="username" aria-describedby="username input" />
              </FormControl>
              <FormControl required variant="standard" margin="normal" fullWidth={true}>
                <InputLabel htmlFor="email">Email</InputLabel>
                <Input id="email" type="email" aria-describedby="email input" />
              </FormControl>
              <FormControl required variant="standard" margin="normal" fullWidth={true}>
                <InputLabel htmlFor="email">Password</InputLabel>
                <Input
                  id="password"
                  type={passwordVisibility ? "text" : "password"}
                  aria-describedby="password input"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handlePasswordVisibilityChange}
                        onMouseDown={handleMouseDownPassword}>
                        {passwordVisibility ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText>Password should contain uppercase, lowercase characters and numbers.</FormHelperText>
              </FormControl>
            </TextContainer>
            <br />
            <Link to="/signedup">
              <Buttons variant="contained" size="large">
                SIGN IN
              </Buttons>
            </Link>
            <br />
            <Words>
              <p>By Clicking SIGN UP, you agree to our terms and have read and acknowledge our Privacy Statement.</p>
              <p>
                Already have an account?
                <Button variant="text" color="success">
                  {" "}
                  Sign In Now
                </Button>
              </p>
            </Words>
          </Container>
        </Wrapper>
      </Background>
    </div>
  )
}

export default Signup
