import ArrowDownIcon from "@mui/icons-material/ArrowDropDown"
import account from "assets/images/Dashboard/icon/account-circle.svg"
import bell from "assets/images/Dashboard/icon/bell.svg"
import magnifier from "assets/images/Dashboard/icon/magnifier.svg"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledFlexUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const StyledFlexDown = styled.div`
  display: flex;
`

const StyledA = styled.a`
  color: #a0aec0;
`

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
`

const Navigation = () => {
  return (
    <div>
      <StyledFlexUp>
        <img src={magnifier} alt="searchIcon" />
        <StyledA>My Learning</StyledA>
        <img src={bell} alt="remindIcon" />
        <img src={account} alt="profileIcon" />
        <StyledButton>
          <ArrowDownIcon />
        </StyledButton>
      </StyledFlexUp>
      <StyledFlexDown>
        <Link to="/">
          <StyledA href="#">HomePage</StyledA>
        </Link>
        <div>/</div>
        <span>Dashboard</span>
      </StyledFlexDown>
    </div>
  )
}

export default Navigation
