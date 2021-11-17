import Speaking from "pages/public-component/Icons/Speaking"
import styled from "styled-components"

import CardWrapper from "./Component/CardWrapper"
import FunctionBar from "./Component/FunctionBar"

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const SpeakingCard = () => {
  return (
    <CardWrapper>
      <Speaking />
      <FlexColumn>
        <FunctionBar type="RA" detail="Read Aloud" num={496} linkto="/practice/speaking/RA" />
        <FunctionBar type="RS" detail="Read Sentence" num={1496} linkto="/" />
        <FunctionBar type="DI" detail="Describe Image" num={312} linkto="/" />
        <FunctionBar type="RL" detail="Retell Lecture" num={312} linkto="/" />
        <FunctionBar type="ASQ" detail="Answer Short Question" num={572} linkto="/" />
      </FlexColumn>
    </CardWrapper>
  )
}

export default SpeakingCard
