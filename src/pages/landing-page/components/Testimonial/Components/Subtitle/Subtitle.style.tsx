import styled from "styled-components"

export const SubText = styled.p`
  font-size: ${(props) => props.theme.fontsize.paragraph};
  color: ${(props) => props.theme.color.text_gray};
  padding-top: 15px;
  padding-bottom: 15px;
  max-width: 500px;
  word-wrap: break-word;
`
