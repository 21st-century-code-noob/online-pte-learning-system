import styled from 'styled-components'

export const Content = styled.div`
    font-weight: 700;
    font-size: ${(props) => props.theme.fontsize.title};
    text-align: left;
    color: ${(props) => props.theme.color.accent};
    margin-bottom: 20px;
    border-bottom: 5px solid;
    border-color: ${(props) => props.theme.color.secondary};
    padding-bottom: 15px;
    max-width: 120px;
`