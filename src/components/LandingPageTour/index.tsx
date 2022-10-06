import React from 'react';


import Onboarding3web from "../../assets/images/Onboarding3WebT.jpg";
import Onboarding3webMobile from "../../assets/images/Onboarding3Mobile.png";
import * as LG from './styles'

export const LandingPageTour = () => {
    return(
        <LG.Container>
            <picture>
                <source media="(max-width: 489px)" srcSet={ Onboarding3webMobile } />
                <img src={Onboarding3web} />
            </picture>
            <LG.Aside>
                <LG.Title>Conheça as vantagens de colar com a gente</LG.Title>

                <LG.StyledButton >
                    <a href='/tour'>Iniciar Tour</a>
                </LG.StyledButton>

                <LG.SignupButton>
                    <a href='/signup'>Quero me cadastrar</a>
                </LG.SignupButton>
                
                <LG.SignUpLink>
                    <a href='/'>Retornar para o Feed</a>
                </LG.SignUpLink>
            </LG.Aside>            
        </LG.Container>
    )
}