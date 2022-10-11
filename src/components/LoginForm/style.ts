import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import FundoLog from '../../assets/images/loginInc.jpg';



export const Container1 = styled.body`
    background: url(${FundoLog}) repeat fixed;
    background-size:cover;

    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    img {
        left: 1rem;
        height: 74.39px;
        width: 60vw;
        align-self: center;
        padding: 0.9rem;
    };

    @media (min-width: 767px) {
        img {
            height: 110px;
        }
        
    };

    @media (min-width: 1023px) {
        img {
            height: 17vh;
            padding: 1.2rem;
        };
    }

`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
    @media (min-width: 1025px) {
        height: 90vh;
    }
`;

export const LoginForm = styled(Form)`
    
    box-sizing: border-box;
    display: flex;
    flex-flow: nowrap column;
    -webkit-box-pack: center;
    justify-content: space-evenly;
    -webkit-box-align: center;
    align-items: center;
    width: 21.5rem;
    max-width: 22rem;
    height: 24rem;
    border-radius: 1.2rem;
    color: #000;
    margin: 0 1rem;
    background: rgba(225,225,225,0.25);
    backdrop-filter: blur(15px);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.30));
    
    @media (min-width: 768px){
        width: 30rem;
        max-width: 41rem;
        height: 35rem;
    }; 

    /* @media (min-width: 1023px){
        width: 35.5rem;
        max-width: 37rem;
        height: 43rem;
    }; */
`;

export const LoginFormGroup = styled(Form.Group)`   
    box-sizing: border-box;
`;

export const LoginFormInput = styled(Form.Control)`
    border: 1px solid #faebf4;
    border-radius: 8px;
    width: 20em;
    border: 0;
    outline: 0;
    box-shadow: rgba(0, 0, 0, 0.25);
    
    @media (min-width: 767px) {
            width: 25em;
            margin: 0 1rem;
            padding: 1.37rem 0.75rem;
            font-size: 1rem;
        }

    
`;

export const StyledButton = styled(Button)`
        z-index: 1;
        position: relative;
        border: none;
        border-radius: 6.3rem;
        width: 50%;
        font-size: 1.1rem;
        color: #000;
        background: linear-gradient(90deg, #00DAFF 0%, #C2F6FF 143.24%);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.30));
        margin: 0.3rem 0;
        
        &:hover {
            background-color: #ab4be0;
            color: #faebf4;
        }
        
        @media (min-width: 767px) {
            font-size: 1.5rem;
            margin: 1.1rem 0;
            width: 55%;
        }

        @media (min-width: 1023px) {
            font-size: 2.1rem;
            margin: 1rem 0;
            width: 60%;
        }
`;

export const ButtonStyledTransparent = styled(StyledButton)`
    color: #fff;
    border: 1px solid #fff;
    background: transparent;
`;

export const StyledErrorMessage = styled.div`
    color: #FF3333;
    padding-left: 0.5rem;
`;

export const SignUpLink = styled.div`
        margin: 1.1rem 0;
        text-align: center;
        font-size: 1rem;
    a {
        color: #fff;
    }
    &:hover {
        color: #000;
    }
    @media (min-width: 767px) {
        font-size: 1.5rem;
    }
    @media (min-width: 1023px) {
        font-size: 1.7rem;
    }

`;