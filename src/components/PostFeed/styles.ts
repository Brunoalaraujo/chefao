import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';

 /*export const Container = styled.div`
    display: flex;
    flex-flow: nowrap row;
    width: 100%;
    max-width: 700px;
    background-color: #FFF;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    border: 1px solid #ccc;
    
    img {
        margin: 1.5rem 1rem;
        align-self: flex-start;
    }
    @media (min-width: 460px) {
            
        img {
            margin: 0 1rem;
            padding: 1.4rem 1rem;
        }
    }
`*/ 

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

export const CommentForm = styled(Form)`
    display: flex;
    flex-flow: nowrap column;
    flex: 1;
    padding-right: 2rem;
    border-color: #ccc;
`

export const TextArea = styled(Form.Control)`
    border-color: #ccc;
    border-radius: 10px;
    resize: none;
    margin-top: 1rem;
    &:focus {
        border-color: #ccc; 
    }
`

export const PostButton = styled(Button)`
    background-color: #CF2CD9;
    border: none;
    border-radius: 30px;
    margin: 1rem 0 2rem 0;
    @media (min-width: 450px) {
        width: 160px;
        padding: 0 2rem;
        justify-self: flex-end;
        align-self: flex-end;
    }
`