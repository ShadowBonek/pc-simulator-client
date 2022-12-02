import { StoreInterface } from "interfaces/storeTemplate";
import React from "react";
import { useDispatch } from "react-redux";
import { openMenu } from "redux/actions/appAction";
import styled from "styled-components";
import CloseIcon from "icons/CloseIcon";
import logo from "img/logo.png";
import { Link } from "react-router-dom";

import HomeIcon from "icons/HomeIcon";
import SimulatorIcon from "icons/SimulatorIcon";
import AdminIcon from "icons/AdminIcon";
// import AboutIcon from "icons/AboutIcon";
// import WarningCircleIcon from "icons/WarningCircleIcon";
// import WarningHexIcon from "icons/WarningHexIcon";
// import WarningTriangleIcon from "icons/WarningTriangleIcon";
// import DisclosureIcon from "icons/DisclosureIcon";
const MenuSt = styled.nav`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  transition: 0.3s;
  .close-menu {
    width: 100%;
    height: 100%;
    background: #1e1e1ee3;
  }
  .menu-content {
    width: 80vw;
    height: 100%;
    background: #000000;
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    animation: menuContent 0.1s ease-out;
    /* @keyframes menuContent {
      0% {
        left: -22vw;
      }
      100% {
        left: 0vw;
      }
    } */
    .logo {
      width: 25vw;
      height: 25vw;
      margin-top: 10vw;
    }
    .h2-menu {
      font-family: "Roboto 900";
      font-size: 6vw;
      color: white;
      margin-top: 5vw;
    }
    .menu-items {
      width: 80%;
      height: auto;
      margin-top: 5vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding-top: 5vw;
      padding-bottom: 5vw;

      .item {
        width: 100%;
        height: 12vw;
        font-family: "Roboto 300";
        font-size: 4vw;
        color: #757575;
        cursor: pointer;
        text-decoration: none;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 1vw;

        &:hover {
          background: #101010;
          color: #ffffff;
        }
        .sysIconMenuItem {
          width: 8vw;
          height: 8vw;
          margin-right: 2vw;
        }
      }
    }
  }
  .sysIconClose {
    width: 12vw;
    height: 12vw;
    background: white;
    border-radius: 100%;
    padding: 2vw;
    position: absolute;
    left: 84vw;
    top: 6vw;
    cursor: pointer;
    &:hover {
      background: #f0f0f0;
    }
  }
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
    display: flex;
    transition: 0.3s;
    .close-menu {
      width: 100%;
      height: 100%;
      background: #0f0f0fef;
    }
    .menu-content {
      width: 22vw;
      height: 100%;
      background: #000000;
      position: absolute;
      left: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;

      animation: menuContent 0.1s ease-out;
      /* @keyframes menuContent {
        0% {
          left: -22vw;
        }
        100% {
          left: 0vw;
        }
      } */
      .logo {
        width: 8vw;
        height: 8vw;
        margin-top: 3vw;
      }
      .h2-menu {
        font-family: "Roboto 900";
        font-size: 2vw;
        color: white;
        margin-top: 1vw;
      }
      .menu-items {
        width: 80%;
        height: auto;
        margin-top: 1vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding-top: 1vw;
        padding-bottom: 1vw;
        .item {
          width: 100%;
          height: 3vw;
          font-family: "Roboto 300";
          font-size: 1vw;
          color: #949494;
          cursor: pointer;
          text-decoration: none;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          padding: 0 1vw;

          &:hover {
            background: #101010;
            color: #ffffff;
          }
          .sysIconMenuItem {
            width: 2vw;
            height: 2vw;
            margin-right: 0.5vw;
          }
        }
      }
    }
    .sysIconClose {
      width: 3vw;
      height: 3vw;
      background: white;
      border-radius: 100%;
      padding: 0.5vw;
      position: absolute;
      left: 23vw;
      top: 2vw;
      cursor: pointer;
      &:hover {
        background: #f0f0f0;
      }
    }
  }
`;
interface props {
  left: string;
}
const Menu = (props: props) => {
  const dispatch = useDispatch<any>();

  const handleCloseMenu = () => {
    dispatch(openMenu("-100vw"));
  };
  return (
    <MenuSt className="menu-modal" style={{ left: props.left }}>
      <div className="close-menu" onClick={handleCloseMenu}></div>
      <div className="menu-content">
        <img className="logo" src={logo} alt="" />
        <h2 className="h2-menu">Pc Simulator</h2>
        <div className="menu-items">
          <Link className="item" to="/" onClick={handleCloseMenu}>
            <HomeIcon className="sysIconMenuItem" />
            Home
          </Link>
          <Link className="item" to="/simulator" onClick={handleCloseMenu}>
            <SimulatorIcon className="sysIconMenuItem" />
            Simulator
          </Link>
          {/* <Link className="item" to="/admin/components/cpu?page=1&search=&available=&manufacturer=" onClick={handleCloseMenu}> */}
          {/* <Link
            className="item"
            to="/login"
            onClick={handleCloseMenu}
          >
            <AdminIcon className="sysIconMenuItem" />
            Admin
          </Link> */}
        </div>
      </div>
      <CloseIcon className="sysIconClose" onClick={handleCloseMenu} />
    </MenuSt>
  );
};

export default Menu;
