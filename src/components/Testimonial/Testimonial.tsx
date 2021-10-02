import React from "react"

import Card from "./Components/Card/Card"
import Subtitle from "./Components/Subtitle/Subtitle"
import Title from "./Components/Title/Title"
import { Container, Wrapper } from "./Testimonial.style"
import { CardContainer } from "./Testimonial.style"

const person1: { firstName: string; lastName: string; location: string; image: string; content: string; goal: number } =
  {
    firstName: "Viezh Rober",
    lastName: "Warsay",
    location: "Poland",
    image: "/static/images/avatar/1.jpg",
    content:
      "Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard.",
    goal: 4.5
  }

const Testimonial = () => {
  return (
    <Wrapper>
      <Container>
        <Title />
        <Subtitle />
        <CardContainer>
          {/* <Card>
                    items={[{
                        key: 'KEY',
                        avatar: 'dd',
                        userName: 'Bob',
                        cardText: 'dddddd',
                    }]}
                </Card> */}
          <Card {...person1} />
          <Card {...person1} />
          <Card {...person1} />
        </CardContainer>
      </Container>
    </Wrapper>
  )
}

export default Testimonial
