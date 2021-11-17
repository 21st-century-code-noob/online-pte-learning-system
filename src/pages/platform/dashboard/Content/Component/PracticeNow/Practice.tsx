import Listening from "pages/public-component/Icons/Listening"
import Reading from "pages/public-component/Icons/Reading"
import Speaking from "pages/public-component/Icons/Speaking"
import Writing from "pages/public-component/Icons/Writing"
import styled from "styled-components"

const Row = styled.div`
  display: flex;
  background-color: white;
  padding: 16px 50px 0;
  justify-content: space-around;
`

const Practice = () => {
  return (
    <Row>
      <Speaking />
      <Listening />
      <Reading />
      <Writing />
    </Row>
  )
}

export default Practice
