import styled from "styled-components"

const StyledDiv = styled.div`
  width: 100px;
  text-align: center;
`

const StyledIcon = styled.img`
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 25%;
  width: 32px;
  height: 32px;
  padding: 16px;
`

const IconNew = ({ source, describe, children }) => {
  return (
    <StyledDiv>
      <StyledIcon src={source} alt={describe} />
      <p>{children}</p>
    </StyledDiv>
  )
}

export default IconNew
