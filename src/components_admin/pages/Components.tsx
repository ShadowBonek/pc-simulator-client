import axios from "axios";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { components as jsonComponents } from "json/components";
// *Icons
import EditIcon from "icons/EditIcon";
import DeleteIcon from "icons/DeleteIcon";
import ArrowRightIcon from "icons/ArrowRightIcon";
// *React Icons
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdFirstPage } from "react-icons/md";
import { MdLastPage } from "react-icons/md";
import Spinner from "components_admin/atoms/Spinner";
import { StoreInterface } from "interfaces/storeTemplate";
import { useSelector } from "react-redux";
import { DashboardSt } from "styles/DashBoardStyled";
import ButtonCreate from "components_admin/atoms/ButtonCreate";
import TableSt from "styles/TableStyled";
import Pagination from "components_admin/molecules/Pagination";
const UsersDashboardSt = styled(DashboardSt)`
  grid-template-columns: 20vw 20vw 20vw 20vw;
  justify-content: space-evenly;
  @media only screen and (min-width: 568px) {
    grid-template-columns: 15vw 15vw 15vw 15vw;
    justify-content: space-evenly;
  }
`;
const TableGamesSt = styled(TableSt)`
  .row {
    grid-template-columns: calc(47.5% - 25vw) 20% 17.5% 15% 12.5vw 12.5vw;
  }
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    .row {
      grid-template-columns: calc(30% - 20vw) 20% 10% 10% 10% 10% 10% 10vw 10vw;
    }
  }
`;
const MediaSt = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 15vw calc(100% - 15vw);

  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    width: 100%;
    height: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 7vw calc(100% - 7vw);
  }
`;

const Components = () => {
  const params: any = useParams();
  const location = useLocation();
  const paramsLocation = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const app = useSelector((store: StoreInterface) => store.app);

  // !Obteniendo los parametros
  const page: any = paramsLocation.get("page");
  const search: any = paramsLocation.get("search");
  const available: any = paramsLocation.get("available");
  const manufacturer: any = paramsLocation.get("manufacturer");
  // !Fetching Function
  const fetchData = async ({ queryKey }: any) => {
    const { data } = await axios.get(
      `http://localhost:4000/${queryKey[0]}?page=${queryKey[1]}&search=${queryKey[2]}&available=${queryKey[3]}&manufacturer=${queryKey[4]}`,
      {
        headers: {
          authorization: `Bearer ${app.login.token}`,
          id: `${app.login.id}`,
        },
      }
    );
    return data;
  };

  // !UseQuery
  const { data, isLoading, isError } = useQuery(
    [`${params.component}`, page, search, available, manufacturer],
    fetchData,
    {
      keepPreviousData: true,
      cacheTime: 0,
      staleTime: 0,
      onError: () => {
        navigate("/");
      },
    }
  );

  // ! HANDLE SEARCH
  const timerRef = useRef<any>(null);
