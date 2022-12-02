import { StoreInterface } from "interfaces/storeTemplate";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const AlertsSt = styled.div`
  // !Estilos para Desktop
  width: 100%;
  height: 100%;
  background: #000000;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Roboto 900";
  color: white;
  font-size: 4vw;
  @media only screen and (min-width: 568px) {
    width: 100%;
    height: 100%;
    background: #000000;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-family: "Roboto 900";
    color: white;
    font-size: 1.5rem;
    padding-top: 2vw;
    .sysIconcloseAlerts {
      width: 3vw;
      height: 3vw;
      background: #ffffff;
      border-radius: 100%;
      color: black;
      padding: 0.5vw;
      position: absolute;
      right: 1vw;
      top: 1vw;
      cursor: pointer;
    }
    .alerts-title {
      width: 90%;
      font-family: "Roboto 900";
      font-size: 2vw;
      margin-bottom: 0.5vw;
      padding: 0.5vw;
    }
    .warning-container {
      width: 90%;
      height: 4vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #0f0f0f;
      margin-bottom: 0.5vw;
      border-radius: 0.3vw;
      .label {
        width: 100%;
        font-family: "Roboto regular";
        font-size: 1vw;
        padding: 0 0.5vw;
        color: #afafaf;
      }
      .warning {
        width: 100%;
        font-family: "Roboto 300";
        font-size: 1vw;
        line-height: 1.5;
        color: red;
        padding: 0 0.5vw;
        /* background: red; */
      }
    }
  }
`;
const Alerts = () => {
  const navigate = useNavigate();
  const app = useSelector((store: StoreInterface) => store.app);

  const alerts = {
    cpu: "",
    mobo: "",
  };

  //! Cpu Alerts
  app.setup.cpu.socket !== app.setup.mobo.socket &&
  app.setup.cpu.socket !== "" &&
  app.setup.mobo.socket !== ""
    ? (alerts.cpu = "Socket is not compatible with the motherboard")
    : (alerts.cpu = "Ok");
  //! Mobo Alerts
  app.setup.mobo.socket !== app.setup.cpu.socket &&
  app.setup.mobo.socket !== "" &&
  app.setup.cpu.socket !== ""
    ? (alerts.mobo = "Socket is not compatible with the Cpu")
    : (alerts.mobo = "Ok");

  console.log(alerts);
  return (
    <AlertsSt>
      <IoClose className="sysIconcloseAlerts" onClick={() => navigate(-1)} />
      <p className="alerts-title">Alerts</p>
      <div className="warning-container">
        <div className="label">Cpu:</div>
        <div className="warning" style={alerts.cpu === "Ok" ? { color: "lime" } : { color: "red" }}>
          {alerts.cpu}
        </div>
      </div>
      <div className="warning-container">
        <div className="label">Mobo:</div>
        <div className="warning" style={alerts.cpu === "Ok" ? { color: "lime" } : { color: "red" }}>
          {alerts.mobo}
        </div>
      </div>
    </AlertsSt>
  );
};

export default Alerts;
