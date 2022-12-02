import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Navbar from "../molecules/Navbar";
import Dashboard from "../organisms/Dashboard";
import CompareDashboard from "../molecules/CompareDashboard";
import Setup from "../organisms/Setup";
import { useNavigate } from "react-router-dom";
import Alerts from "../organisms/Alerts";
import { StoreInterface } from "interfaces/storeTemplate";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import insane1 from "img/insane1.webp";
const LeftSt = styled.div`
  display: grid;
  grid-template-columns: 100%;
  /* grid-template-rows: 30vw calc(100% - 31vw); */
  grid-template-rows: 15vw 15vw calc(100% - 30vw);

  /* gap: 1vw; */
  justify-content: center;
  align-content: center;
  background: rgb(0, 0, 0);
  position: relative;
  .insane1 {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* padding-bottom: .5vw; */
  }
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    display: grid;
    grid-template-columns: 100%;
    /* grid-template-rows: 8vw calc(100% - 8.5vw); */
    grid-template-rows: 4vw 4vw calc(100% - 8vw);

    /* gap: 0.5vw; */
    justify-content: center;
    align-content: center;
    background: rgb(0, 0, 0);
    position: relative;
    .insane1 {
      width: 100%;
      height: 100%;
      object-fit: contain;
      /* padding-bottom: .5vw; */
    }
  }
`;
const Left = () => {
  const [alertsModal, setAlertsModal] = useState(false);
  // !Set EDIT MODAL
  const handleAlertsModal = () => {
    setAlertsModal(false);
  };
  // !USEEFFECT
  useEffect(() => {
    window.addEventListener("popstate", handleAlertsModal);
    return () => {
      window.removeEventListener("popstate", handleAlertsModal);
    };
  }, [alertsModal]);

  return (
    <LeftSt>
      <Navbar />
      <Dashboard />
      <Setup />
      {/* <CompareDashboard /> */}
      {alertsModal && <Alerts />}
    </LeftSt>
  );
};

export default Left;
