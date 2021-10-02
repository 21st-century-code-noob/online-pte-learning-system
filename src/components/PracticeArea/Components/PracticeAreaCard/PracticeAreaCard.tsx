import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CreateIcon from "@mui/icons-material/Create"
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import SettingsVoiceIcon from "@mui/icons-material/SettingsVoice"
import styled from "styled-components"

const PracticeAreaContainer = styled.div`
   {
    background-color: white;
    width: 400px;
    border-radius: 15px;
    padding: 30px 20px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    width: 200px;
    margin: 10px;
    padding: 30px 20px;
  }
`

const CardContent = styled.div`
  padding: 10px;
  font-size: 15px;
  color: ${(props) => props.theme.color.text_gray};
  padding-bottom: 5px;
`
const CardIcon = styled.div`
  background-color: ${(props) => props.theme.color.primary};
  width: 40px;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CardTitle = styled.div`
   {
    padding: 20px;
    font-size: ${(props) => props.theme.fontsize.subtitle};
    font-weight: 700;
  }
  @media only screen and (max-width: 768px) {
    padding: 10px 0px;
    font-size: 15px;
    font-weight: 700;
  }
`

const CardPractice = styled.div`
   {
    padding-top: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`
const CardPracticWord = styled.div`
   {
    width: 110px;
    font-size: ${(props) => props.theme.fontsize.subtitle};
    font-weight: 700;
  }
  @media only screen and (max-width: 768px) {
    width: 80px;
    font-size: 15px;
    font-weight: 700;
  }
`
const PracticeAreaCardsStyle = styled.div`
   {
    display: flex;
    justify-content: space-around;
    margin: 5px 25px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`

export const PracticeAreaCard = (props) => {
  const IconGraph = () => {
    switch (props.info.title) {
      case "Speaking":
        return <SettingsVoiceIcon fontSize="large" sx={{ color: "white" }} />
      case "Listening":
        return <HeadphonesOutlinedIcon fontSize="large" sx={{ color: "white" }} />

      case "Reading":
        return <MenuBookIcon fontSize="large" sx={{ color: "white" }} />

      case "Writing":
        return <CreateIcon fontSize="large" sx={{ color: "white" }} />

      default:
        return <div></div>
    }
  }

  return (
    <PracticeAreaContainer>
      <CardIcon>
        <IconGraph />
      </CardIcon>
      <CardTitle>{props.info.title}</CardTitle>
      <CardContent>Weekly Update</CardContent>
      <CardPractice>
        <CardPracticWord>PRACTICE</CardPracticWord>
        <ArrowForwardIcon />
      </CardPractice>
    </PracticeAreaContainer>
  )
}

export const PracticeAreaCards = () => {
  const info = [
    { title: "Speaking", icon: "microphone", url: "" },
    { title: "Listening", icon: "headphones", url: "" },
    { title: "Reading", icon: "book-open", url: "" },
    { title: "Writing", icon: "edit", url: "" }
  ]

  const cards = info.map((item) => {
    return <PracticeAreaCard info={item} key={item.title} />
  })

  return <PracticeAreaCardsStyle>{cards}</PracticeAreaCardsStyle>
}
