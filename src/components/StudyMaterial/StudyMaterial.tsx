import Card from "components/StudyMaterial/Card/Card"
import React from "react"
import styled from "styled-components"

import Text from "./Text/Text"

const Wrapper = styled.div`
  background-color: #f8f9fa;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  row-gap: 5vh;
  min-height: 40vh;
  padding: 2% 10%;
`

const Header = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  row-gap: 3vh;
  width: 40vw;
  min-width: 20vw;
  height: auto;
`
const Title = styled.h4`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontsize.title};
  text-align: left;
  color: ${(props) => props.theme.color.accent};
  margin: 0;
`

const Bar = styled.div`
  width: 38.5vw;
  height: 0.6vh;
  padding-left: 1%;
  background-color: ${(props) => props.theme.color.secondary};
`

const Container = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  border-radius: 20px;
  background-color: #fff;
  padding: 1% 1%;
  min-height: 40vh;
`

const Cards = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const StudyMaterial: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Title>Download PTE Study Material</Title>
        <Bar />
      </Header>
      <Container>
        <Cards>
          <Card text={"Speaking Template"} />
          <Text text={["Material #1", "Speaking Template", "Describe Image Template", "Re-tell Lecture Template"]} />
        </Cards>
        <Cards>
          <Card text={"Writing Template"} />
          <Text text={["Material #2", "Writing Template", "Write Essay template", "Summarize Written Text Template"]} />
        </Cards>
        <Cards>
          <Card text={"Listening Template"} />
          <Text text={["Material #3", "Listening Template", "Summarize Spoken Text Template", "null"]} />
        </Cards>
      </Container>
    </Wrapper>
  )
}

export default StudyMaterial
