import React from "react"

import Card from "./Components/Card/Card"
import Subtitle from "./Components/Subtitle/Subtitle"
import Title from "./Components/Title/Title"
import { Container } from "./Testimonial.style"
import { Box } from "./Testimonial.style"

const Testimonial = () => {
  return (
    <Container>
      <Box>
        <Title />
        <Subtitle />
        <Card />
      </Box>
    </Container>
  )
}

export default Testimonial
