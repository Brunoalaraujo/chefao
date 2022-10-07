import styled from "styled-components";
import { Button } from 'react-bootstrap';
import BgDesktop from "../../assets/images/BG-Desktop.png";

export const Container = styled.div`
    background-image: ${BgDesktop};
    display: flex;
    
`;

export const Logo = styled.img`
    background-color: #000;
`;

export const Title = styled.h1`
    width: 330px;
    height: 154px;
    left: 147px;
    top: 200px;
`;