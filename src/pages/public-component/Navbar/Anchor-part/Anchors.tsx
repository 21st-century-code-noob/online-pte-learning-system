import styled from "styled-components"

import Linking from "./Component/Linking"

const StyledFlex = styled.div`
  display: flex;
`
const Span = styled.span`
  margin-left: 10px;
`

const Anchors = ({ items, current }) => {
  return (
    <StyledFlex>
      {items.map((node) => (
        <>
          <Linking linkto={node.linkto}>{node.children}</Linking>
          <div>/</div>
        </>
      ))}
      <Span>{current}</Span>
    </StyledFlex>
  )
}

export default Anchors
