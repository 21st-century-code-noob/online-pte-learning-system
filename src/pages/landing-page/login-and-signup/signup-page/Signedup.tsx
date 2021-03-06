import { Link, useLocation } from "react-router-dom"

import Buttons from "../Styles/Buttons.style"
import Title from "./components/Title/Title"
import { Words } from "./Signedup.style"
import { Container } from "./Signup.style"
import { Wrapper } from "./Signup.style"
import { Background } from "./Signup.style"
import { Block } from "./Signup.style"

const Signedup = (props) => {
  const { state } = useLocation()
  const { username } = state

  return (
    <div>
      <Block />
      <Background>
        <Wrapper>
          <Title>Sign up successfully</Title>
          <Container>
            <Words>
              <p>Welcome to Cuckoo!</p>
              <p>{username}</p>
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
