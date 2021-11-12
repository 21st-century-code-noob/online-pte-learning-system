import styled from "styled-components"

const StyledButton = styled.a`
  background-color: #ff980087;
  border-radius: 15px;
  position: fixed;
  left: 10px;
  bottom: 10px;
  padding: 10px;
  text-decoration: none;
  color: white;
  font-weight: bold;
`

const ScrollBackButton = ({ link, children }) => {
  return <StyledButton href={link}>{children}</StyledButton>
}

export default ScrollBackButton
