import ArrowDownIcon from "@mui/icons-material/ArrowDropDown"
import account from "assets/images/Dashboard/icon/account-circle.svg"
import bell from "assets/images/Dashboard/icon/bell.svg"
import magnifier from "assets/images/Dashboard/icon/magnifier.svg"
import styled from "styled-components"

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
  position: relative;
`

const StyledA = styled.a`
  color: #a0aec0;
  margin-left: 10px;
`

const StyledImg = styled.img`
  margin-left: 10px;
  cursor: pointer;
`
const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  position: relative;
  top: 10px;
  right: 8px;
`

const Personal = () => {
  return (
    <StyledWrapper>
      <StyledImg src={magnifier} alt="searchIcon" />
      <StyledA>My Learning</StyledA>
      <StyledImg src={bell} alt="remindIcon" />
      <StyledImg src={account} alt="profileIcon" />
      <StyledButton>
        <ArrowDownIcon />
      </StyledButton>
    </StyledWrapper>
  )
}

export default Personal
