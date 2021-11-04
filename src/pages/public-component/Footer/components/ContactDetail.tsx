import AddIcon from "@mui/icons-material/Add"
import { useState } from "react"
import styled from "styled-components"

const DetailWrapper = styled.div`
  margin: 0 20px;
`

const DetailDownlist = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    margin-top: 20px;
    border-bottom: 1px solid #ffffff;
    display: flex;
    justify-content: space-between;

    &:hover {
      cursor: pointer;
    }
  }
`

const DetailTitle = styled.h3`
  font-size: 1.25rem;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const DetailContent = styled.ul<{ clicked?: boolean }>`
  list-style-type: none;
  padding: 0;

  @media screen and (max-width: 768px) {
    display: ${(props) => (props.clicked ? "block" : "none")};
  }
`

const StyledLi = styled.li`
  padding: 5px 0;
`

const StyledA = styled.a`
  color: #a1a1a6;
  text-decoration: none;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }
`
const StyledSpan = styled.span<{ clicked?: boolean }>`
  position: relative;
  top: 5px;
  transform: ${(props) => (props.clicked ? "rotate(45deg)" : "rotate(0deg)")};
  transition: transform 0.5s;
`

const ContactDetail = (props: { title: string; line1: string; line2: string; line3: string }) => {
  const [clicking, setClicking] = useState(false)

  function handleClick() {
    if (clicking === false) {
      setClicking(true)
    } else setClicking(false)
  }

  return (
    <DetailWrapper>
      <DetailDownlist onClick={handleClick}>
        {props.title}
        <StyledSpan clicked={clicking}>
          <AddIcon />
        </StyledSpan>
      </DetailDownlist>
      <DetailTitle>{props.title}</DetailTitle>
      <DetailContent clicked={clicking}>
        <StyledLi>
          <StyledA href="#">{props.line1}</StyledA>
        </StyledLi>
        <StyledLi>
          <StyledA href="#">{props.line2}</StyledA>
        </StyledLi>
        <StyledLi>
          <StyledA href="#">{props.line3}</StyledA>
        </StyledLi>
      </DetailContent>
    </DetailWrapper>
  )
}

export default ContactDetail
