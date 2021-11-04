import styled from "styled-components"

import Template from "./Component/Template"

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StudyMater = () => {
  return (
    <FlexRow>
      <Template>Speaking</Template>
      <Template>Listening</Template>
      <Template>Writing</Template>
    </FlexRow>
  )
}

export default StudyMater
