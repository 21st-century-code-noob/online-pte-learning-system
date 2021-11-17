import styled from "styled-components"

import ListeningCard from "./Component/ListeningCard"
import ReadingCard from "./Component/ReadingCard"
import SpeakingCard from "./Component/SpeakingCard"
import Species from "./Component/Species"
import WritingCard from "./Component/WritingCard"

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
`

const Content = () => {
  return (
    <>
      <FlexRow>
        <Species selected={true}>All</Species>
        <Species selected={false}>Speaking</Species>
        <Species selected={false}>Listening</Species>
        <Species selected={false}>Reading</Species>
        <Species selected={false}>Writing</Species>
      </FlexRow>
      <SpeakingCard />
      <ListeningCard />
      <ReadingCard />
      <WritingCard />
    </>
  )
}

export default Content
