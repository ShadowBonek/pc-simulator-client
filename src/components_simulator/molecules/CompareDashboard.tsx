import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
//*icons
import CompareIcon from "icons/CompareIcon";
import { useDispatch, useSelector } from "react-redux";
import { StoreInterface } from "interfaces/storeTemplate";
import { IoGitCompareOutline } from "react-icons/io5";
import { deleteCompare } from "redux/actions/appAction";
import { dispatch } from "react-hot-toast/dist/core/store";
import { useLocation, useNavigate } from "react-router-dom";
import boxCompare from "img/boxCompare.png";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const DasboardSt = styled.div`
  width: 20vw;
  height: 70vw;
  position: absolute;
  bottom: calc(100vh - 120vw);
  background: #0f0f0f;
  display: grid;
  grid-template-columns: 20vw;
  grid-template-rows: 25vw 25vw 10vw;
  gap: 5vw;
  border-radius: 0vw 0vw 1vw 0vw;
  justify-content: center;
  align-content: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  z-index: 9;
  .item-compare {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: wiggle 0.1s linear;
    @keyframes wiggle {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
    .img-thumb-compare {
      justify-self: center;
      align-self: center;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .button-delete-compare {
      border-style: none;
      outline: none;
      background-color: #5100ff;
      font-family: "Roboto regular";
      font-size: 3vw;
      color: #ffffff;
      padding: 1vw 2vw;
      border-radius: 1vw;
      cursor: pointer;
      /* &:hover {
          background-color: white;
          color: black;
        } */
    }
  }

  .sysIconCompare {
    width: 100%;
    height: 100%;
    padding: 2vw;
    background: #5100ff;
    color: white;
    border-radius: 1vw;
    cursor: pointer;

    /* &:hover {
      background-color: white;
      color: black;
      transition: 0.1s;
    } */
  }
  .minimize {
    width: 7.5vw;
    height: 30vw;
    position: absolute;
    top: 0vw;
    right: -7.5vw;
    line-height: 7.5vw;
    border-radius: 0 1vw 1vw 0;
    background: #ff0040;
    writing-mode: vertical-lr;
    text-orientation: mixed;
    font-family: "Roboto 700";
    font-size: 3.5vw;
    color: white;
    text-align: center;
    cursor: pointer;
  }

  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    width: 10vw;
    height: 32vw;
    bottom: calc(100vh - 42vw);
    grid-template-columns: 10vw;
    grid-template-rows: 12vw 12vw 4vw;
    gap: 2vw;
    border-radius: 0vw 0vw 0.3vw 0vw;
    background: #070707;
    .item-compare {
      .img-thumb-compare {
      }

      .button-delete-compare {
        font-size: 1vw;
        padding: 0.5vw 1vw;
        border-radius: 0.3vw;
        cursor: pointer;
        &:hover {
          background-color: white;
          color: black;
        }
      }
    }

    .sysIconCompare {
      width: 100%;
      height: 100%;
      padding: 1vw;
      border-radius: 0.3vw;
      cursor: pointer;

      &:hover {
        background-color: white;
        color: black;
        transition: 0.1s;
      }
    }
    .minimize {
      width: 3vw;
      height: 10vw;
      top: 0vw;
      right: -3vw;
      line-height: 3vw;
      border-radius: 0 0.3vw 0.3vw 0;
      font-family: "Roboto 700";
      font-size: 1vw;
      &:hover {
        background-color: white;
        color: black;
        transition: 0.1s;
      }
    }
  }
`;
interface props {
  setCompareModal: any;
  dashboardRef: any;
}
const Dashboard = (props: props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const app = useSelector((store: StoreInterface) => store.app);

  // !Handle delete COMPARE
  const handleDeleteCompare = (id: string) => {
    dispatch(deleteCompare(id));
  };

  return (
    <DasboardSt ref={props.dashboardRef}>
      {app.compare.map((i: any) => (
        <div className="item-compare" key={i.id}>
          <img
            className="img-thumb-compare"
            src={`http://localhost:4000/static/${i.type}/${i.imageS}`}
            alt=""
          />
          <button className="button-delete-compare " onClick={() => handleDeleteCompare(i.id)}>
            Borrar
          </button>
        </div>
      ))}
      {app.compare.length < 1 && <div className="item-compare"></div>}
      {app.compare.length < 2 && <div className="item-compare"></div>}
      <IoGitCompareOutline
        className="sysIconCompare"
        onClick={() => {
          navigate(`${location.pathname}${location.search}`);
          props.setCompareModal(true);
        }}
      />
      <div
        className="minimize"
        onClick={() => {
          if (window.innerWidth < 568) {
          }
          if (props.dashboardRef.current.style.marginLeft === "") {
            if (window.innerWidth < 568) {
              props.dashboardRef.current.style.marginLeft = "-20vw";
            }
            if (window.innerWidth > 568) {
              props.dashboardRef.current.style.marginLeft = "-10vw";
            }
          } else {
            props.dashboardRef.current.style.marginLeft = "";
          }
        }}
      >
        COMPARAR: {app.compare.length}
      </div>
    </DasboardSt>
  );
};

export default Dashboard;
