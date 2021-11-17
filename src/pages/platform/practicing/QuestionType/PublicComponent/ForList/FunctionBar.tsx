import styled from "styled-components"

const BarWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
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

const Status = styled.div`
  float: right;
  position: absolute;
  right: 0;
  background-color: #a0aec0;
  color: white;
  font-weight: bold;
  padding: 5px;
  border-radius: 10px;
  font-size: 0.8rem;
`

const FunctionBar = (props: { num: number; title: string; new: boolean; week: boolean }) => {
  return (
    <>
      <hr />
      <BarWrapper>
        <div>
          #{props.num} {props.title}
        </div>
        <New show={props.new}>New</New>
        <Week show={props.week}>Weekly P</Week>
        <Status>Undone</Status>
      </BarWrapper>
    </>
  )
}

export default FunctionBar
