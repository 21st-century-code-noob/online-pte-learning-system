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
// import { Words } from  './Signup.style'
import { Words } from './Signedup.style'

const Signedup = () => {
    return (
        <div>
            <Navbar />
            <Block />
            <Background>
                <Wrapper>
                    <Title>Sign up successfully</Title>
                        <Container>
                            <Words>
                                <p>Welcome to Cuckoo!</p>
                                <p>Cindy</p>
                            </Words>
                            <Buttons variant="contained" size="large">SIGN IN NOW</Buttons>
                        </Container>
                </Wrapper>
            </Background>
            <Footer />
        </div>
    )
}

export default Signedup


