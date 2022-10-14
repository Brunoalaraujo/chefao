import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { RootStore } from "../../store";
import { useSelector, useDispatch } from "react-redux";
import  Avatar from 'react-avatar';

import logoformatada from "../../assets/images/logoformatada.png";
import addphoto from "../../assets/images/addphoto.png"

import * as colaiNav from "./style";

const NavbarColai = () => {
 
  const user = useSelector((store: RootStore) => store.userReduce);

  return (
    <colaiNav.StyledNavbar>
      <Navbar.Brand href="/feed">
        <img className="pt-5 h-75" src={logoformatada} alt="" />
      </Navbar.Brand>
      <Avatar className="mt-2" src={addphoto} />
    </colaiNav.StyledNavbar>
  );
};

export default NavbarColai;
