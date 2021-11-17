import { Visibility, VisibilityOff } from "@mui/icons-material"
import {
  Backdrop,
  CircularProgress,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel
} from "@mui/material"
import Button from "@mui/material/Button"
import axios, { AxiosRequestConfig } from "axios"
import React from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import Footer from "../../../public-component/Footer/Footer"
import Navbar from "../../../public-component/Navbar"
import Buttons from "../Styles/Buttons.style"
import TextContainer from "../Styles/TextContainer.style"
import Title from "./components/Title/Title"
import { Container } from "./Signup.style"
import { Wrapper } from "./Signup.style"
import { Background } from "./Signup.style"
import { Block } from "./Signup.style"
import { Words } from "./Signup.style"

const Signup = () => {
  const [passwordVisibility, setPasswordVisibility] = React.useState<boolean>(false)
  const [backdropOpen, setBackdropOpen] = React.useState<boolean>(false)
  const [submitButtonDisabled, setSubmitButtonDisabled] = React.useState<boolean>(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    setBackdropOpen(true)
    setSubmitButtonDisabled(true)
    const params = new URLSearchParams(data)
    const config: AxiosRequestConfig = {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      responseType: "json"
    }

    axios
      .post("http://localhost:8080/user/signup", params.toString(), config)
      .then((response) => {
        console.log("response: " + response.data.username)
        navigate("/signedup", { state: { username: response.data.username } })
        setBackdropOpen(false)
      })
      .catch((err) => {
        console.log("log err" + err.toString())
        if (err.response?.status) {
          setError("username", { message: err.response?.data })
        } else {
          alert("Network error. Please check your connection.")
        }
        setSubmitButtonDisabled(false)
        setBackdropOpen(false)
      })
  }

  const handlePasswordVisibilityChange = () => {
    setPasswordVisibility(!passwordVisibility)
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <div>
      <Navbar />
      <Block />
      <Background>
        <Wrapper>
          <Title> Create an account </Title>
          <Container>
            <TextContainer>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <FormControl
                  required
                  className="username"
                  variant="standard"
                  margin="normal"
                  fullWidth={true}
                  error={errors.username}>
                  <InputLabel htmlFor="username">Username (6-24 characters)</InputLabel>
                  <Input
                    aria-describedby="username input"
                    {...register("username", {
                      required: "username is required.",
                      minLength: { value: 6, message: "username should be at least 6 characters long." },
                      maxLength: { value: 24, message: "username should be no more than 24 characters." }
                    })}
                  />
                  {errors.username && <FormHelperText id="username-helper"> {errors.username.message} </FormHelperText>}
                </FormControl>
                <FormControl
                  required
                  className="email"
                  variant="standard"
                  margin="normal"
                  fullWidth={true}
                  error={errors.email}>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input
                    type="email"
                    aria-describedby="email input"
                    {...register("email", {
                      required: "email is required.",
                      pattern: { value: /^(.+)@(.+)$/, message: "invalid email address" }
                    })}
                  />
                  {errors.email && <FormHelperText> {errors.email.message} </FormHelperText>}
                </FormControl>
                <FormControl
                  required
                  className="password"
                  variant="standard"
                  margin="normal"
                  fullWidth={true}
                  error={errors.password}>
                  <InputLabel htmlFor="password">Password(6-24 characters)</InputLabel>
                  <Input
                    type={passwordVisibility ? "text" : "password"}
                    aria-describedby="password input"
                    {...register("password", {
                      required: "password is required",
                      pattern: {
                        value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/,
                        message: "password should contain uppercase, lowercase letters and numbers."
                      }
                    })}
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
                  <FormHelperText> password contains uppercase, lowercase characters and numbers. </FormHelperText>
                </FormControl>
                <br />
                <Buttons variant="contained" size="large" type="submit" disabled={submitButtonDisabled}>
                  SIGN IN
                </Buttons>
              </form>
            </TextContainer>
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
      <Backdrop sx={{ color: "#fff", zIndex: "99" }} open={backdropOpen}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default Signup
