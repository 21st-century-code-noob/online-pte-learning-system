import styled from "styled-components"

import RecordCard from "./Component/RecordCard"

const StyledBody = styled.div`
  font-weight: bold;
  background-color: white;
  border-radius: 15px;
  padding: 17px;
`

const Color = styled.span`
  color: #ae2121;
  margin-left: 5px;
`

const Row = styled.div`
  display: flex;
`

const StudyStat = () => {
  return (
    <StyledBody>
      <p>
        Exam Data:
        <Color>12/12/2021</Color>
      </p>
      <Row>
        <RecordCard num="10" detail="Today practiced" />
        <RecordCard num="747" detail="Total practiced" />
        <RecordCard num="77" detail="Practice day" />
      </Row>
    </StyledBody>
  )
}

export default StudyStat
