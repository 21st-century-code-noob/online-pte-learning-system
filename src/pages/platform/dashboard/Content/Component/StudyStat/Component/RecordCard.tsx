import styled from "styled-components"

const Out = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  margin: 5px;
`

const BigNum = styled.p`
  font-size: 3rem;
  margin: 0;
`
const Describe = styled.p`
  color: #a0aec0;
  text-align: center;
`

const RecordCard = ({ num, detail }) => {
  return (
    <Out>
      <BigNum>{num}</BigNum>
      <Describe>{detail}</Describe>
    </Out>
  )
}

export default RecordCard
