import CopyrightIcon from "@mui/icons-material/Copyright"
import styled from "styled-components"

import ContactDetail from "./components/ContactDetail"

const FooterWrapper = styled.div`
  background-color: #2d3748;
  padding: ${(props) => props.theme.margin.padding_section};
  padding-bottom: 0.5rem;
`
const FooterContainer = styled.div`
  color: #ffffff;
  max-width: ${(props) => props.theme.margin.max_width};
  padding: ${(props) => props.theme.margin.container_padding};
  margin: auto;
`

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

const Copyright = styled.div`
  text-align: center;
  padding-bottom: 9px;
`

const StyledHr = styled.hr`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const StyledP = styled.p`
  font-size: 0.5rem;
`

const COPY = styled(CopyrightIcon)`
  position: relative;
  top: 7px;
`

// the information wanted to display
const data1: { title: string; line1: string; line2: string; line3: string } = {
  title: "Pearson PTE",
  line1: "Pearson Official Website",
  line2: "Book PTE Tests",
  line3: "PTE Score Guide"
}

const data2: { title: string; line1: string; line2: string; line3: string } = {
  title: "PTE Resources",
  line1: "Listening Template",
  line2: "Speaking Template",
  line3: "Writing Template"
}

const data3: { title: string; line1: string; line2: string; line3: string } = {
  title: "Contact Us",
  line1: "Email: support@cuckoo.com",
  line2: "WeChat: ptecuckoo",
  line3: "Mobile: +6190000000"
}

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <ContactWrapper>
          <ContactDetail {...data1} />
          <ContactDetail {...data2} />
          <ContactDetail {...data3} />
        </ContactWrapper>
        <StyledHr />
        <Copyright>
          <StyledP>
            <COPY /> CuckooPTE. All rights reserved.
          </StyledP>
        </Copyright>
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer
