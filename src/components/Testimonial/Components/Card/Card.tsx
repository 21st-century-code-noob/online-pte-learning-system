import React from 'react'
import { Container } from './Card.style'
import { Information } from './Card.style'
import { UserDetail } from './Card.style'
import { Avatar } from '@mui/material'
import { UserName } from './Card.style'
import { Rating } from './Card.style'
import { RatingBox } from './Card.style'
import { CardText } from './Card.style'
import StarRateIcon from '@material-ui/icons/StarRate'

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation'; 
import SwiperCore, {Navigation,} from 'swiper';

SwiperCore.use([Navigation])

const items = [{
    id: 1,
    userName: 'Viezh Rober \n Warsaw, Poland',
    texts: 'Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard.Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard.',
    rating: '5'
    
},
{
    id: 2,
    userName: 'Viezh Rober \n Warsaw, Poland',
    texts: 'Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard. Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard.',
    rating: '4.5'
},
{
    id: 3,
    userName: 'Viezh Rober \n Warsaw, Poland',
    texts: 'Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard. Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard.',
    rating: '3'
},
{
    id: 3,
    userName: 'Viezh Rober \n Warsaw, Poland',
    texts: 'Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard. Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard.',
    rating: '3'
},
{
    id: 4,
    userName: 'Viezh Rober \n Warsaw, Poland',
    texts: 'Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard. Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard.',
    rating: '4' 
},
{
    id: 5,
    userName: 'Viezh Rober \n Warsaw, Poland',
    texts: 'Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard. Lorem lpsum is simply dummmy text of pringting and typeseeting industy. Lorem lpsum has sbeen theindsut standard.',
    rating: '2'
}]

const Card = () => {
    return (
        
            <Swiper
                spaceBetween={25}
                slidesPerView={3}
             >

            {items.map( user => (
                <SwiperSlide key={user.id}>
                    <Container>
                        <Information>
                            <UserDetail>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg"></Avatar>
                                <UserName>{user.userName}</UserName>
                            </UserDetail>
                            <Rating>
                                <RatingBox>
                                    {user.rating} 
                                    <StarRateIcon></StarRateIcon>
                                </RatingBox>
                            </Rating>
                        </Information>
                        <CardText>{user.texts}</CardText>
                    </Container>
            </SwiperSlide>
            )
            )}
            </Swiper>
        
    )
}

export default Card