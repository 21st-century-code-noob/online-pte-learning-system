import Background from "pages/practicing/QuestionType/PublicComponent/ForList/BackgroundCard"
import FunctionBar from "pages/practicing/QuestionType/PublicComponent/ForList/FunctionBar"
import styled from "styled-components"

const QuestionBoard = () => {
  return (
    <>
      <Background>
        <FunctionBar num={1} title="Blue" new={true} week={true} />
        <FunctionBar num={3} title="Shakespeare" new={true} week={false} />
        <FunctionBar num={6} title="Domestica" new={false} week={false} />
      </Background>
    </>
  )
}

export default QuestionBoard
