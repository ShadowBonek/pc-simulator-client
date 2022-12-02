import React from "react";
import { Link, useNavigate } from "react-router-dom";

// *React Icons
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdFirstPage } from "react-icons/md";
import { MdLastPage } from "react-icons/md";
import styled from "styled-components";
const PaginationSt = styled.div`
  width: auto;
  height: 9vw;
  justify-self: flex-end;
  align-self: center;
  display: grid;
  grid-template-columns: repeat(5, 9vw);
  grid-template-rows: 9vw;
  gap: 1vw;
  margin-right: 1vw;
  .arrow_button {
    background: #181818;
    color: white;
    display: flex;
    border-radius: 1vw;
    outline: none;
    border-style: none;
    justify-content: center;
    align-items: center;
    font-family: "Roboto 900";
    font-size: 3.5vw;
    :hover {
      background: #242324;
    }
    :active {
      background: #181818;
    }
    :disabled {
      background: #050505;
      color: #7e7c7c;
    }
    .sysIconArrow {
      width: 100%;
      height: 100%;
      padding: 1.5vw;
    }
  }

  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    width: auto;
    height: 3vw;
    justify-self: flex-end;
    align-self: center;
    display: grid;
    grid-template-columns: repeat(5, 3vw);
    grid-template-rows: 3vw;
    gap: 0.5vw;
    margin-right: 0.5vw;

    .arrow_button {
      background: #181818;
      color: white;
      display: flex;
      border-radius: 0.3vw;
      outline: none;
      border-style: none;
      justify-content: center;
      align-items: center;
      font-family: "Roboto 900";
      font-size: 1.5vw;
      :hover {
        background: #242324;
      }
      :active {
        background: #181818;
      }
      :disabled {
        background: #050505;
        color: #7e7c7c;
      }
      .sysIconArrow {
        width: 100%;
        height: 100%;
        padding: 0.5vw;
      }
    }
  }
`;
interface props {
  page: string;
  search: string;
  available: string;
  manufacturer: string;
  count: number;
}
export default function Pagination(props: props) {
  const navigate = useNavigate();
  const pager = (page: string | number, search: string, available: string, manufacturer: string) => {
    navigate(`?page=${page}&search=${search}&available=${available}&manufacturer=${manufacturer}`);
  };
  return (
    <PaginationSt>
      <button
        className="arrow_button"
        onClick={() => pager(1, props.search, props.available, props.manufacturer)}
        disabled={parseInt(props.page) <= 1 && true}
      >
        <MdFirstPage className="sysIconArrow" />
      </button>

      <button
        className="arrow_button"
        onClick={() => pager(parseInt(props.page) - 1, props.search, props.available, props.manufacturer)}
        disabled={parseInt(props.page) <= 1 && true}
      >
        <MdKeyboardArrowLeft className="sysIconArrow" />
      </button>

      <button type="button" className="arrow_button">
        {props.page}
      </button>

      <button
        className="arrow_button"
        onClick={() => pager(parseInt(props.page) + 1, props.search, props.available, props.manufacturer)}
        disabled={parseInt(props.page) >= Math.ceil(props.count / 17) && true}
      >
        <MdKeyboardArrowRight className="sysIconArrow" />
      </button>

      <button
        className="arrow_button"
        onClick={() => pager(Math.ceil(props.count / 17), props.search, props.available, props.manufacturer)}
        disabled={parseInt(props.page) >= Math.ceil(props.count / 17) && true}
      >
        <MdLastPage className="sysIconArrow" />
      </button>
    </PaginationSt>
  );
}
