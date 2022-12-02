import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AdditionIcon from "icons/AdditionIcon";

const ButtonCreateSt = styled(Link)`
  position: absolute;
  bottom: 10vw;
  width: 12vw;
  height: 12vw;

  background: #6200ff;
  justify-self: center;
  border-radius: 2.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  .sysIcon {
    width: 14vw;
    height: 14vw;
  }
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    position: absolute;
    bottom: 2vw;
    width: 3vw;
    height: 3vw;

    background: #6200ff;

    justify-self: center;
    border-radius: 0.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    &:hover {
      background: #0000007e;
      border: 2px solid "#5600e0";
      color: #ffffff86;
    }
    .sysIcon {
      width: 4vw;
      height: 4vw;
    }
  }
`;
interface props {
  link: string;
}
export default function ButtonCreate(props: props) {
  return (
    <ButtonCreateSt to={props.link}>
      <AdditionIcon className="sysIcon" />
    </ButtonCreateSt>
  );
}
