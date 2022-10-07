import styled from "styled-components";
import { Button } from 'react-bootstrap';


export const Container = styled.div`
  display: flex;
  img {
    height: 101vh;
    width: 100vw;    
  };
`;

export const Aside = styled.div`
  width: 30%;
  margin-left: 63%;
  position: absolute;
  text-align: center;
  
  @media (max-width: 425px) {
    width: 90%;
    height: 10%;
    margin: 5%;
  };
`;

export const Title = styled.h1`
flex-wrap: wrap;
text-align: start;
padding-top: 3rem;

color: #FFF;
font-weight: 500;
font-size: 2.5rem;
font-family: 'Krub';

@media (max-width: 768px) {
      color: #fff;
      flex-wrap: wrap;
      padding-top: 0;
      font-size: 1.9rem;
  };
  @media (max-width: 425px) {
      color: #fff;
      flex-wrap: wrap;
      text-align: center;
      padding-top: 0.9rem;
      margin-left: -3%;
  };
`;

export const StyledButton = styled(Button)`
  border: none;
  background-color: #FFFFFF;
  width: 95%;
  font-weight: 600;
  font-size: 1.5rem;
  border-radius: 64px;
  padding: 0.7rem; 
  margin: 0.6rem 0;
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
  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 1.2rem;
    border-radius: 64px;
    padding: 0.8rem; 
    margin: 0.4rem 0.6rem;
  };
  @media (max-width: 425px) {
    width: 25%;
    font-weight: 600;
    font-size: 0.8rem;
    border-radius: 64px;
    padding: 0.5rem; 
    margin: 0rem 0.6rem;
  };
`;

export const SignupButton = styled(Button)`
  border: 1px solid #fff;
  background: transparent;
  width: 95%;
  font-weight: 600;
  font-size: 1.3rem;
  border-radius: 64px;
  padding: 0.7rem 0; 
  margin: 0;
  a {
    text-decoration: none;
    color: #fff;
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
      
      
  }
  &:hover::after {
      transform: scaleX(1);
      transform-origin: left;
  }
  &:focus {
      background-color:#000 ;
  }
  @media (max-width: 768px) {
    font-weight: 600;
    font-size: 1.2rem;
    border-radius: 64px;
    padding: 0.8rem; 
    margin: 0.1rem 0.6rem;
  };
  @media (max-width: 425px) {
    width: 72%;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 64px;
    padding: 0.8rem;
    margin-top: 70%; 
    
  };
  
`;

export const SignUpLink = styled.div`
        margin: 1.9rem 0;
        text-align: center;
        font-size: 1.3rem;
    a {
        text-align: center;
        text-decoration: none;
        text-decoration: underline;
        color: #fff;
    };

    a:hover {
      text-align: center;
        color: red;
    };

    @media (max-width: 425px) {
      margin: 0.5rem 0;
      font-size: 1.1rem;
      
    };
    @media (max-width: 375px) {
      display: none;
    };
`
