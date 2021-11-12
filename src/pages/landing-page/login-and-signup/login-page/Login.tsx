import { Visibility, VisibilityOff } from "@material-ui/icons"
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
import axios, { AxiosRequestConfig } from "axios"
import React from "react"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"

import Buttons from "../Styles/Buttons.style"
import TextContainer from "../Styles/TextContainer.style"
import Title from "./components/Title/Title"
import { Container } from "./Login.style"
import { Wrapper } from "./Login.style"
import { Background } from "./Login.style"
import { Block } from "./Login.style"

const Login = () => {
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

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const handlePasswordVisibilityChange = () => {
    setPasswordVisibility(!passwordVisibility)
  }

  const onSubmit = (data) => {
    setBackdropOpen(true)
    setSubmitButtonDisabled(true)
    const params = new URLSearchParams(data)

    const config: AxiosRequestConfig = {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      responseType: "json"
    }
    axios
      .post("http://localhost:8080/login", params.toString(), config)
      .then((response) => {
        const accessToken = response.data.access_token
        const refreshToken = response.data.refresh_token
        localStorage.setItem("access", accessToken)
        localStorage.setItem("refresh", refreshToken)
        navigate("/platform/dashboard")
        setSubmitButtonDisabled(false)
        setBackdropOpen(false)
      })
      .catch((err) => {
        if (err.response?.status) {
          setError("username", { message: err.response?.data })
        } else {
          alert("Network error. Please check your connection.")
        }
        setSubmitButtonDisabled(false)
        setBackdropOpen(false)
      })
  }

  return (
    <div>
      <Block></Block>
      <Background>
        <Wrapper>
          <Title> Sign In </Title>
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
                  <InputLabel htmlFor="username">Username</InputLabel>
                  <Input
                    aria-describedby="username input"
                    {...register("username", {
                      required: "username is required.",
                      minLength: { value: 6, message: "username should be at least 6 characters long." },
                      maxLength: { value: 24, message: "username should be no more than 24 characters." }
                    })}
                  />
                  {errors.username && <FormHelperText id="username-helper"> invalid username </FormHelperText>}
                </FormControl>
                <FormControl
                  required
                  className="password"
                  variant="standard"
                  margin="normal"
                  fullWidth={true}
                  error={errors.password}>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    type={passwordVisibility ? "text" : "password"}
                    aria-describedby="password input"
                    {...register("password", {
                      required: "password is required",
                      pattern: {
                        value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).*$/,
                        message: "invalid password"
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
                  {errors.password && <FormHelperText id="username-helper"> {errors.password.message} </FormHelperText>}
                </FormControl>
                <br />
                <Buttons variant="contained" size="large" type="submit" disabled={submitButtonDisabled}>
                  Log In
                </Buttons>
              </form>
            </TextContainer>
            <br />
          </Container>
        </Wrapper>
      </Background>
      <Backdrop sx={{ color: "#fff", zIndex: "99" }} open={backdropOpen}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}

export default Login
