import styled, { keyframes } from 'styled-components';
// import { Button } from 'react-bootstrap';


export const Fundoimg = styled.div`
    background: linear-gradient(to right, #cf2cd9, #867aff, #00a5ff, #00c3ff, #00daff);
    display: flex;
    max-width: 100%;
    height: 100vh;
    justify-content: center;

    @media (min-width: 769px){
        flex-direction: row;
        
    };
    @media (min-width: 1025px){
        flex-direction: row;
        
    };
    `;

export const Container = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 90vw;

    @media (min-width: 769px){
        flex-direction: row;
    };
    
    @media (min-width: 1024px){
        flex-direction: row;
        max-width: 100%;
        height: 100vh;
        justify-content: space-evenly;
        
        
    };
`;

const rightMove = keyframes`
    0% {
        transform: translateX(100px);
        opacity: 0;
    }

    50% {
        transform: translateX(-30px);
        }

    100% {
        transform: translateX(0);
        opacity: 1;
    }   
`;

const leftMove = keyframes`
    0% {
        transform: translateX(-100px);
        opacity: 0;
    }

    50% {
        transform: translateX(30px);
        }

    100% {
        transform: translateX(0);
        opacity: 1;
    }   
`;

export const Title = styled.h1`
    z-index: 1;
    position: relative;
    font-style: normal;
    font-weight: 600;
    color: #fff;
    
    font-size: 1.5rem;
    top: 3.3rem;
    width: 17rem;
    height: auto;
    left: 15%;

    animation: ${leftMove};
    animation-duration: 6s;
    animation-fill-mode: forwards;

    @media (min-width: 768px){
        font-size: 2.5rem;
        top: 6.3rem;
        width: 28rem;
        height: auto;
        left: 38%;
    };

    @media (min-width: 1024px){
        width: 19.5rem;
        height: 9.6rem;
        top: 6.5rem;
        left: -14rem;
    };
`;

export const SignupButton = styled.button`
    z-index: 2;
    border: 1px solid #fff;
    position: absolute;
    background: transparent;
    font-weight: 600;
    display: none;
    a {
        text-decoration: none;
        color: #fff;
        font-size: 1.2rem;
    };
    animation: ${leftMove};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    
    &:hover {
        cursor: pointer;
        text-decoration: none;
        background-color:#ccc;
        

    };
    @media (min-width: 768px) {
        display: inline;
        font-weight: 600;
        font-size: 1.2rem;
        border-radius: 64px;
        width: 20.5rem;
        top: 65%;
        padding: 0.8rem;
        margin: 0.4rem 0.6rem;
        left: 23rem;
    };
    @media (min-width: 1024px) {
        width: 20rem;
        font-size: 1.3rem;
        border-radius: 64px;
        padding: 0.7rem 0; 
        margin: 0;
        top: 25rem;
        left: 13rem;
    };
`;

export const Personagem = styled.img`
    z-index: 0;
    position: absolute;
    top: 9.2rem;
    width: 100vw;
    height: 73%;
    left: 0rem;

    @media (min-width: 768px) {
        top: 16rem;
        height: 65%;
        width: 87vw;
        left: -7rem;
    };

    @media (min-width: 1025px) {
        height: auto;
        width: 130vh;
        top: 2.9rem;
        left: 17rem;
        /* background-size: cover; */
    };
`;

export const Logo = styled.img`
    z-index: 1;
    position: absolute;
    align-items: center;
    left: 4rem;
    height: 7rem;
    width: 16rem;
    top: 5rem;
    

    animation: ${rightMove};
    animation-duration: 6s;
    animation-fill-mode: forwards;

    @media (min-width: 768px){
        height: 11rem;
        width: 24rem;
        top: 9rem;
        left: 39%;
    };

    @media (min-width: 1024px){
        width: 22.5rem;
        height: 154px;
        left: 62%;
        top: 8rem;
    };   
`;

export const StyledButton = styled.button`
    z-index: 1;
    border: none;
    position: absolute;
    background-color: #fff;
    font-weight: 600;
    border-radius: 64px;

    width: 60%;
    font-weight: 600;
    font-size: 1.3rem;
    border-radius: 64px;
    padding: 0.5rem;
    margin: 0rem 0.6rem;
    top: 85%;
    left: 18%;
    
    a {
        text-decoration: none;
        color: #CF2CD9;
    };
    animation: ${rightMove};
    animation-duration: 6s;
    animation-fill-mode: forwards;

    &:hover {
        cursor: pointer;
        text-decoration: none;
        background-color: #ccc;
        color: #fff;
    };
    
    @media (min-width: 768px) {
        font-weight: 600;
        font-size: 1.2rem;
        border-radius: 64px;
        width: 20.5rem;
        top: 75%;
        padding: 0.8rem;
        margin: 0.4rem 0.6rem;
        left: 23rem;
    };
    @media (min-width: 1024px) {
        width: 22.5rem;
        font-size: 1.5rem;
        left: 62%;
        padding: 0.7rem; 
        margin: 0.6rem 0;
        top: 24rem;
    };
`;


