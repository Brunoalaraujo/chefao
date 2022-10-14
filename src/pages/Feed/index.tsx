import React from "react";
import Header from "../../components/Header";
import DashboardFeed from "../../components/DashboardFeed";
import BtnLink from "../../components/BtnLink";
import {Footer} from "../../components/Footer"

const Dashboard: React.FC = () => {
  return (
    <>
      <Header />
      <DashboardFeed />
      <Footer>
        <BtnLink redirect="/login">Cadastra </BtnLink>
        <BtnLink redirect="/login">Cadastra </BtnLink>
      </Footer>
    </>
  );
};

export default Dashboard;
