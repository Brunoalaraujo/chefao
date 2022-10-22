import React from "react";
import Header from "../../components/Header";
import DashboardFeed from "../../components/DashboardFeed";
import BtnLink from "../../components/BtnLink";
import { Footer } from "../../components/Footer";

import "./styles.scss";


const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <DashboardFeed />
      
      <Footer>
        <BtnLink class="btnCadastro" redirect="/landingpage">
          Quero me Cadastrar
        </BtnLink>
        <BtnLink class="btnLogin" redirect="/login">
          Login
        </BtnLink>
      </Footer>
    </>
  );
};

export default Dashboard;
