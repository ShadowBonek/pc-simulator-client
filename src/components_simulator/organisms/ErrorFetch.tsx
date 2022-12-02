import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ErrorFetchSt = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: absolute;
  background: black;
  h1 {
    font-family: "Roboto 900", sans-serif;
    font-weight: 900;
    font-size: 4rem;
    text-align: center;
    /* margin-top: 6rem; */
  }
  h2 {
    font-family: "Roboto 500", sans-serif;
    font-weight: 900;
    font-size: 2rem;
    text-align: center;
  }
  span {
    font-family: "Roboto 100", sans-serif;
    font-weight: 900;
    font-size: 1rem;
    margin-top: 0.5rem;
    color: white;
    text-align: center;
  }
  .go-home {
    padding: 4vw 4vw;
    background: #5100ff;
    color: white;
    border-radius: 1vw;
    margin-top: 4vw;
    font-family: "Roboto 900";
    font-size: 4vw;
    text-decoration: none;
    cursor: pointer;
  }
  .btnSubmit {
    width: 15rem;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    text-decoration: none;
    font-family: "Roboto 900";
    font-size: 2rem;
    outline: none;
    border-style: none;
    border-radius: 0.3rem;
    cursor: pointer;
    background: #5100ff;
    color: white;
    transition: 0.1s;
    margin-top: 2rem;
    &:hover {
      background: white;
      color: #000000;
      transition: 0.1s;
    }
  }
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    h1 {
      font-size: 6rem;
    }
    h2 {
      font-size: 3rem;
    }
    span {
      font-size: 1.5rem;
    }
    .go-home {
      padding: 1vw 1vw;
      background: #5100ff;
      color: white;
      border-radius: 0.3vw;
      margin-top: 1vw;
      font-family: "Roboto 900";
      font-size: 1.5vw;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        background: #ffffff;
        color: #000000;
      }
    }
  }
`;
const ErrorFetch = () => {
  return (
    <ErrorFetchSt>
      <h1>Oops</h1>
      <h2>There was a problem</h2>
      {/* <span>The source requested could not be found!</span> */}
      <Link to="/" className="go-home">
        Go Home
      </Link>
    </ErrorFetchSt>
  );
};

export default ErrorFetch;
