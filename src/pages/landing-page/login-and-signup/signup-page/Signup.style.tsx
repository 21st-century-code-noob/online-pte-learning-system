import backimg from "assets/images/Login/Group1.png"
import styled from "styled-components"

export const Container = styled.div`
  background-color: #ffff;
  min-width: 600px;
  max-height: 491px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`

export const Wrapper = styled.div`
  max-width: 600px;
  max-height: 327px;
  margin-right: 10%;
  float: right;
`
export const Background = styled.div`
  position: relative;
  height: auto;
  width: 100%;
  padding: 0;
  min-height: 667px;
  background-image: url(${backimg});
  background-color: #f8f9fa;
  background-repeat: no-repeat;
  background-size: cover;
`
export const Block = styled.div`
  background-color: #f8f9fa;
  height: 80px;
`

export const Words = styled.div`
  max-width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${(props) => props.theme.fontsize.caption};
  text-align: center;
`
