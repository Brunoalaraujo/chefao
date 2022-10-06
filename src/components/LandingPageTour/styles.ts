import GlobalStyle from "../../styles/Global";
import styled from "styled-components";
import { Button } from 'react-bootstrap';


export const Container = styled.div`
  display: flex;
  img {
    height: 101vh;
    width: 100vw;    
  };
;
`;
export const Aside = styled.div`
  width: 29%;
  margin-left: 69%;
  position: absolute;
  text-align: center;
;
`;
export const Title = styled.h1`
padding-top: 6rem;
padding-left: 13%;
color: #FFF;
font-size: 2.5rem;
font-family: 'Krub';
text-align: start;
`;
export const StyledButton = styled(Button)`
  // z-index: 1;
  border: none;
  background-color: #FFFFFF;
  width: 72%;
  font-size: 0.5rem;
  border-radius: 64px;
  padding: 0.7rem; 
  margin: 0.3rem 0;
  a {
    text-decoration: none;
    color: #CF2CD9;
  }
  &:after {
      content: '';
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 64px;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 300ms ease-in;
  }
  
  &:hover {
      text-decoration: none;
      cursor: pointer;
      background-color: #ccc;
      color: #FFF;
  }
  &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
  }
  &:focus {
      background-color: #fff;
  }
  @media (min-width: 460px) {
      font-size: 1.5rem;
      margin: 1.1rem 0;
  }
`;
export const SignUpLink = styled.div`
        margin: 2.1rem 0;
        text-align: center;
        font-size: 1.4rem;
    a {
        text-align: center;
        text-decoration: none;
        color: #fff;
    }
    a:hover {
      text-align: center;
        color: red;
    }
`
