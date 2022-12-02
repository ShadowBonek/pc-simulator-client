import Error404 from "components_admin/pages/Error404";
import { Route, Routes, useLocation } from "react-router-dom";
import styled from "styled-components";
import Welcome from "./organisms/Welcome";
import Product from "./organisms/Product";
import Profile from "./organisms/Profile";
import Left from "./pages/Left";
import Compare from "./organisms/Compare";
import { StoreInterface } from "interfaces/storeTemplate";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import CompareDashboard from "./molecules/CompareDashboard";
// !Components
import Cpu from "./organisms/componentSelected/Cpu";
import Mobo from "./organisms/componentSelected/Mobo";
import Ram from "./organisms/componentSelected/Ram";
import Gpu from "./organisms/componentSelected/Gpu";
import Power from "./organisms/componentSelected/Power";
import Case from "./organisms/componentSelected/Case";
import Nvme from "./organisms/componentSelected/Nvme";
import Ssd from "./organisms/componentSelected/Ssd";
import Hdd from "./organisms/componentSelected/Hdd";
import Cooler from "./organisms/componentSelected/Cooler";
import Fan from "./organisms/componentSelected/Fan";
const SimulatorSt = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 100vw;
  grid-template-rows: 100%;
  justify-content: center;
  align-content: center;
  position: relative;
  overflow: hidden;
  position: relative;
  background: rgb(0, 0, 0);
  background: linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(5, 5, 5, 1) 100%);
  .right {
    width: 100%;
    height: 100%;
    display: none;
    background: #000000;
    position: absolute;
  }
  .compare-counter {
    position: absolute;
    top: calc(50vh - 15vw);
    width: 15vw;
    height: 30vw;
    background-color: #ff0040;
    border-radius: 0 2vw 2vw 0;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 15vw 15vw;
    z-index: 9;
    font-family: "Roboto 900";
    color: white;
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    animation: compareCounter 0.1s linear;
    @keyframes compareCounter {
      0% {
        left: -15vw;
      }
      100% {
        left: 0vw;
      }
    }
    .counter-img {
      width: 14vw;
      height: 14vw;
      object-fit: contain;
      justify-self: center;
      align-self: center;
      animation: imgCounter 0.1s linear;
      @keyframes imgCounter {
        0% {
          margin-left: -15vw;
        }
        100% {
          margin-left: 0vw;
        }
      }
    }
  }
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 33.5vw calc(66.5vw - 0.0625rem);
    grid-template-rows: 100%;
    gap: 0.0625rem;
    justify-content: center;
    align-content: center;
    position: relative;
    overflow: hidden;
    background: #131212;
    background: #000000;

    .default {
      background: red;
    }
    .right {
      display: flex;
      position: relative;
      background: none;
      width: 100%;
      height: 100%;
      border-left: 0.1vw solid #222122;
    }
  }
`;

const Simulator = () => {
  const dashboardRef = useRef<any>(null);
  const location = useLocation();
  const app = useSelector((store: StoreInterface) => store.app);
  const [compareModal, setCompareModal] = useState(false);

  return (
    <SimulatorSt>
      <Left />

      <div
        className="right"
        style={
          location.pathname === "/simulator" && window.innerWidth < 568 ? { display: "none" } : { display: "flex" }
        }
      >
        <Routes>
          <Route path="/*" element={<Welcome />} />

          <Route path="/component/cpu" element={<Cpu />}>
            <Route path="details" element={<Product />} />
          </Route>

          <Route path="/component/mobo" element={<Mobo />}>
            <Route path="details" element={<Product />} />
          </Route>

          <Route path="/component/ram" element={<Ram />}>
            <Route path="details" element={<Product />} />
          </Route>

          <Route path="/component/cooler" element={<Cooler />}>
            <Route path="details" element={<Product />} />
          </Route>

          <Route path="/component/gpu" element={<Gpu />}>
            <Route path="details" element={<Product />} />
          </Route>

          <Route path="/component/power" element={<Power />}>
            <Route path="details" element={<Product />} />
          </Route>

          <Route path="/component/case" element={<Case />}>
            <Route path="details" element={<Product />} />
          </Route>

          <Route path="/component/nvme" element={<Nvme />}>
            <Route path="details" element={<Product />} />
          </Route>

          <Route path="/component/ssd" element={<Ssd />}>
            <Route path="details" element={<Product />} />
          </Route>

          <Route path="/component/hdd" element={<Hdd />}>
            <Route path="details" element={<Product />} />
          </Route>

          <Route path="/component/fan" element={<Fan />}>
            <Route path="details" element={<Product />} />
          </Route>

          <Route path="/profile" element={<Profile />} />

          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/tos" element={<Tos />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/disclosure" element={<Disclosure />} /> */}
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </div>

      {app.compare.length > 0 && <CompareDashboard setCompareModal={setCompareModal} dashboardRef={dashboardRef} />}

      {compareModal && <Compare setCompareModal={setCompareModal} />}
    </SimulatorSt>
  );
};

export default Simulator;
