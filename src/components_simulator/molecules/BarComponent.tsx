import React, { useEffect, useRef, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setupTemplate } from "json/setupTemplate";
import { useDispatch, useSelector } from "react-redux";
import { StoreInterface } from "interfaces/storeTemplate";
import { resetSetup, setRamType, setSocket } from "redux/actions/appAction";

// !Icons
import BoxIcon from "icons/BoxIcon";
import CloseIcon from "icons/CloseIcon";
import SortIcon from "icons/SortIcon";
import FilterIcon from "icons/FilterIcon";
import SearchIcon from "icons/SearchIcon";
const BarComponentSt = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  padding-right: 1vw;
  .sysIconBack {
    position: absolute;
    left: 1vw;
    color: white;
    width: 10vw;
    height: 10vw;
    cursor: pointer;
  }
  .component-name {
    position: absolute;
    left: 12vw;
    width: 30vw;
    color: white;
    font-family: "Roboto 900";
    font-size: 5vw;
    text-transform: uppercase;
    // !Dots ...
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .button-system {
    margin-right: 1vw;
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
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    padding-right: 0.5vw;

    .sysIconBack {
      left: 0.5vw;
      width: 3vw;
      height: 3vw;
    }
    .component-name {
      width: 10vw;
      font-size: 2vw;
      left: 4vw;
    }

    .button-system {
      margin-right: 0.5vw;
      background: #0d0d0d;
      color: #bdbdbd;
      border-radius: 0.3vw;
      width: 3vw;
      height: 3vw;
      padding: 0.5vw;
      cursor: pointer;
      &:hover {
        background-color: #121111;
        color: #ffffff;
      }
    }
  }
`;
const SearchSt = styled.form`
  position: absolute;
  right: 2vw;
  width: calc(100% - 45vw);
  height: 10vw;
  display: flex;
  border-radius: 3vw;
  background: #222222;
  // !Animation

  animation-duration: 0.3s;
  animation-name: slidein;
  @keyframes slidein {
    from {
      /* width: 0; */
      opacity: 0;
    }

    to {
      /* width: calc(100% - 45vw); */
      opacity: 1;
    }
  }
  .sysIconSearch {
    position: absolute;
    right: 0;
    width: 10vw;
    height: 10vw;
    padding: 2vw;
    color: #6e6e6e;
  }
  .search-input {
    position: absolute;
    height: 100%;
    width: 100%;
    padding: 0 10vw 0 3.5vw;
    font-family: "Roboto 300";
    color: #ffffff;
    font-size: 4vw;
    outline: none;
    border-style: none;
    background: none;
    border-radius: 3vw;
    /* background: red; */
  }

  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    right: 0.5vw;
    width: calc(100% - 15vw);
    height: 3vw;
    border-radius: 1vw;
    background: #0f0f0f;
    // !Animation
    animation-duration: 0.3s;
    animation-name: slidein;
    @keyframes slidein {
      from {
        /* width: 0; */
        opacity: 0;
      }

      to {
        /* width: calc(100% - 15vw); */
        opacity: 1;
      }
    }

    .sysIconSearch {
      right: 0.5vw;
      width: 3vw;
      height: 3vw;
      padding: 0.7vw;
    }
    .search-input {
      padding: 0 4vw 0 1vw;
      font-size: 1.2vw;
      border-radius: 1vw;
    }
  }
`;
interface props {
  componentSelected: string;
  filterModal: boolean;
  setFilterModal: any;
  queries: any;
  setQueries: any;
  refetch: any;
}

const BarComponent = (props: props) => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const location = useLocation();
  const app = useSelector((store: StoreInterface) => store.app);
  //   console.log(props.componentSelected, app.setup.mobo.socket);

  // !State for search
  const [state, setState] = useState(props.queries.search);
  // !Handle navigate to component
  const handleNavigate = () => {
    navigate(
      `details?model=${app.setup[props.componentSelected].model}&component=${
        props.componentSelected
      }&idComponent=${app.setup[props.componentSelected].id}`
    );
  };
  // !Handle Reset
  const handleReset = () => {
    dispatch(resetSetup(setupTemplate[props.componentSelected]));
    if (props.componentSelected === "cpu") {
      dispatch(setSocket(app.setup.mobo.socket));
    }
    if (props.componentSelected === "mobo") {
      dispatch(setSocket(app.setup.cpu.socket));
      dispatch(setRamType(""));
    }
    navigate("/simulator");
  };
  // !Hande Change
  const timerRef = useRef<any>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    setState(value);
    clearTimeout(timerRef.current);
    if (value.length >= 0) {
      timerRef.current = setTimeout(() => {
        props.setQueries({ ...props.queries, search: value });
      }, 500);
    }
  };
  //! CLICK OUTSIDE SEARCH
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<any>(null);
  useEffect(() => {
    const handler = (e: any) => {
      if (!searchRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <BarComponentSt>
      <IoChevronBackOutline
        className="sysIconBack"
        onClick={() => navigate("/simulator")}
      />
      <section className="component-name">{props.componentSelected}</section>

      {isOpen && (
        <SearchSt ref={searchRef} onSubmit={(e) => e.preventDefault()}>
          <SearchIcon className="sysIconSearch" />
          <input
            ref={timerRef}
            className="search-input"
            type="text"
            name="search"
            placeholder="Buscar..."
            onChange={handleChange}
            value={state}
            autoFocus={true}
            onFocus={(e) => e.target.select()}
            autoComplete="off"
          />
        </SearchSt>
      )}

      {!isOpen && (
        <>
          {app.setup[props.componentSelected].manufacturer !== "" && (
            <>
              <BoxIcon className="button-system" onClick={handleNavigate} />
              <CloseIcon className="button-system" onClick={handleReset} />
            </>
          )}

          <SortIcon
            className="button-system"
            onClick={() =>
              props.setQueries({
                ...props.queries,
                sort: props.queries.sort === "desc" ? "asc" : "desc",
              })
            }
          />
          <FilterIcon
            className="button-system"
            onClick={() => {
              props.setFilterModal(true);
              navigate(`${location.pathname}${location.search}`);
            }}
          />
          <SearchIcon className="button-system" onClick={() => setIsOpen(!isOpen)} />
        </>
      )}
    </BarComponentSt>
  );
};

export default BarComponent;
