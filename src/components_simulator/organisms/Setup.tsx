import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Item from "../molecules/Item";
import { setupTemplate } from "json/setupTemplate";
import { StoreInterface } from "interfaces/storeTemplate";
import { useSelector } from "react-redux";
const SetupSt = styled.div`
  justify-self: center;
  display: grid;
  grid-template-columns: repeat(3, 32vw);
  grid-auto-rows: 32vw;
  gap: 1vw;
  justify-content: center;
  align-content: flex-start;
  overflow-y: scroll;
  /* padding-top: 3vw; */
  padding-bottom: 0vw;
  /* padding-right: 0.5vw; */
  margin-top: 3vw;
  .total-price-bottom {
    font-family: "Roboto 300";
    font-size: 3vw;
    color: #5f5f5f;
    width: auto;
    height: auto;
    position: absolute;
    bottom: 2vw;
    right: 2vw;
  }
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    justify-self: center;
    display: grid;
    grid-template-columns: 10.5vw 10.5vw 10.5vw;
    grid-auto-rows: 10.5vw;
    gap: 0.2rem;
    justify-content: center;
    align-content: flex-start;
    overflow-y: scroll;
    padding-top: 0vw;
    padding-bottom: 1.5vw;
    padding-right: 0.5vw;
    /* background: red; */
    margin-top: 1vw;
    .total-price-bottom {
      font-family: "Roboto 300";
      font-size: 1vw;
      color: #5f5f5f;
      width: auto;
      height: auto;
      position: absolute;
      bottom: 1vw;
      right: 1vw;
    }
  }
`;
const Setup = () => {
  const app = useSelector((store: StoreInterface) => store.app);
  const [state, setState] = useState(setupTemplate);
  //   console.log(state);

  //! CPU Alerts
  if (state.cpu.socket !== state.mobo.socket && state.cpu.socket !== "" && state.mobo.socket !== "") {
    state.cpu.error = "incompatible";
    state.cpu.warning = "El socket puede no ser compatible con la placa madre";
  } else {
    state.cpu.error = "";
    state.cpu.warning = "";
  }

  if (state.cpu.model !== "cpu") {
    if (state.cpu.stock_cooler.toLowerCase() === "no" && state.cooler.model === "cooler") {
      state.cooler.error = "incompatible";
      state.cooler.warning = `Cooler requerido`;
    } else {
      state.cooler.error = "";
      state.cooler.warning = ``;
    }
  } else {
    state.cooler.error = "";
    state.cooler.warning = ``;
  }

  //! MOBO Alerts
  if (state.mobo.socket !== state.cpu.socket && state.mobo.socket !== "" && state.cpu.socket !== "") {
    state.mobo.error = "incompatible";
    state.mobo.warning = "El socket puede no ser compatible con la CPU";
  } else {
    state.mobo.error = "";
  }
  //   //! RAM Alerts
  if (state.ram.ram_type !== state.mobo.ram_type && state.mobo.ram_type !== "" && state.ram.ram_type !== "") {
    state.ram.error = "incompatible";
    state.ram.warning = `Ram: ${state.ram.ram_type}
       MotherBoard: ${state.mobo.ram_type}`;
  } else {
    state.ram.error = "";
  }
  //! GPU Alerts
  if (
    state.cpu.integrated_graphics.toLowerCase() === "no" &&
    state.cpu.integrated_graphics !== "" &&
    state.gpu.model === "gpu"
  ) {
    state.gpu.error = "incompatible";
    state.gpu.warning = `Tarjeta gráfica discreta requerida`;
  } else {
    state.gpu.error = "";
  }
  //! POWER Alerts
  const psuFunction = (number: number) => {
    switch (true) {
      case number >= 0 && number <= 450:
        return 450;
      case number >= 450 && number <= 500:
        return 500;
      case number >= 500 && number <= 550:
        return 550;
      case number >= 550 && number <= 600:
        return 600;
      case number >= 600 && number <= 650:
        return 650;
      case number >= 650 && number <= 700:
        return 700;
      case number >= 700 && number <= 750:
        return 750;
      case number >= 750 && number <= 800:
        return 800;
      case number >= 800 && number <= 850:
        return 850;
      case number >= 850 && number <= 1000:
        return 1000;
      case number >= 1000 && number <= 1200:
        return 1200;
      case number >= 1200 && number <= 1600:
        return 1600;
      default:
        return 2000;
    }
  };
  const totalPower = Object.keys(app.setup)
    .map((i: any) => {
      return app.setup[i].power * app.setup[i].quantity;
    })
    .reduce(function (sum: any, number: any) {
      const updatedSum = sum + number;
      return updatedSum;
    }, 0);

  if (state.power.wattage < parseInt(totalPower) + 75 && state.power.wattage !== "") {
    state.power.error = "incompatible";
    state.power.warning = `PSU recomendado: ${
      psuFunction(totalPower + 75) > 1600 ? "1600+" : psuFunction(totalPower + 75)
    } W
     `;
  } else {
    state.power.error = "";
  }
  //! CASE Alerts
  if (state.case.length - 100 < state.gpu.length && state.case.length !== 0) {
    state.case.error = "incompatible";
    state.case.warning = `Es posible que la tarjeta de video no quepa en el case.`;
  } else {
    state.case.error = "";
  }
  //! COOLER Alerts
    const parseSocket = (socket: string, manufacturer: string) => {
      switch (true) {
        case manufacturer.toLocaleLowerCase() === "intel":
          return socket.replace(/[^\d.-]/g, "");
        case manufacturer.toLocaleLowerCase() === "amd":
          return socket;
        default:
          return socket;
      }
    };
    if (
      state.cooler.model !== "cooler" &&
      !state.cooler.compatibility.includes(parseSocket(state.cpu.socket, state.cpu.manufacturer))
    ) {
      state.cooler.error = "incompatible";
      state.cooler.warning = `Tal vez el cooler no sea compatible`;
    }

  // !USE EFFECT
  useEffect(() => {
    setState(app.setup);
  }, [app]);

  return (
    <SetupSt>
      {state &&
        Object.keys(state).map((i: any) => (
          <Item
            key={state[i].model}
            uri={`component/${state[i].type}`}
            type={state[i].type}
            manufacturer={state[i].manufacturer}
            model={state[i].model}
            summary={""}
            //     summary={
            //       i === "power" && state[i].model !== i
            //         ? `${state[i].wattage}W • ${state[i].efficiency_rating} • ${state[i].form_factor}`
            //         : i === "case" && state[i].model !== i
            //         ? `${state[i].form_factor} • (PSU ${state[i].PSU.toUpperCase()})`
            //         : i === "cpu" && state[i].model !== i
            //         ? `C${state[i].total_cores} • T${state[i].total_threads} • ${state[i].boost_clock}Ghz`
            //         : i === "mobo" && state[i].model !== i
            //         ? `${state[i].platform} • ${state[i].ram_type} • ${state[i].memory_speed_max}MHz`
            //         : i === "ram" && state[i].model !== i
            //         ? `${state[i].memory_size} • ${state[i].ram_type} • ${state[i].speed}MHz`
            //         : i === "gpu" && state[i].model !== i
            //         ? `${state[i].memory} • ${state[i].memory_type} • ${state[i].benchmark}`
            //         : i === "nvme" && state[i].model !== i
            //         ? `${state[i].capacity} • ${state[i].read}MB/s • ${state[i].write}MB/s`
            //         : i === "ssd" && state[i].model !== i
            //         ? `${state[i].capacity} • ${state[i].read}MB/s • ${state[i].write}MB/s`
            //         : i === "hdd" && state[i].model !== i
            //         ? `${state[i].capacity} • ${state[i].rpm}RPM • ${state[i].cache}`
            //         : i === "cooler" && state[i].model !== i
            //         ? `${state[i].noise_level} • ${state[i].fans_size}mm`
            //         : ""
            //     }
            price={state[i].price}
            img={state[i].imageS}
            quantity={state[i].quantity}
            error={state[i].error}
            warning={state[i].warning}
          />
        ))}
    </SetupSt>
  );
};

export default Setup;
