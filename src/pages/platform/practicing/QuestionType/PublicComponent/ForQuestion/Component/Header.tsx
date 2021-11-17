import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  padding: 20px;
`

const TitleWrapper = styled.p`
  margin: 0 0 0 15px;
  font-size: 1.2rem;
  display: flex;
`

const StyledDiv = styled.div`
  margin-left: 15px;
`

const Header = (props: { type: string; num1: number; num2: number }) => {
  return (
    <HeaderWrapper>
      <ArrowBackIcon />
      <TitleWrapper>
        {props.type}
        <StyledDiv>
          {props.num1}/{props.num2}
        </StyledDiv>
      </TitleWrapper>
    </HeaderWrapper>
  )
}

export default Header
