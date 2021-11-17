import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import styled from "styled-components"

const BarWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 20px 40px;
`

const TagDisplay = styled.div<{ show?: boolean }>`
  display: ${(props) => (props.show ? "block" : "none")};
  margin-left: 15px;
  padding: 5px;
  border-radius: 10px;
  font-size: 0.8rem;
  color: white;
  font-weight: bold;
`

const New = styled(TagDisplay)`
  background-color: ${(props) => props.theme.color.primary};
`

const Week = styled(TagDisplay)`
  background-color: ${(props) => props.theme.color.status};
`

const Describe = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 70px;
`

const Title = styled(Describe)`
  font-weight: bold;
`
const ButtonWrapper = styled.div`
  display: flex;
  margin: 100px 70px 50px 70px;
  position: relative;
  justify-content: space-between;
`
const Button = styled.button`
  display: flex;
  align-items: center;
  font-weight: bold;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
`

const Button1 = styled(Button)`
  border: 2px solid;
  border-color: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.primary};
  background-color: transparent;
`

const Button2 = styled(Button)`
  background-color: ${(props) => props.theme.color.primary};
  border: none;
  color: white;
  margin-left: 25px;
`

const RightTwoButton = styled.div`
  display: flex;
`

const Body = (props: { num: number; title: string; new: boolean; week: boolean }) => {
  return (
    <>
      <BarWrapper>
        <div>
          #{props.num} {props.title}
        </div>
        <New show={props.new}>New</New>
        <Week show={props.week}>Weekly P</Week>
      </BarWrapper>
      <Title>
        React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building
        user interfaces or UI components. It is maintained by Facebook and a community of individual developers and
        companies.[4][5][6]
      </Title>
      <Describe>
        React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library[3] for building
        user interfaces or UI components. It is maintained by Facebook and a community of individual developers and
        companies.[4][5][6]
      </Describe>
      <ButtonWrapper>
        <Button1>ANSWER</Button1>
        <RightTwoButton>
          <Button1>
            QUESTION NO.
            <KeyboardArrowDownIcon />
          </Button1>
          <Button2>
            NEXT
            <ArrowForwardIcon />
          </Button2>
        </RightTwoButton>
      </ButtonWrapper>
    </>
  )
}

export default Body
