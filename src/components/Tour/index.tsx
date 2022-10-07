import React from 'react'
import { Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";

import Onboarding4Web from "../../assets/images/Onboarding4Web.jpg"
import Onboarding5Web from "../../assets/images/Onboarding5Web.jpg"
import Onboarding6Web from "../../assets/images/Onboarding6Web.jpg"
import Onboarding7Web from "../../assets/images/Onboarding7Web.jpg"

import * as C from './styles'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Tour(): JSX.Element {
  return (
    <Carousel>
      <C.Item interval={2000}>
        <img
          src={Onboarding4Web}
          alt="First slide"
        />
        <C.Caption>
          <h2>Comunidade de <span>apaixonados por figurinhas</span></h2>
        </C.Caption>
      </C.Item>
      {/* <Carousel.Item interval={2000}>
        <img
          src={Onboarding5Web}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          src={Onboarding6Web}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          src={Onboarding7Web}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}


