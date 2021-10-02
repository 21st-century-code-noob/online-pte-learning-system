import { Button } from "@material-ui/core"
import styled from "styled-components"

export const StyledButton = styled(Button)`
  && {
    background: ${(props) => props.theme.color.primary};
    color: white;
    box-shadow: 0;
    &&:hover {
      background: ${(props) => props.theme.color.secondary_deep};
    }
  }
`
