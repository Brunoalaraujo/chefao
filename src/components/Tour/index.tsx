import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";

import Onboarding4Web from "../../assets/images/Onboarding4Web.jpg"
import Onboarding5Web from "../../assets/images/Onboarding5Web.jpg"
import Onboarding6Web from "../../assets/images/Onboarding6Web.jpg"
import Onboarding7Web from "../../assets/images/Onboarding7Web.jpg"


import './styles'

export default function Tour() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Onboarding4Web}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Onboarding5Web}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
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
    </Carousel>
  );
}


