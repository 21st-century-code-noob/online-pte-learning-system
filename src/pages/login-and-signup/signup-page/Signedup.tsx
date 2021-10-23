import React from 'react'
import Title from './components/Title/Title'
import Buttons from '../Styles/Buttons.style'
import { Container } from './Signup.style'
import { Wrapper } from './Signup.style'
import { Background } from './Signup.style';
import { Block } from './Signup.style'
import { Words } from './Signedup.style'
import { Link } from 'react-router-dom'

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
                            <Link to='/login'>
                                <Buttons variant="contained" size="large">SIGN IN NOW</Buttons>
                                </Link>
                        </Container>
                </Wrapper>
            </Background>
        </div>
    )
}

export default Signedup


