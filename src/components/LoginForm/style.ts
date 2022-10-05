import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 100vh;
    img {
        width: 90%;
        align-self: center;
    }
    h1 {
        color: #ab4be0;
        text-transform: uppercase;
    }
    @media (min-width: 460px) {
        h1 {
            font-size: 1.5rem;
            margin-bottom:  2.3rem;
        }
    }
`
export const LoginForm = styled(Form)`
    display: flex;
    flex-flow: nowrap column;
    justify-content: center;
    align-items: center;
    width: 30.438rem;
    max-width: 31rem;
    background-color: #3a0323;
    filter: drop-shadow(0 0 0.75rem white);
`

export const LoginFormGroup = styled(Form.Group)`   
    
    padding: 0.17rem;
    @media (min-width: 460px) { 
        padding-bottom: 0.8rem;
    }
`

export const LoginFormInput = styled(Form.Control)`
    border: 1px solid #faebf4;
    border-radius: 12px;
    
    &::placeholder {
        text-align:center;
        font-size: 1.3rem;
    }
    @media (min-width: 460px) {
        &::placeholder {
            font-size: 1.3rem;
        }
    }
`

export const StyledButton = styled(Button)`
        z-index: 1;
        position: relative;
        border: none;
        background-color: #22bef8;
        width: 69%;
        font-size: 1.1rem;
        color: #000;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.30));
        border-radius: 12px;
        margin: 0.3rem 0;
        &:after {
            content: '';
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.30);
            border-radius: 12px;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 300ms ease-in;
        }
        
        &:hover {
            background-color: #ab4be0;
            color: #faebf4;
        }
        &:hover::after {
            transform: scaleX(1);
            transform-origin: left;
        }
        &:focus {
            background-color: #ab4be0;
        }
        @media (min-width: 460px) {
            font-size: 1.5rem;
            margin: 1.1rem 0;
        }
`
export const StyledErrorMessage = styled.div`
    color: #FF3333;
    padding-left: 0.5rem;
`

export const SignUpLink = styled.div`
        margin: 1.1rem 0;
        text-align: center;
        font-size: 1.3rem;
    a {
        text-decoration: none;
        color: #ab4be0;
    }
    a:hover {
        color: #22bef8;
    }
`