import Reading from "pages/public-component/Icons/Reading"
import styled from "styled-components"

import CardWrapper from "./Component/CardWrapper"
import FunctionBar from "./Component/FunctionBar"

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const ReadingCard = () => {
  return (
    <CardWrapper>
      <Reading />
      <FlexColumn>
        <FunctionBar type="RO" detail="Re-Order Paragraphs" num={158} linkto="/" />
        <FunctionBar type="FIBW" detail="Writing&Reading: Fill in the Blanks" num={258} linkto="/" />
        <FunctionBar type="FIB" detail="Reading: Fill in the Blanks" num={164} linkto="/" />
      </FlexColumn>
    </CardWrapper>
  )
}

export default ReadingCard