//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     let value = e.currentTarget.value;
//     clearTimeout(timerRef.current);
//     if (value.length >= 0) {
//       timerRef.current = setTimeout(() => {
//         navigate(
//           `/admin/components/${params.component}?page=1&search=${value}&available=${available}&manufacturer=${manufacturer}`
//         );
//       }, 500);
//     }
//   };

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>Error</h1>;
  }
  const headers: any = {
    cpu: [
      "manufacturer",
      "model",
      "price",
      "power",
      //       "specifications",
      "available",

      //       "architecture",
      //       "total_cores",
      //       "integrated_graphics",
      //       "launch_date",
    ],
    mobo: [
      "manufacturer",
      "model",
      "price",
      "power",
//       "specifications",
      "available",

      //       "PCIe",
      //       "chipset",
      //       "form_factor",
      //       "ram_type",
    ],
    ram: [
      "manufacturer",
      "model",
      "price",
      "power",
      "specifications",
      "available",

      //       "ram_type",
      //       "memory_size",
      //       "speed",
      //       "CAS_latency",
    ],
    gpu: [
      "manufacturer",
      "model",
      "price",
      "power",
      "specifications",
      "available",

      //       "gpu_boost_clock",
      //       "memory",
      //       "memory_type",
      //       "benchmark",
    ],
    power: [
      "manufacturer",
      "model",
      "price",
      "power",
      "specifications",
      "available",

      //       "efficiency_rating",
      //       "wattage",
      //       "form_factor",
      //       "modular",
    ],
    case: [
      "manufacturer",
      "model",
      "price",
      "power",
      "specifications",
      "available",

      //       "form_factor",
      //       "PSU",
      //       "height",
      //       "length",
    ],
    nvme: [
      "manufacturer",
      "model",
      "price",
      "power",
      "specifications",
      "available",

      //       "write",
      //       "read",
      //       "capacity",
      //       "TBW",
    ],
    ssd: [
      "manufacturer",
      "model",
      "price",
      "power",
      "specifications",
      "available",
      //     "write", "read", "capacity", "TBW"
    ],
    hdd: [
      "manufacturer",
      "model",
      "price",
      "power",
      "specifications",
      "available",

      //       "capacity",
      //       "rpm",
      //       "cache",
      //       "interface",
    ],
    cooler: [
      "manufacturer",
      "model",
      "price",
      "power",
      "specifications",
      "available",

      //       "compatibility",
      //       "cooler_type",
      //       "fans",
      //       "fans_size",
    ],
    fan: [
      "manufacturer",
      "model",
      "price",
      "power",
      "specifications",
      "available",

      //       "compatibility",
      //       "cooler_type",
      //       "fans",
      //       "fans_size",
    ],
  };

  const translater = (value: string) => {
    switch (value) {
      case "manufacturer":
        return "Fabricante";
      case "model":
        return "Modelo";
      case "price":
        return "Precio";
      case "power":
        return "Consumo";
      case "specifications":
        //         return "Especificaciones";
        //       case "available":
        return "Disponible";
      default:
        return "";
    }
  };
  const hidder = (value: string) => {
    switch (value) {
      case "manufacturer":
        return "";
      case "model":
        return "";
      case "price":
        return "";
      case "power":
        return "none";
      //       case "specifications":
      //         return "none";
      case "available":
        return "none";
      default:
        return "";
    }
  };

  
  return (
    <MediaSt>
      <UsersDashboardSt>
        <div className="cell ">
          <label className="label center">Productos</label>
          <input className="input center" type="text" value={data.count} readOnly />
        </div>

        <div className="cell">
          <label className="label center">Componente</label>
          <select
            className="input input_select"
            name="genre"
            id="genre"
            value={params.component}
            onChange={(e) => {
              navigate(`/admin/components/${e.currentTarget.value}?page=1&search=&available=&manufacturer=`);
            }}
          >
            <option value="cpu">cpu</option>
            <option value="mobo">mobo</option>
            <option value="ram">ram</option>
            <option value="gpu">gpu</option>
            <option value="power">power</option>
            <option value="case">case</option>
            <option value="nvme">nvme</option>
            <option value="ssd">ssd</option>
            <option value="hdd">hdd</option>
            <option value="cooler">cooler</option>
            <option value="fan">fan</option>
          </select>
        </div>

        <div className="cell">
          <label className="label center">Disponible</label>
          <select
            className="input input_select"
            name="genre"
            id="genre"
            value={available}
            onChange={(e) => {
              navigate(
                `/admin/components/${params.component}?page=1&search=${search}&available=${e.currentTarget.value}&manufacturer=${manufacturer}`
              );
            }}
          >
            <option value="">Todos</option>
            <option value="true">Si</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className="cell">
          <label className="label center">Fabricante</label>
          <select
            className="input input_select"
            name="manufacturer"
            id="manufacturer"
            value={manufacturer}
            onChange={(e) => {
              navigate(
                `/admin/components/${params.component}?page=1&search=${search}&available=${available}&manufacturer=${e.currentTarget.value}`
              );
            }}
          >
            {jsonComponents[params.component]
              .find((i: any) => i.key === "manufacturer")
              .options.map((i: any) => (
                <option value={i} key={i}>
                  {i === "" ? "Todos" : i}
                </option>
              ))}
          </select>
        </div>
      </UsersDashboardSt>

      <TableGamesSt>
        <section className="row fixed">
          <div className="cell cell_header cell_center">Imagen</div>
          {headers[params.component].map((i: any) => (
            <div className={`cell cell_center cell_header ${hidder(i)}`} key={i}>
              {translater(i)}
            </div>
          ))}
        </section>
        {data.rows.map((i: any) => (
          <section className="row" key={i.id}>
            <img
              className=" cell cell_thumbnail"
              src={`http://localhost:4000/static/${i.type}/${i.imageS}`}
              alt=""
            />

            {headers[params.component].map((e: any) => (
              <div className={`cell cell_center ${hidder(e)}`} key={e} title={i[e]}>
                {i[e]}
              </div>
            ))}

            <EditIcon
              className="icon"
              onClick={() => navigate(`/admin/update-component/${params.component}?id=${i.id}`)}
            />
            <DeleteIcon
              className="icon"
              onClick={() => navigate(`/admin/delete-component?component=${i.type}&id=${i.id}`)}
            />
          </section>
        ))}
        {data.count >= 17 && (
          <Pagination
            page={page}
            search={search}
            available={available}
            manufacturer={manufacturer}
            count={data.count}
          />
        )}
      </TableGamesSt>

      {/* <Outlet /> */}
      <ButtonCreate link={`/admin/add-component/${params.component}`} />
    </MediaSt>
  );
};

export default Components;
