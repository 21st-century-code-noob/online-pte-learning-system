import file from "assets/images/Dashboard/icon/file.svg"
import styled from "styled-components"

const StyledSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 15px;
  width: 300px;
  height: 100px;
  padding: 16px;
  color: white;
  font-weight: bold;
`

const Template = ({ children }) => {
  return (
    <StyledSection>
      <img src={file} alt="fileIcon" />
      <div>{children} Template</div>
    </StyledSection>
  )
}

export default Template
