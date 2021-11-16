import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import backgroundImage from "assets/images/PracticeArea/WeeklyPredictionCard.jpg"
import styled from "styled-components"

const WeeklyPredictionContainer = styled.div`
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  color: white;
  padding: 40px 40px;
  margin: 40px 0.5rem;
  border-radius: 15px;
  font-size: ${(props) => props.theme.fontsize.subtitle};
  font-weight: 500;

  @media only screen and (max-width: 768px) {
    padding: 20px 20px;
    font-size: 10px;
    font-weight: 500;
  }
`
const WeeklyPredictionBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.color.secondary_deep},
      ${(props) => props.theme.color.accent}
    );
    opacity: 0.6;
  }
`
export const WeeklyPredictionContent = styled.div`
  position: relative;
  z-index: 5;
  margin: auto;
`

const WeeklyPredictionArea = styled.div`
  padding: 50px;
  display: flex;
  justify-content: space-around;
  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`
const PredictionCardStyle = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const PredictionNum = styled.div`
  font-size: ${(props) => props.theme.fontsize.title_lg};
  font-weight: 800;
  @media only screen and (max-width: 768px) {
    font-size: ${(props) => props.theme.fontsize.subtitle};
    font-weight: 500;
  }
`
const PredictionPractice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const PredictionCard = (props) => {
  return (
    <PredictionCardStyle>
      <PredictionNum>{props.info.Num}</PredictionNum>
      <div className="PredictionType">{props.info.Type}</div>
    </PredictionCardStyle>
  )
}

export const WeeklyPredictionCard = () => {
  const info = [
    { Type: "New", Num: "88" },
    { Type: "Predict", Num: "1120" },
    { Type: "Update", Num: "67" },
    { Type: "Repeat", Num: "60%" }
  ]
  const cards = info.map((item) => {
    return <PredictionCard info={item} key={item.Type} />
  })
  return (
    <WeeklyPredictionContainer>
      <WeeklyPredictionBackground />
      <WeeklyPredictionContent>
        <div className="WeeklyPredictionCardDate">Weekly Prediction 13/09 - 19/09</div>
        <WeeklyPredictionArea>{cards}</WeeklyPredictionArea>
        <PredictionPractice>
          <div className="PredictionPracticWord">PRACTICE NOW</div>
          <ArrowForwardIcon fontSize="small" />
        </PredictionPractice>
      </WeeklyPredictionContent>
    </WeeklyPredictionContainer>
  )
}
