import React from "react"

import { Content } from "./Title.style"

const Title = ({ children }) => {
  return (
    <div>
      <Content>{children}</Content>
    </div>
  )
}

export default Title
