import Listening from "pages/public-component/Icons/Listening"
import styled from "styled-components"

import CardWrapper from "./Component/CardWrapper"
import FunctionBar from "./Component/FunctionBar"

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const ListeningCard = () => {
  return (
    <CardWrapper>
      <Listening />
      <FlexColumn>
        <FunctionBar type="SST" detail="Summarize Spoken Text" num={323} linkto="/" />
        <FunctionBar type="FIB" detail="Listening: Fill in the Blanks" num={118} linkto="/" />
        <FunctionBar type="HIW" detail="Highlight Incorrect Words" num={101} linkto="/" />
        <FunctionBar type="WFD" detail="Write From Dictation" num={916} linkto="/" />
      </FlexColumn>
    </CardWrapper>
  )
}

export default ListeningCard
