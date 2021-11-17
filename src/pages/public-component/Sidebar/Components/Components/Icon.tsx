import styled from "styled-components"

const StyledIcon = styled.img`
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 25%;
  width: 20px;
  height: 20px;
  padding: 5px;
`

const Icon = ({ source, discribe }) => {
  return <StyledIcon src={source} alt={discribe} />
}

export default Icon
