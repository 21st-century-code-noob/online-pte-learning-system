// Import Swiper styles
import "swiper/swiper-bundle.css"
import "swiper/components/navigation"

import StarRateIcon from "@material-ui/icons/StarRate"
import { Avatar } from "@mui/material"
import React from "react"
import SwiperCore, { Navigation, Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"

import { Container } from "./Card.style"
import { Information } from "./Card.style"
import { UserDetail } from "./Card.style"
import { UserName } from "./Card.style"
import { Address } from "./Card.style"
import { Rating } from "./Card.style"
import { CardText } from "./Card.style"

SwiperCore.use([Navigation, Pagination])

const items = [
  {
    id: 1,
    userName: "Viezh Rober",
    address: "Warsaw, Poland",
    texts:
      "Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard. Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard.",
    rating: "5"
  },
  {
    id: 2,
    userName: "Viezh Rober",
    address: "Warsaw, Poland",
    texts:
      "Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard. Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard.",
    rating: "4.5"
  },
  {
    id: 3,
    userName: "Viezh Rober",
    address: "Warsaw, Poland",
    texts:
      "Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard. Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard.",
    rating: "3"
  },
  {
    id: 3,
    userName: "Viezh Rober",
    address: "Warsaw, Poland",
    texts:
      "Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard. Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard.",
    rating: "3"
  },
  {
    id: 4,
    userName: "Viezh Rober",
    address: "Warsaw, Poland",
    texts:
      "Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard. Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard.",
    rating: "4"
  },
  {
    id: 5,
    userName: "Viezh Rober",
    address: "Warsaw, Poland",
    texts:
      "Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard. Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard.",
    rating: "2"
  }
]

const Card = () => {
  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={25}
      pagination={{ clickable: true }}
      breakpoints={{
        1100: {
          slidesPerView: 3,
          slidesPerGroup: 3
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2
        },
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1
        }
      }}>
      {items.map((user) => (
        <SwiperSlide key={user.id}>
          <Container>
            <Information>
              <UserDetail>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"></Avatar>
                <UserName>
                  {user.userName}
                  <Address>{user.address}</Address>
                </UserName>
              </UserDetail>
              <Rating>
                {user.rating}
                <StarRateIcon style={{ color: "orange" }}></StarRateIcon>
              </Rating>
            </Information>
            <CardText>{user.texts}</CardText>
          </Container>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Card
