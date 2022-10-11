import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";

export const Item = styled(Carousel.Item)`
  display: none;
  img {
    height: 100vh;
    width: 50vw;
  }

  @media screen and (max-width: 769px) {
    display: none;
    flex-direction: column;

    img {
      height: 40vh;
      width: 65vw;
      margin: 5rem 8rem;
      border-radius: 30px;
    }
  }

  @media screen and (max-width: 426px) {
    img {
      margin: 2rem 5rem;
    }
  }

  @media screen and (max-width: 376px) {
    img{
      margin: 2rem 4.2rem;
    }
  }

  @media screen and (max-width: 321px) {
    img {
      margin: 2rem 3.5rem;
    }
  }
`;

export const Caption = styled(Carousel.Caption)`
  width: 25%;
  top: 40%;
  left: 63%;
  color: #595959;
  text-align: start;

  img {
    top: 11%;
    right: 25%;
    position: fixed;
    width: 30px;
    height: 30px;
  }

  h2 {
    font-weight: 400;
    font-size: 2.5rem;
    span {
      font-weight: 700;
      color: #a520ac;
    }
  }

  @media screen and (max-width: 769px) {
    position: relative;
    top: 60%;
    left: 24%;
    width: 55%;
    text-align: center;

    a {
      img {
        top: 0vh;
        right: 31vw;
      }
    }

    h2 {
      font-weight: 500;
      font-size: 3rem;
      span {
        font-weight: 700;
        color: #a520ac;
      }
    }

    p {
      margin-top: 2rem;
      line-height: 1.5rem;
      font-size: 1.5rem;
    }
  }

  @media screen and (max-width: 426px) {
    left: 16%;

    a {
      img {
        right: 27vw;
      }
    }

    h2 {
      width: 300px;
      font-size: 2.5rem;
    }

    p {
      padding-left: 20%;
      font-size: 1.2rem;
      width: 250px;
    }
  }

  @media screen and (max-width: 378px) {
    h2{
      width: 270px;
      font-size: 2.3rem;
    }

    p{
      padding-left: 10%;
    }
  }

  @media screen and (max-width: 321px) {
    h2 {
      width: 230px;
      font-size: 2rem;
    }

    p{
      padding-left: 5%;
      width: 230px;
    }
  }
`;
