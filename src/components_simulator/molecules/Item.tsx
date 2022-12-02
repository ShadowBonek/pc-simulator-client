import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
//*Images
import Box from "img/box.png";
import Spinner from "../atoms/Spinner";
const ItemSt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 1vw;
  overflow: hidden;
  &:hover {
  }

  .NavLinkItem {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(0, 119, 255);
    background: radial-gradient(circle, #00a2ff 0%, rgba(5, 0, 143, 1) 100%);
    &:hover {
      background: rgb(255, 237, 0);
      background: radial-gradient(circle, rgba(255, 237, 0, 1) 0%, #d3a100 100%);
    }
    .thumbnail {
      width: 80%;
      height: 80%;
      object-fit: contain;
    }

    .price {
      position: absolute;
      top: 2vw;
      right: 2vw;
      font-family: "Roboto 900";
      font-size: 2.5vw;
      color: white;
      text-shadow: 0.2vw 0.2vw 1vw #000000d1;
    }
    .manufacturer {
      position: absolute;
      top: 2vw;
      left: 2vw;
      font-family: "Roboto 500";
      font-size: 2.5vw;
      color: white;
      text-shadow: 0.2vw 0.2vw 1vw #000000d1;
    }
    .quantity {
      position: absolute;
      top: 5vw;
      left: 2vw;
      /* top: 2vw;
      left: 2vw; */
      font-family: "Roboto 500";
      font-size: 2.5vw;
      color: white;
      text-shadow: 0.2vw 0.2vw 1vw #000000d1;
    }
    .alert {
      width: 90%;
      /* height: min-content; */
      background-color: #000000df;
      border-radius: 1vw;
      position: absolute;
      font-family: "Roboto regular";
      font-size: 2.5vw;
      color: #ffffff;
      padding: 2vw 2vw;
      text-align: start;
      white-space: pre-line;
      /* line-height: 1vw; */
    }
  }
  .active {
    background: rgb(255, 237, 0);
    background: radial-gradient(circle, rgba(255, 237, 0, 1) 0%, #d3a100 100%);
  }
  .incompatible {
    background: #ff0040;
  }
  .available {
    background: lime;
  }

  .model-container {
    width: 100%;
    height: 8vw;
    position: absolute;
    bottom: 0vw;
    background: rgb(0, 0, 0);
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.406) 0%, rgba(0, 0, 0, 0) 100%);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: white;
    text-align: center;
    .model {
      width: 100%;
      font-family: "Roboto 500";
      font-size: 2.5vw;
      text-shadow: 0.2vw 0.2vw 1vw #000000d1;
      padding: 0 1vw;

      // !Dots ...
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .resume {
      width: 100%;
      font-family: "Roboto 300";
      font-size: 2.1vw;
      text-shadow: 0.2vw 0.2vw 1vw #000000d1;
      padding: 0 1vw;

      // !Dots ...
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 0.3rem;
    overflow: hidden;
    &:hover {
    }

    .NavLinkItem {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(0, 119, 255);
      background: radial-gradient(circle, #00a2ff 0%, rgba(5, 0, 143, 1) 100%);
      &:hover {
        background: rgb(255, 237, 0);
        background: radial-gradient(circle, rgba(255, 237, 0, 1) 0%, #d3a100 100%);
      }
      .thumbnail {
        width: 80%;
        height: 80%;
        object-fit: contain;
      }

      .price {
        position: absolute;
        top: 0.5vw;
        right: 0.5vw;
        font-family: "Roboto 900";
        font-size: 0.8vw;
        color: white;
        text-shadow: 0vw 0.1vw 0.1vw #000000d1;
      }
      .manufacturer {
        position: absolute;
        top: 0.5vw;
        left: 0.5vw;
        font-family: "Roboto 500";
        font-size: 0.8vw;
        color: white;
        text-shadow: 0vw 0.1vw 0.1vw #000000d1;
      }
      .quantity {
        position: absolute;
        top: 1.5vw;
        left: 0.5vw;
        /* top: 0.5vw;
        left: 0.5vw; */
        font-family: "Roboto 500";
        font-size: 0.8vw;
        color: white;
        text-shadow: 0vw 0.1vw 0.1vw #000000d1;
      }
      .alert {
        width: 90%;
        /* height: min-content; */
        background-color: #000000df;
        border-radius: 0.3vw;
        position: absolute;
        font-family: "Roboto regular";
        font-size: 0.8vw;
        color: #ffffff;
        padding: 0.5vw 0.5vw;
        text-align: start;
        white-space: pre-line;
        /* line-height: 1vw; */
      }
    }
    .active {
      background: rgb(255, 237, 0);
      background: radial-gradient(circle, rgba(255, 237, 0, 1) 0%, #d3a100 100%);
    }
    .incompatible {
      background: #ff0040;
    }
    .available {
      background: #ff001e;
    }
    .model-container {
      width: 100%;
      height: 2.5vw;
      position: absolute;
      bottom: 0vw;
      background: rgb(0, 0, 0);
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.406) 0%, rgba(0, 0, 0, 0) 100%);

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      color: white;
      text-align: center;
      .model {
        width: 100%;
        font-family: "Roboto 500";
        font-size: 0.8vw;
        text-shadow: 0vw 0.1vw 0.1vw #000000d1;
        padding: 0 0.2vw;

        // !Dots ...
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .resume {
        width: 100%;
        font-family: "Roboto 300";
        font-size: 0.71vw;
        text-shadow: 0vw 0.1vw 0.1vw #000000d1;
        padding: 0 0.2vw;

        // !Dots ...
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
`;
interface PropsIT {
  uri: string;
  manufacturer: string;
  model: string;
  summary: string;
  type: string;
  price: number;
  img: string;
  quantity: number;
  error: boolean;
  warning: string;
}
const Item = (props: PropsIT) => {
  const [spinnerPoster, setSpinnerPoster] = useState(true);

  return (
    <ItemSt>
      <NavLink to={props.uri} className={`NavLinkItem ${props.error}`}>
        <img
          className="thumbnail"
          src={
            props.img === ""
              ? Box
              : ` http://localhost:4000/static/${props.type}/${props.img}`
          }
          alt=""
          onLoad={(e) => e.currentTarget.complete && setSpinnerPoster(false)}
        />
        {spinnerPoster && <Spinner bgColor="#0a0a0a" />}
        {props.error && <div className="alert">{props.warning}</div>}
        <div className="model-container" title={props.model}>
          <p className="model">{props.model}</p>
          <p className="resume">{props.summary}</p>
        </div>

        <div className="price">$ {props.price.toFixed(2)}</div>
        <div className="manufacturer"> {props.manufacturer}</div>
        <div className="quantity"> {props.quantity <= 1 ? null : `x${props.quantity}`}</div>
      </NavLink>
    </ItemSt>
  );
};

export default Item;
