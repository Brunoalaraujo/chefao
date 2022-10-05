import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { RootStore } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from '../../store/users';

import nvLogo from '../../assets/Logo_Colaí_M.jpg';
import nvLogoMobile from '../../assets/Logo_Colaí_M.jpg';

import * as colaiNav from './style';



const NavbarColai = () => {
    const dispatch = useDispatch();
    const userLogout = () => {
        dispatch(logOut());
    };
    const user = useSelector((store: RootStore) => store.usersSlice);

    return (
        <colaiNav.StyledNavbar bg="primary">
            <Container>
                <Navbar.Brand href="#home">
                    <picture>
                        <source media="(min-width: 465px)" srcSet={nvLogo} />
                        <img src={nvLogoMobile} style={{ width: "15%" }} />
                    </picture>
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <colaiNav.StyledNavbarText>
                        <colaiNav.StyledLink onClick={userLogout} href="/">sair
                        </colaiNav.StyledLink>
                        <colaiNav.StyledLink onClick={userLogout} href="/feed">Dashboard
                        </colaiNav.StyledLink>

                    </colaiNav.StyledNavbarText>
                </Navbar.Collapse>
            </Container>
        </colaiNav.StyledNavbar>
    );
};

export default NavbarColai;

