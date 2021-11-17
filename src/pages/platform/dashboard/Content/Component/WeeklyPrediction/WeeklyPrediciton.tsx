import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import img from "assets/images/PracticeArea/WeeklyPredictionCard.jpg"
import styled from "styled-components"

import RecordPart from "./Component/RecordPart"

const FlexColumn = styled.div`
  background-image: url(${img});
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-weight: bold;
  color: white;
  padding: 10px 20px;
`

const FlexRow = styled.div`
  display: flex;
`
const FlexRowNew = styled(FlexRow)`
  align-items: center;
  margin-right: 10px;
`

const StyledP = styled.p`
  font-weight: bold;
  color: white;
`

const WeeklyPrediction = () => {
  return (
    <FlexColumn>
      <FlexRow>
        <RecordPart num="60%" detail="Repeat" />
        <RecordPart num="88" detail="New" />
        <RecordPart num="1120" detail="Prediction" />
        <RecordPart num="67" detail="Update" />
      </FlexRow>
      <FlexRowNew>
        <StyledP>PRACTICE NOW</StyledP>
        <ArrowForwardIcon />
      </FlexRowNew>
    </FlexColumn>
  )
}

export default WeeklyPrediction
