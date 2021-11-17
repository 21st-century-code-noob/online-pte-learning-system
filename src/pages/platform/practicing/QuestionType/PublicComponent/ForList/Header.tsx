import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  display: flex;
  align-items: center;
  color: white;
  font-weight: bold;
  border-radius: 15px;
  margin: 20px;
  padding: 20px;
`

const TitleWrapper = styled.p`
  margin: 0 0 0 15px;
  font-size: 1.2rem;
`

const Header = (props: { type: string; num: number }) => {
  return (
    <HeaderWrapper>
      <ArrowBackIcon />
      <TitleWrapper>
        {props.type}({props.num})
      </TitleWrapper>
    </HeaderWrapper>
  )
}

export default Header
