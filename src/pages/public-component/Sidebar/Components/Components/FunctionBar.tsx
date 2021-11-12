import styled from "styled-components"

const Describe = styled.div`
  margin-left: 10px;
`

const FunctionBar = ({ children }) => {
  return <Describe>{children}</Describe>
}

export default FunctionBar
