import styled from "styled-components";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import { IoMenuOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { openMenu, resetAllItems, setLogin } from "redux/actions/appAction";
import { setupTemplate } from "json/setupTemplate";
import LogoutIcon from "icons/LogoutIcon";
import SearchIcon from "icons/SearchIcon";
import { useRef } from "react";

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
    }
  }
`;
// !Search
const SearchSt = styled.form`
  margin-right: 4vw;
  width: calc(100% - 55vw);
  height: 10vw;
  display: flex;
  border-radius: 2vw;
  background: #1a1a1b;
  position: relative;
  overflow: hidden;
  .sysIconSearch {
    position: absolute;
    right: 0.5vw;
    width: 10vw;
    height: 10vw;
    color: #ffffff;
    display: flex;
    padding: 1.5vw;
  }
  .search-input {
    position: absolute;
    height: 100%;
    width: 100%;
    padding: 0 11vw 0 3vw;
    font-family: "Roboto 300";
    color: #ffffff;
    font-size: 4vw;
    outline: none;
    border-style: none;
    background: none;
  }
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    margin-right: 2vw;
    width: calc(100% - 45vw);
    height: 3vw;
    display: flex;
    border-radius: 0.5vw;
    background: #0d0d0d;
    position: relative;
    overflow: hidden;
    .sysIconSearch {
      position: absolute;
      right: 0.5vw;
      width: 3vw;
      height: 3vw;
      color: #bdbdbd;
      display: flex;
      padding: 0.5vw;
    }
    .search-input {
      position: absolute;
      height: 100%;
      width: 100%;
      padding: 0 4vw 0 1.5vw;
      font-family: "Roboto 300";
      color: #ffffff;
      font-size: 1.2vw;
      outline: none;
      border-style: none;
      background: none;
    }
  }
`;
const Navbar = () => {
  const params: any = useParams();

  const location = useLocation();
  const paramsLocation = new URLSearchParams(location.search);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const handleOpenMenu = () => {
    dispatch(openMenu("0"));
  };

  // !Obteniendo los parametros
  const page: any = paramsLocation.get("page");
  const search: any = paramsLocation.get("search");
  const available: any = paramsLocation.get("available");
  const manufacturer: any = paramsLocation.get("manufacturer");

  // ! HANDLE SEARCH
  const timerRef = useRef<any>(null);
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value;
    clearTimeout(timerRef.current);
    if (value.length >= 0) {
      timerRef.current = setTimeout(() => {
        navigate(
          `/admin/components/${
            params["*"].split("/")[1]
          }?page=1&search=${value}&available=${available}&manufacturer=${manufacturer}`
        );
      }, 500);
    }
  };

  // !logout
  const logout = (e: any) => {
    dispatch(setLogin("", ""));
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    navigate(`/`);
  };
  return (
    <NavbarSt>
      <div className="navBar-top">
        <IoMenuOutline className="sysIconMenu" onClick={handleOpenMenu} />
        <Link to="/" className="page-name">
          Admin
        </Link>
        <SearchSt onSubmit={(e) => e.preventDefault()}>
          <SearchIcon className="sysIconSearch" />
          <input
            className="search-input"
            type="text"
            placeholder="Buscar..."
            defaultValue={search}
            onChange={handleSearch}
            onFocus={(e) => e.currentTarget.select()}
          />
        </SearchSt>
        <LogoutIcon className="button-system" onClick={logout} />
      </div>
    </NavbarSt>
  );
};

export default Navbar;
