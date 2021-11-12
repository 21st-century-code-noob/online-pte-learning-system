import styled from "styled-components"

import RowDiv from "./RowDiv"

const Select = styled.div`
  margin-left: 40px;
`
const Selection = ({ children }) => {
  return (
    <RowDiv>
      <Select>{children}</Select>
    </RowDiv>
  )
}

export default Selection
