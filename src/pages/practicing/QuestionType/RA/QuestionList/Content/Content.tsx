import Header from "pages/practicing/QuestionType/PublicComponent/ForList/Header"
import QuestionCard from "pages/practicing/QuestionType/PublicComponent/ForQuestion/QuestionCard"
import styled from "styled-components"

import QuestionBoard from "./Component/QuestionBoard"

const Content = () => {
  return (
    <>
      <Header type="Read Aloud" num={496} />
      <QuestionBoard />
      <QuestionCard />
    </>
  )
}

export default Content
