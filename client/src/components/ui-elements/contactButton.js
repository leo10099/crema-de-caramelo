import styled from 'styled-components'

const contactButton = styled.button`
display: block;
margin: 3rem auto;
padding: 1rem;
width:300px;
border: 2px solid ${props => props.theme.verde};
border-radius: 5px;
background-color: transparent;
color: ${props => props.theme.crema};
cursor: pointer;
transition: 0.3s ease all
  &:active {
    transform: scale3d(0.92, 0.92, 0.92);
  }
`
export default contactButton
