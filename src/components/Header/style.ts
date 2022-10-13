import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const StyledNavbar = styled(Navbar)`
  height: 25vh;
  display: flex;
    flex-direction: column;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  background-color: #fff;
  box-shadow: 0px 8px 24px 0px #006d8026;
  a {
    margin-right: 0px;
  }
`;

