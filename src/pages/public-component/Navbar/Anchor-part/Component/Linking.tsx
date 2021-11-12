import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledA = styled.a`
  color: #a0aec0;
  margin: 0 15px;
`

const Linking = ({ linkto, children }) => {
  return (
    <Link to={linkto}>
      <StyledA href="#">{children}</StyledA>
    </Link>
  )
}

export default Linking
