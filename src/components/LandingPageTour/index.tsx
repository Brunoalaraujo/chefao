import Onboarding3web from "../../assets/images/Onboarding3WebT.jpg";
import Onboarding3webMobile from "../../assets/images/Onboarding3Mobile.png";
import BtnCloseLink from "../BtnCloseLink";
import {
  Container,
  Aside,
  Title,
  StyledButton,
  SignupButton,
  Div,
} from "./styles";

export const LandingPageTour = () => {
  return (
    <Container>
      <picture>
        <source media="(max-width: 489px)" srcSet={Onboarding3webMobile} />
        <img src={Onboarding3web} />
      </picture>
      <Aside>
        <Title>Conheça as vantagens de colar com a gente</Title>
        <Div>
          <StyledButton>
            <a href="/tour">Iniciar Tour</a>
          </StyledButton>
          <SignupButton>
            <a href="/signup">Quero me cadastrar</a>
          </SignupButton>
          <BtnCloseLink redirect="/" class="closeBtn"/>
        </Div>
      </Aside>
    </Container>
  );
};
