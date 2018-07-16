import styled from 'styled-components'

const contactButton = styled.button`
display: block;
margin: 3rem auto;
padding: 1rem;
border: 2px solid ${props => props.theme.rosa};
border-radius: 1.5px;
background-color: ${props => props.theme.rosa};
color: ${props => props.theme.violeta};


cursor: pointer;

transition: 0.3s ease all

  &:active {
    transform: scale3d(0.92, 0.92, 0.92);
  }
`
export default contactButton
