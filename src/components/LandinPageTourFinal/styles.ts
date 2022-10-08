import styled from 'styled-components';

import { Button } from 'react-bootstrap';


export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    
    @media (max-width: 425px){
        flex-direction: column;
        justify-content: center;
        
    };
`;

export const Fundoimg = styled.img`
    transform: rotate(180deg);
`;

export const Title = styled.h1`
    z-index: 1;
    position: absolute;
    
    color: #fff;
    font-style: normal;
    font-weight: 700;
    font-size: 3.5rem;

    width: 22.5rem;
    height: 9.6rem;
    left: 13rem;
    top: 6.5rem;

    @media (max-width: 425px){
            font-size: 1.5rem;
            top: 5.5rem;
            width: 17rem;
            height: auto;
            left: 40%
    };
`;

export const SignupButton = styled(Button)`
    z-index: 1;
    border: 1px solid #fff;
    position: absolute;
    background: transparent;
    width: 22.5rem;
    font-weight: 600;
    font-size: 1.3rem;
    border-radius: 64px;
    left: 13rem;
    padding: 0.7rem 0; 
    margin: 0;
    top: 25rem;
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
        display: none;
    };
`;

export const Personagem = styled.img`
    z-index: 1;
    position: absolute;
    height: 92vh;
    top: 3rem;
    left: 0 auto;
    background-size: cover;

    @media (max-width: 425px) {
        
        top: 17rem;
    };
    
`;

export const Logo = styled.img`
    z-index: 1;
    position: absolute; 
    width: 22.5rem;
    height: 154px;
    left: 62%;
    top: 8rem;
    @media (max-width: 425px){
        height: 6rem;
        width: 17rem;
        justify-items: center;
        top: 4rem;
        left: 50%;
    };   
`;

export const StyledButton = styled(Button)`
    z-index: 1;
    border: none;
    position: absolute;
    background-color: #fff;
    width: 22.5rem;
    font-weight: 600;
    font-size: 1.5rem;
    border-radius: 64px;
    left: 62%;
    padding: 0.7rem; 
    margin: 0.6rem 0;
    top: 24rem;
    a {
        text-decoration: none;
        color: #CF2CD9;
    }
    &:after {
        content: '';
        z-index: -1;
        width: 100%;
        height: 100%;
        border-radius: 64px;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 300ms ease-in;
    }
    
    &:hover {
        cursor: pointer;
        text-decoration: none;
        background-color: #ccc;
        color: #fff;
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

