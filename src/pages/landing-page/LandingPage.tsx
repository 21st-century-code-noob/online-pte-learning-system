import Footer from "pages/public-component/Footer/Footer"
import Navbar from "pages/public-component/Navbar"

import Hero from "./components/Hero/Hero"
import { PracticeArea } from "./components/PracticeArea/PracticeArea"
import StudyMaterial from "./components/StudyMaterial/StudyMaterial"
import Testimonial from "./components/Testimonial/Testimonial"

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PracticeArea />
      <StudyMaterial />
      <Testimonial />
      <Footer />
    </>
  )
}

export default LandingPage
