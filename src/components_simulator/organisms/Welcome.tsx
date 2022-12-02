import React from "react";
import styled from "styled-components";
// *Images
import pcmaster from "img/pcmaster.png";
import NavBarPolicy from "../atoms/NavBarPolicy";
import axios from "axios";
const WelcomeSt = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  .flex-container {
    width: 100%;
    height: calc(100% - 15vw);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    .pcMaster {
      width: 80vw;
      height: 80vw;
      object-fit: cover;
    }
    .title-welcome {
      font-family: "Roboto 900";
      font-size: 10vw;
      color: white;
    }
    .subtitle-welcome {
      font-family: "Roboto 100";
      font-size: 8vw;
      color: white;
    }
  }

  @media only screen and (min-width: 568px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
    .flex-container {
      width: 100%;
      height: calc(100% - 4vw);
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      .pcMaster {
        width: 30vw;
        height: 30vw;
        object-fit: cover;
      }
      .title-welcome {
        font-family: "Roboto 900";
        font-size: 3vw;
        color: white;
      }
      .subtitle-welcome {
        font-family: "Roboto 100";
        font-size: 2vw;
        color: white;
      }
    }
  }
`;
const Welcome = () => {
  return (
    <WelcomeSt>
      <NavBarPolicy title="" />
      <div className="flex-container">
        <img className="pcMaster" src={pcmaster} alt="" />
        <h1 className="title-welcome">PC SIMULATOR</h1>
        <h2 className="subtitle-welcome">Click en un componente!</h2>
      </div>
    </WelcomeSt>
  );
};

export default Welcome;
