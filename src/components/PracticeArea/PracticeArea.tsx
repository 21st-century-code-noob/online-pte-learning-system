import { PracticeAreaCards } from "components/PracticeArea/Components/PracticeAreaCard/PracticeAreaCard"
import { WeeklyPredictionCard } from "components/PracticeArea/Components/WeeklyPredictionCard/WeeklyPredictionCard"
import styled from "styled-components"
const PracticeAreaContainer = styled.div`
   {
    background-color: ${(props) => props.theme.color.background_color};
  }
`
const PracticeAreaTitle = styled.div`
   {
    padding: 20px 5px;
    width: 350px;
    font-size: ${(props) => props.theme.fontsize.title};
    font-weight: 700;
    border-bottom: 5px solid;
    border-color: ${(props) => props.theme.color.primary};
  }
`

export const PracticeArea = () => {
  return (
    <PracticeAreaContainer>
      <PracticeAreaTitle>PTE Oline Practice</PracticeAreaTitle>
      <PracticeAreaCards />
      <WeeklyPredictionCard />
    </PracticeAreaContainer>
  )
}
