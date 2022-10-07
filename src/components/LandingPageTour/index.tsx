
import Onboarding3web from "../../assets/images/Onboarding3WebT.jpg";
import Onboarding3webMobile from "../../assets/images/Onboarding3Mobile.png";
import { Container, Aside, Title, StyledButton, SignupButton, SignUpLink  } from './styles'

export const LandingPageTour = () => {
    return(
        <Container>
            <picture>
                <source media="(max-width: 489px)" srcSet={ Onboarding3webMobile } />
                <img src={Onboarding3web} />
            </picture>
            <Aside>
                <Title>Conheça as vantagens de colar com a gente</Title>

                <StyledButton >
                    <a href='/tour'>Iniciar Tour</a>
                </StyledButton>

                <SignupButton>
                    <a href='/signup'>Quero me cadastrar</a>
                </SignupButton>
                
                <SignUpLink>
                    <a href='/'>Retornar para o Feed</a>
                </SignUpLink>
            </Aside>            
        </Container>
    )
}