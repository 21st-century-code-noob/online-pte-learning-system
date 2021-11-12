import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import RefreshIcon from "@mui/icons-material/Refresh"
import styled from "styled-components"

const BackgroundWrapper = styled.div`
  background-color: white;
  padding: 20px;
  margin: 0 20px;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.1);
`

const Sorting = styled.div`
  font-weight: bold;
  color: #a0aec0;
  display: flex;
`

const IconPosition = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`

const BackgroundCard = ({ children }) => {
  return (
    <>
      <BackgroundWrapper>
        <Sorting>
          <div>Sort By</div>
          <KeyboardArrowUpIcon />
        </Sorting>
        {children}
      </BackgroundWrapper>
      <IconPosition>
        <RefreshIcon />
      </IconPosition>
    </>
  )
}

export default BackgroundCard
