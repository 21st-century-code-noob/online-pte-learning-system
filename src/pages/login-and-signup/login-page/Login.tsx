import React from 'react'
import Navbar from 'pages/landing-page/components/Navbar/Navbar'
import Footer from 'pages/landing-page/components/Footer/Footer'
import Title from './components/Title/Title'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Buttons from '../Styles/Buttons.style'
import TextContainer from '../Styles/TextContainer.style'
import { Container } from './Login.style'
import { Wrapper } from './Login.style'
import { Background } from './Login.style';
import { Block } from './Login.style'
import { Words } from './Login.style'

// const CssTextField = styled(TextField)({
//     '& label.Mui-focused': {
//       color: 'green',
//     },
//     '& .MuiInput-underline:after': {
//       borderBottomColor: 'green',
//     },
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: 'red',
//       },
//       '&:hover fieldset': {
//         borderColor: 'yellow',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: 'green',
//       },
//     },
//   });



const Login = () => {
    return (
        <div>
            <Navbar />
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
                            <br/>
                            <TextField
                                label="Password"
                                variant="standard"
                                fullWidth
                                margin="normal"
                            //    onChange = {(event,newValue) => this.setState({password:newValue})}
                            />
                            </TextContainer>
                            <br/>
                            <Buttons variant="contained" size="large">SIGN IN</Buttons>
                            <br/>
                            <Words>
                            <p>Don't have an account?<span> Sign Up</span></p>
                            </Words>
                    </Container>
                </Wrapper>
            </Background>
            <Footer />
        </div>
    )
}

export default Login


