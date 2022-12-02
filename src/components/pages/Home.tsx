// import Post from "layouts/Post";
// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import phone from "img/phone.jpg";
import Navbar from "components_simulator/molecules/Navbar";
// import post1 from "img/posts/post1.png";

const BannerSt = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  .text-container {
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .normal {
      font-family: "Roboto 100";
      font-size: 8vw;
      color: #ffffff;
      text-align: center;
    }
    .bold {
      font-family: "Roboto 900";
      font-size: 10vw;
      color: #5900ff;
      text-align: center;
    }
    .link {
      background: #5900ff;
      padding: 4vw 6vw;
      font-family: "Roboto 900";
      font-size: 6vw;
      color: white;
      text-decoration: none;
      margin-top: 4vw;
      border-radius: 1vw;
      :hover {
        background: #5100e8;
      }
    }
  }
  .phone-container {
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5vw;
    img {
      width: 50vw;
      height: 100vw;
      object-fit: contain;
      border-radius: 2vw;
      border: 1vw solid #19191b;
      background: black;
    }
  }

  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    width: 70vw;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 4vw;

    .text-container {
      width: 60vw;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      .normal {
        font-family: "Roboto 100";
        font-size: 3vw;
        color: #ffffff;
        text-align: start;
      }
      .bold {
        font-family: "Roboto 900";
        font-size: 5vw;
        color: #5900ff;
        text-align: start;
      }
      .link {
        background: #5900ff;
        padding: 1vw 1vw;
        font-family: "Roboto 900";
        font-size: 1.5vw;
        color: white;
        text-decoration: none;
        margin-top: 2vw;
        border-radius: 0.3vw;
        :hover {
          background: #5100e8;
        }
      }
    }
    .phone-container {
      width: 25vw;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0vw;

      img {
        width: 18vw;
        height: 34vw;
        object-fit: contain;
        border-radius: 1vw;
        border: 0.3vw solid #19191b;
        background: black;
      }
    }
  }
`;
const BodySt = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  font-family: "Roboto regular";
  word-wrap: break-word;
  margin: auto;

  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    width: 100%;
    height: auto;
    color: white;
    font-family: "Roboto regular";
  }
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <BodySt>
      <Navbar />
      <BannerSt>
        <div className="text-container">
          <div>
            <p className="bold">Bienvenido</p>
            <p className="normal">Elije componentes, arma tu PC.</p>

          </div>
          <Link className="link" to="/simulator">
            Simulador
          </Link>
        </div>
        <div className="phone-container" onClick={() => navigate("/simulator")}>
          <img src={phone} alt="creen shot setupps app" />
        </div>
      </BannerSt>
    </BodySt>
  );
};

export default Home;
