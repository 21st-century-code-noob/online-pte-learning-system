import styled from "styled-components"

const Out = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px;
`

const BigNum = styled.p`
  font-size: 3rem;
  margin: 0;
`
const Describe = styled.p`
  text-align: center;
`

const RecordPart = ({ num, detail }) => {
  return (
    <Out>
      <BigNum>{num}</BigNum>
      <Describe>{detail}</Describe>
    </Out>
  )
}

export default RecordPart
