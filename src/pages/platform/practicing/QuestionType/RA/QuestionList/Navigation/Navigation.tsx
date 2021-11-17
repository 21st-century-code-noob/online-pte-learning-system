import Anchors from "pages/public-component/Navbar/Anchor-part/Anchors"
import Personal from "pages/public-component/Navbar/Personal-part/Personal"
import styled from "styled-components"

const items = [
  { linkto: "/", children: "HomePage" },
  { linkto: "/practice", children: "Practice Online" },
  { linkto: "/practice", children: "Speaking" }
]

const Navigation = () => {
  return (
    <div>
      <Personal />
      <Anchors items={items} current="Read Aloud" />
    </div>
  )
}

export default Navigation
