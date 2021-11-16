import styled from "styled-components"

const Wrapper = styled.div`
  margin: 20px 0;
`

const StyledSubtitle = styled.h2<{ selected?: boolean }>`
  display: inline-block;
  border-bottom: ${(props) => (props.selected ? "8px solid" : "none")};
  border-color: ${(props) => props.theme.color.secondary};
  margin: 0 10px;
`

const Species = (props: { children: string; selected?: boolean }) => {
  return (
    <Wrapper>
      <StyledSubtitle selected={props.selected}>{props.children}</StyledSubtitle>
    </Wrapper>
  )
}

export default Species
