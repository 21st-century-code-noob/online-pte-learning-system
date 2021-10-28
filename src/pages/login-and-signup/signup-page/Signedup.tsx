import { Link } from "react-router-dom"

import Footer from "../../../pages/public-component/Footer/Footer"
import Navbar from "../../../pages/public-component/Navbar"
import Buttons from "../Styles/Buttons.style"
import Title from "./components/Title/Title"
import { Words } from "./Signedup.style"
import { Container } from "./Signup.style"
import { Wrapper } from "./Signup.style"
import { Background } from "./Signup.style"
import { Block } from "./Signup.style"

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
            <Link to="/login">
              <Buttons variant="contained" size="large">
                SIGN IN NOW
              </Buttons>
            </Link>
          </Container>
        </Wrapper>
      </Background>
      <Footer />
    </div>
  )
}

export default Signedup
