import { PracticeAreaCards } from "pages/landing-page/components/PracticeArea/Components/PracticeAreaCard/PracticeAreaCard"
import { WeeklyPredictionCard } from "pages/landing-page/components/PracticeArea/Components/WeeklyPredictionCard/WeeklyPredictionCard"
import styled from "styled-components"

const PracticeAreaWrapper = styled.div`
  padding: ${(props) => props.theme.margin.padding_section};
  background-color: ${(props) => props.theme.color.background_color};
`
const PracticeAreaContainer = styled.div`
  max-width: ${(props) => props.theme.margin.max_width};
  margin: auto;
  padding: ${(props) => props.theme.margin.container_padding};
`
const PracticeAreaTitle = styled.div`
  padding: 20px 5px;
  width: 350px;
  font-size: ${(props) => props.theme.fontsize.title};
  font-weight: 700;
  border-bottom: 5px solid;
  border-color: ${(props) => props.theme.color.secondary};
`

export const PracticeArea = () => {
  return (
    <PracticeAreaWrapper>
      <PracticeAreaContainer>
        <PracticeAreaTitle>PTE Oline Practice</PracticeAreaTitle>
        <PracticeAreaCards />
        <WeeklyPredictionCard />
      </PracticeAreaContainer>
    </PracticeAreaWrapper>
  )
}
