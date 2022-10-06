import styled from "styled-components"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';



export const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
margin: 0;
padding: 0;
height: 100vh;
background-image: linear-gradient(to left bottom, #00adcc, #17b7d5, #25c1df, #30cbe8, #3ad5f2, #46dbf6, #50e0fb, #5ae6ff, #66e8ff, #71eaff, #7cebff, #85edff);

`

export const Container = styled.div`
align-items: center;
max-width: 700px;
    min-height: 500px;
    border-radius: 15px;

`

export const SignUpForm = styled(Form)`
color: #00ADCC;
display: flex;
justify-content: center;
align-items: center;
width: 30rem;

`
export const SignUpFormField = styled(Form.Control)`
    border: 1px solid #85EDFF;
    color: #00ADCC;
    border-radius: 15px;
    width: 15rem;
    padding: 7px;
    margin: 10px;
    background-color: #85EDFF;

`