import StarRateIcon from "@material-ui/icons/StarRate"
import { Avatar } from "@mui/material"
import React from "react"

import { Container } from "./Card.style"
import { Information } from "./Card.style"
import { UserName } from "./Card.style"
import { Rating } from "./Card.style"
import { CardText } from "./Card.style"

const Card = (props: {
  firstName: string
  lastName: string
  location: string
  image: string
  content: string
  goal: number
}) => {
  return (
    <Container>
      {/* {items.map(({
            key,
            avatar,
            userName,
            rating,
            cardText,
        }) => ("/static/images/avatar/1.jpg"
            <> */}
      <Information>
        <Avatar alt="Remy Sharp" src={props.image}></Avatar>
        <UserName>
          {props.firstName} {"\n"} {props.lastName}
          {","}
          {props.location}{" "}
        </UserName>
        <Rating>
          <p className="icon">{props.goal} </p>
          <StarRateIcon />
        </Rating>
      </Information>
      <CardText>{props.content}</CardText>
      {/* </>
        )
        )} */}
    </Container>
  )
}

export default Card
