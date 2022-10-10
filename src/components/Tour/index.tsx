import React from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

import Onboarding4Web from "../../assets/images/Onboarding4Web.jpg";
import Onboarding5Web from "../../assets/images/Onboarding5Web.jpg";
import Onboarding6Web from "../../assets/images/Onboarding6Web.jpg";
import Onboarding7Web from "../../assets/images/Onboarding7Web.jpg";

import * as C from "./styles";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/sass/tour.css";

export default function Tour(): JSX.Element {
  return (
    <Carousel interval={null}>
      <C.Item>
        <img src={Onboarding4Web} alt="First slide" />
        <C.Caption>
          <h2>
            Comunidade de <span>apaixonados por figurinhas</span>
          </h2>
        </C.Caption>
      </C.Item>
      <C.Item>
        <img src={Onboarding5Web} alt="Second slide" />
        <C.Caption>
          <h2>
            <span>Complete seu álbum</span> com mais eficiência
          </h2>
          <p>Conecte-se com outros colecionadores, troque cromos e experiências</p>
        </C.Caption>
      </C.Item>
      <C.Item>
        <img src={Onboarding6Web} alt="Third slide" />
        <C.Caption>
          <h2>
            Faça <span>buscas personalizadas</span>
          </h2>
          <p>Refine a sua busca filtrando por cidade ou por palavras-chaves</p>
        </C.Caption>
      </C.Item>
      <C.Item>
        <img src={Onboarding7Web} alt="Third slide" />
        <C.Caption>
          <h2><span>Gerencie suas coleções</span></h2>
          <p>
            Acompanhe a evolução da sua coleção e receba relatórios de quais repetidas você tem para trocar com outros colecionadores.
          </p>
        </C.Caption>
      </C.Item>
    </Carousel>
  );
}
