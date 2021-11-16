import logoLarge from "assets/images/studyMaterial/Feed-large.png"
import logoSmall from "assets/images/studyMaterial/Feed-small.png"
import React from "react"
import styled from "styled-components"

type Props = {
  text: string
}

const StyledCard = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 23.5vw;
  height: 53%;
  &:hover > .Non-active {
    visibility: hidden;
    opacity: 0;
  }
  &:hover > .active {
    visibility: visible;
    opacity: 1;
  }
`

const CardContent = styled.div`
  position: relative;
  left: 23%;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  opacity: 1;
  visibility: visible;
`

const CardContentActive = styled.div`
  position: relative;
  right: 38%;
  padding: 1% 13%;
  height: 20%;
  display: flex;
  visibility: hidden;
  align-items: center;
  border: 2px solid;
  border-radius: 12px;
  border-color: #fff;
  opacity: 0;
  visibility: hidden;
  &:hover {
    background-color: ${(props) => props.theme.color.secondary_deep};
    border-color: ${(props) => props.theme.color.secondary_deep};
  }
  transition: 0.3s ease-in-out;
`

const CardText = styled.h6`
  font-size: ${(props) => props.theme.fontsize.title_sm};
  font-weight: 700;
  color: #fff;
  text-align: left;
  width: 16vw;
  padding-left: 8%;
`

const CardTextActive = styled.h6`
  font-size: ${(props) => props.theme.fontsize.caption};
  font-weight: 700;
  color: #fff;
  padding-left: 5%;
`

const Card: React.FC<Props> = ({ text }): JSX.Element => {
  return (
    <StyledCard>
      <CardContent className="Non-active">
        <img src={logoLarge} alt="logo" />
        <CardText>{text}</CardText>
      </CardContent>
      <CardContentActive className="active">
        <img src={logoSmall} alt="logo" />
        <CardTextActive>Download</CardTextActive>
      </CardContentActive>
    </StyledCard>
  )
}

export default Card
