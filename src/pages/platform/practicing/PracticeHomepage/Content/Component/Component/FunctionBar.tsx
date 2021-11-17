import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Outline = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid;
  border-radius: 10px;
  margin-left: 60px;
  margin-bottom: 20px;
  padding: 15px 35px;
  justify-content: space-between;
`

const LeftTwo = styled.div`
  display: flex;
`

const TypeWrapper = styled.div`
  width: 100px;
`

const Type = styled.div`
  display: inline-block;
  color: ${(props) => props.theme.color.secondary};
  border: 1px solid;
  border-color: ${(props) => props.theme.color.secondary};
  border-radius: 10px;
  padding: 0 10px;
  margin-right: 20px;
`

const RightTwo = styled.div`
  display: flex;
`

const FunctionBar = (props: { type: string; detail: string; num: number; linkto: string }) => {
  return (
    <Outline>
      <LeftTwo>
        <TypeWrapper>
          <Type>{props.type}</Type>
        </TypeWrapper>
        <div>
          {props.detail}({props.num})
        </div>
      </LeftTwo>
      <Link to={props.linkto}>
        <RightTwo>
          <div>PRACTICE</div>
          <ArrowForwardIcon />
        </RightTwo>
      </Link>
    </Outline>
  )
}

export default FunctionBar
