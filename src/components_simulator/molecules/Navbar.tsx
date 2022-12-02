import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

import { IoMenuOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { openMenu, resetAllItems } from "redux/actions/appAction";
import { setupTemplate } from "json/setupTemplate";
import ResetIcon from "icons/ResetIcon";
import CloseIcon from "icons/CloseIcon";

const NavbarSt = styled.div`
  width: 100%;
  height: 15vw;
  background: black;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
  position: sticky;
  top: 0;

  .navBar-top {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .sysIconMenu {
      width: 10vw;
      height: 10vw;
      color: white;
      position: absolute;
      left: 3vw;
      cursor: pointer;
    }
    .page-name {
      position: absolute;
      left: 16vw;
      font-family: "Roboto 900";
      font-size: 6vw;
      color: white;
      text-decoration: none;
    }
    .button-system {
      margin-right: 4vw;
      background: #1a1a1b;
      color: #ffffff;
      border-radius: 1vw;
      width: 10vw;
      height: 10vw;
      padding: 1.5vw;
      cursor: pointer;
      /* &:hover {
      background-color: #121111;
      color: #ffffff;
    } */
    }
    .psu-calculator {
      margin-right: 2vw;
      background: #0d0d0d;
      border-radius: 1vw;
      height: 12vw;
      line-height: 12vw;
      padding: 0 3vw;
      cursor: pointer;
      font-family: "Roboto 900";
      color: #aeaeae;
      text-decoration: none;
      /* &:hover {
          background-color: #121111;
        } */
    }
  }
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    width: 100%;
    height: 4vw;
    background: black;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    position: sticky;
    top: 0;
    .navBar-top {
      justify-self: center;
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      position: relative;
      .sysIconMenu {
        width: 2.5vw;
        height: 2.5vw;
        color: white;
        position: absolute;
        left: 1vw;
        cursor: pointer;
      }
      .page-name {
        position: absolute;
        left: 4.5vw;
        font-family: "Roboto 900";
        font-size: 2vw;
        color: #ffffff;
        text-decoration: none;
      }
      .button-system {
        margin-right: 1.3vw;
        background: #0d0d0d;
        color: #bdbdbd;
        border-radius: 0.3vw;
        width: 3vw;
        height: 3vw;
        padding: 0.5vw;
        cursor: pointer;
        &:hover {
          background-color: #121111;
          /* color: #ffffff; */
        }
      }
      .psu-calculator {
        margin-right: 1.3vw;
        background: #0d0d0d;
        border-radius: 0.3vw;
        height: 3vw;
        line-height: 3vw;
        padding: 0 1vw;
        cursor: pointer;
        font-family: "Roboto 900";
        color: #aeaeae;
        font-size: 1vw;
        text-decoration: none;
        &:hover {
          background-color: #121111;
        }
      }
    }
  }
`;

const Navbar = () => {
  const location = useLocation();
  const dispatch = useDispatch<any>();
  const handleOpenMenu = () => {
    dispatch(openMenu("0"));
  };
  // !RESET ALL ITEMS
  const dispatchResetAllItems = () => {
    dispatch(resetAllItems(setupTemplate));
  };
  return (
    <NavbarSt>
      <div className="navBar-top">
        <IoMenuOutline className="sysIconMenu" onClick={handleOpenMenu} />
        <Link to="/" className="page-name">
          Pc Simulator
        </Link>
        {location.pathname.slice(0, 10) === "/simulator" && (
          <ResetIcon className="button-system" onClick={dispatchResetAllItems} />
        )}
      </div>
    </NavbarSt>
  );
};

export default Navbar;
