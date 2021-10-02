import styled from 'styled-components'

export const Container = styled.div`
background-color: white;
z-index: 99;
max-width: 370px;
max-height: 213px;
border-radius: 5%;
/* margin-right: 23px;
margin-bottom: 20px; */
`

export const Information = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding-right: 20px;
padding-left: 20px;
padding-top: 20px;
`

export const UserDetail = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 177px;
max-height: 46px;
`

export const Avatar = styled.img`
width: 25px;
height: 25px;
`

export const UserName = styled.div`
white-space: pre-line;
padding-left: 20px;
`

export const Rating = styled.div`

`

export const RatingBox = styled.div`
display: flex;
align-items: center;
`

export const CardText = styled.div`
word-wrap: break-word;
padding-top: 20px;
padding-right: 20px;
padding-left: 20px;
padding-bottom: 20px;
`