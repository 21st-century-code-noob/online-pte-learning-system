import React from "react"
import styled from "styled-components"

const StyledText = styled.div`
  width: 100%;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`

const FirstLine = styled.span`
  font-size: ${(props) => props.theme.fontsize.caption};
  font-weight: 400;
  color: ${(props) => props.theme.color.text_gray};
  margin: 1% 0;
`

const SecondLine = styled.span`
  font-size: ${(props) => props.theme.fontsize.subtitle};
  font-weight: 700;
  color: ${(props) => props.theme.color.accent};
  margin: 2% 0;
`

const OtherLines = styled.span`
  font-size: ${(props) => props.theme.fontsize.paragraph};
  font-weight: 400;
  color: ${(props) => props.theme.color.text_gray};
`

const FourthLine = styled.span`
  font-size: ${(props) => props.theme.fontsize.paragraph};
  font-weight: 400;
  color: ${(props) => props.theme.color.text_gray};
  visibility: hidden;
`

type Props = {
  text: Array<string>
}

const Text: React.FC<Props> = ({ text }): JSX.Element => {
  return (
    <StyledText>
      <TextContainer>
        <FirstLine>{text[0]}</FirstLine>
        <SecondLine>{text[1]}</SecondLine>
        <OtherLines>{text[2]}</OtherLines>
        {text[3] === "null" ? <FourthLine>{text[3]}</FourthLine> : <OtherLines>{text[3]}</OtherLines>}
      </TextContainer>
    </StyledText>
  )
}

export default Text
