import hand from "assets/images/Dashboard/wavingHand.png"
import styled from "styled-components"

import Practice from "./Component/PracticeNow/Practice"
import StudyMater from "./Component/StudyMater/StudyMater"
import StudyStat from "./Component/StudyStat/StudyStat"
import WeeklyPrediction from "./Component/WeeklyPrediction/WeeklyPrediciton"

const StyledDiv = styled.div`
  width: 335px;
`

const FlexRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledImg = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`

const Title = styled.div`
  display: flex;
  align-items: center;
`

const SubTitle = styled.h2`
  display: inline-block;
  padding-bottom: 10px;
  border-bottom: 6px solid;
  border-color: #bfeee9;
`
const SubTitleGap = styled(SubTitle)`
  margin-top: 100px;
`

const Content = () => {
  return (
    <>
      <FlexRow>
        <StyledDiv>
          <Title>
            <StyledImg src={hand} />
            <h1>Good Evening, Cindy</h1>
          </Title>
          <SubTitle>Study Stats</SubTitle>
          <StudyStat />
          <SubTitleGap>Study Material</SubTitleGap>
        </StyledDiv>
        <div>
          <SubTitle>Practice Now</SubTitle>
          <Practice />
          <SubTitle>Weekly Prediciton</SubTitle>
          <WeeklyPrediction />
        </div>
      </FlexRow>
      <StudyMater />
    </>
  )
}

export default Content
