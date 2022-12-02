import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const NavBarPolicySt = styled.div`
  width: 100%;
  height: 15vw;
  background-color: #000000;
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .sysIconArrowBack {
    color: white;
    width: 10vw;
    height: 10vw;
    position: absolute;
    left: 1vw;
    cursor: pointer;
  }
  .navbar-policy-title {
    width: auto;
    height: 15vw;
    color: white;
    font-family: "Roboto 900";
    font-size: 5vw;
    line-height: 15vw;
    text-transform: uppercase;
    position: absolute;
    left: 12vw;
    padding: 0;

    // !Dots ...
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    width: 100%;
    height: 4vw;
    .sysIconArrowBack {
      width: 3vw;
      height: 3vw;
      left: 0.5vw;
    }
    .navbar-policy-title {
      width: auto;
      height: 4vw;
      line-height: 4vw;
      font-size: 2vw;
      left: 4vw;
    }
  }
`;
interface props {
  title: string;
}
const NavBarPolicy = (props: props) => {
  const navigate = useNavigate();
  return (
    <NavBarPolicySt>
      <IoChevronBackOutline className="sysIconArrowBack" onClick={() => navigate(`/simulator`)} />
      <p className="navbar-policy-title">{props.title}</p>
    </NavBarPolicySt>
  );
};

export default NavBarPolicy;
