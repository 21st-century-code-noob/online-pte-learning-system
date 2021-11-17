import styled from "styled-components"

export const TitleName = styled.h4`
  font-weight: 700;
  font-size: ${(props) => props.theme.fontsize.title};
  text-align: left;
  color: ${(props) => props.theme.color.accent};
  margin: 0;
  border-bottom: 5px solid;
  border-color: ${(props) => props.theme.color.secondary};
  padding: 20px 5px;
  max-width: 395px;
`
