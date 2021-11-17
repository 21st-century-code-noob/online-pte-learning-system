import Card from "pages/landing-page/components/StudyMaterial/Card/Card"
import React from "react"
import styled from "styled-components"

import Text from "./Text/Text"

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.color.background_color};
  position: relative;
  row-gap: 5vh;
  min-height: 40vh;
  padding: ${(props) => props.theme.margin.padding_section};
`
const Container = styled.section`
  padding: ${(props) => props.theme.margin.container_padding};
  margin: auto;
  max-width: ${(props) => props.theme.margin.max_width};
`

const Header = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  row-gap: 3vh;
  min-width: 20vw;
  height: auto;
`
const Title = styled.h4`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontsize.title};
  text-align: left;
  color: ${(props) => props.theme.color.accent};
  margin: 0;
  border-bottom: 5px solid;
  border-color: ${(props) => props.theme.color.secondary};
  padding: 20px 5px;
  max-width: 550px;
`

const Cards = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  border-radius: 20px;
  margin: ${(props) => props.theme.margin.margin_content};
  padding: 1rem;
  background-color: #fff;
  min-height: 40vh;
`

const StudyMaterial: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Title>Download PTE Study Material</Title>
        </Header>
        <Content>
          <Cards>
            <Card text={"Speaking Template"} />
            <Text text={["Material #1", "Speaking Template", "Describe Image Template", "Re-tell Lecture Template"]} />
          </Cards>
          <Cards>
            <Card text={"Writing Template"} />
            <Text
              text={["Material #2", "Writing Template", "Write Essay template", "Summarize Written Text Template"]}
            />
          </Cards>
          <Cards>
            <Card text={"Listening Template"} />
            <Text text={["Material #3", "Listening Template", "Summarize Spoken Text Template", "null"]} />
          </Cards>
        </Content>
      </Container>
    </Wrapper>
  )
}

export default StudyMaterial
