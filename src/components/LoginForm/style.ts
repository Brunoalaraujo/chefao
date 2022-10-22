import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';
import FundoLog from '../../assets/images/loginInc.jpg';



export const Container1 = styled.body`
    background: url(${FundoLog});
    background-size: contain;

    display: flex;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    img {
        left: 1rem;
        height: 19vh;
        width: 60vw;
        align-self: center;
        padding: 1rem;
    };

    h1 {
        color: #faebf4;
        text-align: center;
        margin: 50px 0;
        font-family: 'Krub';
    };
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const LoginForm = styled(Form)`
    
    box-sizing: border-box;
    display: flex;
    flex-flow: nowrap column;
    -webkit-box-pack: center;
    justify-content: space-evenly;
    -webkit-box-align: center;
    align-items: center;
    margin: 0 1rem;

    color: #000;
    width: 22.5rem;
    max-width: 23rem;
    height: 26rem;

    border-radius: 0.8rem;
    background: rgba(225,225,225,0.25);
    box-shadow: 8px 4px 16px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(12.5px);
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

    padding: 12px 16px;
    box-shadow: rgba(0, 0, 0, 0.25);
`;

export const StyledButton = styled(Button)`
        z-index: 1;
        position: relative;
        border: none;
        border-radius: 6.3rem;
        width: 50%;
        font-size: 1rem;
        color: #000;
        background: linear-gradient(90deg, #00DAFF 0%, #C2F6FF 143.24%);
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.30));
        
        &:hover {
            color: #ab4be0;
        }
`;

export const ButtonStyledTransparent = styled(StyledButton)`
    color: #fff;
    border: 1px solid #fff;
    background: transparent;
    bottom: 15px;

    &:hover {
            background-color: #ab4be0;
            color: #faebf4;
        }
`;

export const StyledErrorMessage = styled.div`
    color: #FF3333;
    padding-left: 0.5rem;
`;

