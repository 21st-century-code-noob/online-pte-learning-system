import Anchors from "pages/public-component/Navbar/Anchor-part/Anchors"
import Personal from "pages/public-component/Navbar/Personal-part/Personal"
import styled from "styled-components"

const items = [{ linkto: "/", children: "HomePage" }]

const Navigation = () => {
  return (
    <div>
      <Personal />
      <Anchors items={items} current="Practic Online" />
    </div>
  )
}

export default Navigation
