import styled from "styled-components";
import { Button } from 'react-bootstrap';


export const Container = styled.div`
    background: linear-gradient(to right,#bbe4ff, #d2e0ff, #e1def6, #e3daf3, #e6d6f0, #e9d2eb, #eac8ec, #ebbeed);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 101vh;

    
;
`;
export const Title = styled.h1`
    color: #000;
    align-items: center
    

    font-size: 2.5rem;
    font-family: 'Krub';
`;

export const StyledButton = styled(Button)`
    border: none;
    background-color: #000;
    
    font-size: 0.5rem;
    border-radius: 64px;
    padding: 0.7rem; 
    margin: 1.1rem 0;
    a {
        text-decoration: none;
        color: #ebbeed;
    }

    &:after {
        content: '';
        width: 100%;
        height: 100%;
        border-radius: 64px;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 300ms ease-in;
    }
    
    &:hover {
        cursor: pointer;
        color: #000;
        background-color: #fff;
    }

    &:hover::after {
        transform: scaleX(1);
        transform-origin: left;
    }

    &:focus {
        background-color: #000;
    }
    
    @media (min-width: 460px) {
        font-size: 1.5rem;
        margin: 1.1rem 0;
    }
`;