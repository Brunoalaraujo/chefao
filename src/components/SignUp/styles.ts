import styled from "styled-components"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';



export const Wrapper = styled.div`
width: 100%;
align-items: center;
text-align: center;
margin: 0;
padding: 0;
height: 100vh;
 background: linear-gradient(360deg, #00ADCC,#00DAFF,#85EDFF);
`

export const Container = styled.div`
display: flex;
justify-content: center;
// text-align: center;
// align-items: center;
// max-width: 700px;
 //  min-height: 500px;
    border-radius: 15px;
`

export const SignUpForm = styled(Form)`
text-align: center;
align-items: center;
margin-top: 20px;
color: #008299;
// align-items: center;
//  width: 30rem;
font-family: 'Krub';


`
export const SignUpFormField = styled(Form.Control)`
    border: 0.1px solid #47E3FF;
    font-size: 13px;
    color:#008299;
    border-radius: 25px;
    width:  ${props =>  props.width ? `${props.width}px` : '400px'};
    font-family: 'Krub';
    padding: 16px;
    margin-top: 10px;
    margin-right: 10px;
    background:#64E5FB;
    &::placeholder {
       color:#008299;
        font-size: 14px;
        font-family: 'Krub';
        font-weight: 600;
    }
`

export const Title = styled.h1`
text-align: center;
align-items: center;
padding-top: 30px;
font-family: 'Krub';
font-style: normal;
font-weight: 600;
font-size: 32px;
color: #008299;
`
export const StyledAdd = styled.i`
  & {
    box-sizing: border-box;
    position: relative;
    display: block;
    width: 22px;
    height: 22px;
    border: 2px solid;
    transform: scale(var(--ggs, 1));
    border-radius: 22px;
  }
  &::after,
  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    position: absolute;
    width: 10px;
    height: 2px;
    background: currentColor;
    border-radius: 5px;
    top: 8px;
    left: 4px;
  }
  &::after {
    width: 2px;
    height: 10px;
    top: 4px;
    left: 8px;
  }
`


export const StyledArrow = styled.img`

`
export const SubmitButton = styled.button`
margin-top: 15px;
position: relative;
cursor: pointer;
background-color: transparent;
box-shadow: none;
border-color: transparent;
`