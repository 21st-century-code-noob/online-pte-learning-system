import styled from "styled-components"

import Body from "./Component/Body"
import Header from "./Component/Header"

const CardWrapper = styled.div`
  background-color: white;
  margin: 20px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.1);
`

const QuestionCard = () => {
  return (
    <CardWrapper>
      <Header type="RA" num1={1} num2={496} />
      <Body num={1} title="Blue" new={true} week={true} />
    </CardWrapper>
  )
}

export default QuestionCard
