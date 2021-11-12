import Writing from "pages/public-component/Icons/Writing"
import styled from "styled-components"

import CardWrapper from "./Component/CardWrapper"
import FunctionBar from "./Component/FunctionBar"

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const WritingCard = () => {
  return (
    <CardWrapper>
      <Writing />
      <FlexColumn>
        <FunctionBar type="SWT" detail="Summarize Written Text" num={129} linkto="/" />
        <FunctionBar type="WE" detail="Write Essay" num={144} linkto="/" />
      </FlexColumn>
    </CardWrapper>
  )
}

export default WritingCard
