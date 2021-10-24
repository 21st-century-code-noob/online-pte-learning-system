import React from 'react'
import Navbar from 'pages/landing-page/components/Navbar/Navbar'
import Footer from 'pages/landing-page/components/Footer/Footer'
import Title from './components/Title/Title'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

import Buttons from '../Styles/Buttons.style'
import TextContainer from '../Styles/TextContainer.style'
import { Container } from './Signup.style'
import { Wrapper } from './Signup.style'
import { Background } from './Signup.style';
import { Block } from './Signup.style'
import { Words } from  './Signup.style'

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'


const Signup = () => {
    return (
        <div>
            <Block />
            <Background>
                <Wrapper>
                    <Title> Create an account </Title>
                    <Container>
                        <TextContainer>
                        <TextField
                            label="Name"
                            variant="standard"
                            fullWidth
                            margin="normal"
                            //  onChange = {(event,newValue) => this.setState({username:newValue})}
                            />
                            <br/>
                            <TextField
                                label="Email"
                                variant="standard"
                                fullWidth
                                margin="normal"
                            //    onChange = {(event,newValue) => this.setState({password:newValue})}
                            />
                            <TextField
                            label="Password"
                            variant="standard"
                            fullWidth
                            margin="normal"
                            //  onChange = {(event,newValue) => this.setState({username:newValue})}
                            />
                            <br/>
                            <TextField
                            label="Confirm"
                            variant="standard"
                            fullWidth
                            margin="normal"
                            //  onChange = {(event,newValue) => this.setState({username:newValue})}
                            />
                            <br/>
                            </TextContainer>
                            <br/>
                            <Link to='/signedup'>
                                <Buttons variant="contained" size="large">SIGN IN</Buttons>
                            </Link>
                            <br/>
                            <Words>
                            <p>By Clicking SIGN UP, you agree to our terms and have read and acknowledge our Privacy Statement.</p>
                            <p>Already have an account?<Button variant='text' color='success'> Sign In Now</Button></p>

                            </Words>
                    </Container>
                </Wrapper>
            </Background>
        </div>
    )
}

export default Signup


