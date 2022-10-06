import React from "react";

import * as LG from './styles';

const DashboardViews: React.FC = () => {
    return (
        <LG.Container>
            <LG.Title>FEED</LG.Title>
            <LG.StyledButton >
                <a href='/tour'>Iniciar Tour</a>
            </LG.StyledButton>
        </LG.Container>
    );
};

export default DashboardViews