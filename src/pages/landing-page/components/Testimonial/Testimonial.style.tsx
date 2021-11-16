import styled from "styled-components"

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.background_color};
  padding: ${(props) => props.theme.margin.padding_section};
  padding-bottom: 4rem;
`

export const Box = styled.div`
  max-width: ${(props) => props.theme.margin.max_width};
  margin: auto;
  padding: ${(props) => props.theme.margin.container_padding};
`
