import { Phone as PhoneIcon } from "@material-ui/icons"
import { Room as RoomIcon } from "@material-ui/icons"
import styled from "styled-components"

const DIV = styled.div`
  padding: 0.1rem;
  margin: auto;
  max-width: ${(props) => props.theme.margin.max_width};
`

const UL = styled.ul`
  background-color: white;
  position: relative;
  display: flex;
  justify-content: flex-end;
  font-size: ${(props) => props.theme.fontsize.caption};
  color: ${(props) => props.theme.color.text_darkgray};
  list-style: none;
  && {
    margin: 0.5rem 0;
    padding: ${(props) => props.theme.margin.container_padding};
  }
`
const LI = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  && {
    margin: 0;
    margin-left: ${(props) => props.theme.margin.item};
  }
`
const Upper = () => (
  <DIV>
    <UL>
      <LI>
        <RoomIcon>room</RoomIcon>
        13 Elizabeth Street
      </LI>
      <LI>
        <PhoneIcon>phone</PhoneIcon>
        +61 400 00000
      </LI>
    </UL>
  </DIV>
)

export default Upper
