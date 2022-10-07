import styled from "styled-components";
import  Carousel from "react-bootstrap/Carousel";


export const Item = styled(Carousel.Item)`
  display: flex;
  img {
    height: 100vh;
    width: 50vw;
  }
`;

export const Caption = styled(Carousel.Caption)`
  width: 25%;
  top: 40%;
  left: 63%;
  color: #595959;
  text-align: start;
  h2{
    font-weight: 400;
    font-size: 2.5rem;
    span {
      font-weight: 700;
      color: #A520AC;
    }

  }
`;

