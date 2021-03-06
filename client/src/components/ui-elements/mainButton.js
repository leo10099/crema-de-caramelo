import styled from 'styled-components'

const MainButton = styled.button`

@media only screen and (max-width: 1024px) {
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.3rem;
  font-size: 13px;
  font-weight: bold;
  opacity:0.8;
  display: block;
  margin: 0 auto;
  margin-bottom: 2.8rem;
  width: 95%;
  text-align: center;
  line-height: 3em;
  background-color: ${props => props.theme.rosa};
  color: ${props => props.theme.crema};
  border: 2px solid ${props => props.theme.rosa};

  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  cursor:pointer}

@media only screen and (min-width: 1024px) {
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    font-size: 20px;
    font-weight: bold;
    display: block;
    opacity:0.8;
    position: relative;
    text-align: center;
    padding: 0 2rem 0 2rem;
    margin: 0 auto;
    background-color: ${props => props.theme.rosa};
    color: whitesmoke;
    border: 2px solid ${props => props.theme.rosa};
    border-radius: 5px;
    line-height: 3em;
    box-shadow: 0 0 0 0 transparent;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
    cursor:pointer

  &:hover {
    color: ${props => props.theme.crema};
    box-shadow: 0 0 30px 0 rgba(184, 134, 11, 0.6);
    border:0;
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
    background-color: ${props => props.theme.rosa};
  }
  &:hover:before {
    -webkit-animation: shine 0.7s 0s linear;
    -moz-animation: shine 0.7s 0s linear;
    animation: shine 0.7s 0s linear;
  }
  &:active {
    box-shadow: 0 0 0 0 transparent;
    -webkit-transition: box-shadow 0.2s ease;
    -moz-transition: box-shadow 0.2s ease;
    transition: box-shadow 0.2s all ease;
    transform: scale(0.97);
  }
  &&:before {
    content: '';
    display: block;
    width: 0px;
    height: 86%;
    position: absolute;
    top: 7%;
    left: 0%;
    opacity: 0;
    background: white;
    box-shadow: 0 0 15px 3px white;
    -webkit-transform: skewX(-20deg);
    -moz-transform: skewX(-20deg);
    -ms-transform: skewX(-20deg);
    -o-transform: skewX(-20deg);
    transform: skewX(-20deg);
  }

  @-webkit-keyframes shine {
    from {
    opacity: 0;
    left: 0%;
    }
    50% {
    opacity: 1;
    }
    to {
    opacity: 0;
    left: 100%;
    }
  }
  @-moz-keyframes shine {
    from {
    opacity: 0;
    left: 0%;
    }
    50% {
    opacity: 1;
    }
    to {
    opacity: 0;
    left: 100%;
    }
  }
  @keyframes shine {
    from {
    opacity: 0;
    left: 0%;
    }
    50% {
    opacity: 1;
    }
    to {
    opacity: 0;
    left: 100%;
    }
  }

}
`

export default MainButton