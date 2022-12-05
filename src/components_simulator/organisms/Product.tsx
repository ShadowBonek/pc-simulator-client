import axios from "axios";
import { useEffect, useState } from "react";

import { useMutation, useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { setCompare, setRamType, setSetup, setSocket } from "redux/actions/appAction";
import styled from "styled-components";
import Spinner from "../atoms/Spinner";
import { IoMdPhotos } from "react-icons/io";
import { MdModeEditOutline } from "react-icons/md";
import Gallery from "./Gallery";
import ArrowLeftIcon from "icons/ArrowLeftIcon";
import CompareIcon from "icons/CompareIcon";
import { IoChevronBackOutline, IoGitCompareSharp } from "react-icons/io5";
import { HiViewGridAdd } from "react-icons/hi";
import toast from "react-hot-toast";
import { StoreInterface } from "interfaces/storeTemplate";
import EditPriceProduct from "../molecules/EditPriceProduct";
import Specifications from "../molecules/Specifications";
import Details from "../molecules/Details";
import ErrorFetchSt from "components_simulator/organisms/ErrorFetch";
// import AmazonBanner from "../atoms/AmazonBanner";
const ProductSt = styled.div`
  width: 100%;
  height: 100%;
  background: #000000;
  overflow-y: scroll;
  position: absolute;
  /* margin-bottom: 15vw; */
  .header-product-arrow-title-price {
    width: 100%;
    height: 15vw;
    background-color: #000000;
    position: sticky;
    top: 0;
    z-index: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .sysIconArrowBack {
      color: white;
      width: 10vw;
      height: 10vw;
      position: absolute;
      left: 1vw;
      cursor: pointer;
    }
    .header-title-product {
      width: calc(100% - 40vw);
      color: white;
      font-family: "Roboto 900";
      font-size: 5vw;
      text-transform: uppercase;
      position: absolute;
      left: 12vw;
      // !Dots ...
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .product-price {
      margin-right: 4vw;
      font-family: "Roboto 900";
      color: white;
      font-size: 5vw;
      position: relative;
      .msrp {
        position: absolute;
        top: -2.5vw;
        right: 0vw;
        font-family: "Roboto 300";
        font-size: 2.5vw;
        color: #818181;
        line-height: 2.5vw;
      }
    }
  }
  .poster-product-container {
    width: 100vw;
    height: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .poster {
      position: absolute;
      width: 90%;
      height: 100%;
      object-fit: contain;
    }
  }
  .alignleft {
    width: 100%;
    height: 40vw;
  }
  .tabs {
    width: 100%;
    height: 10vw;
    padding: 0 10vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 0.1vw solid #222222;
    margin-top: 1vw;
    .tab {
      width: 25vw;
      height: 10vw;
      line-height: 10vw;
      text-align: center;
      background: #080808;
      font-family: "Roboto 700";
      font-size: 3vw;
      color: white;
      margin-right: 0.5vw;
      cursor: pointer;
      text-transform: capitalize;
      user-select: none;
      border-radius: 1vw 1vw 0vw 0vw;
    }
  }
  .product-button-icon-title {
    width: 15vw;
    height: 15vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    position: fixed;
    right: 3vw;
    transition: 0.1s;
    user-select: none;
    &:hover {
      /* transform: scale(1.1);
      transition: 0.1s; */
    }
    .sysIconActionProduct {
      width: 10vw;
      height: 10vw;
      color: #ffffff;
    }
    .title-icon-product {
      width: auto;
      height: 5vw;
      line-height: 5vw;
      text-align: center;
      font-family: "Roboto 700";
      font-size: 3vw;
      color: white;
      text-shadow: 0.2vw 0.2vw 1vw black;
    }
  }
  .quantity-icon {
    top: 15vw;
    .numberStateQuantity {
      width: 100%;
      height: 10vw;
      color: #ffffff;
      line-height: 10vw;
      text-align: center;
      font-family: "Roboto 900";
      font-size: 6vw;
      text-shadow: 0.2vw 0.2vw 1vw black;
    }
  }
  .gallery-icon {
    bottom: 65vw;
  }
  .compare-icon {
    bottom: 45vw;
    .sysIconActionProduct {
      padding: 0.5vw;
    }
  }
  .edit-icon {
    bottom: 25vw;
    .sysIconActionProduct {
      padding: 0.5vw;
    }
  }
  .add-icon {
    bottom: 5vw;
  }
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    /* margin-bottom: 4vw; */

    .header-product-arrow-title-price {
      height: 4vw;
      .sysIconArrowBack {
        width: 3vw;
        height: 3vw;
        left: 0.5vw;
      }
      .header-title-product {
        width: calc(100% - 20vw);
        font-size: 2vw;
        left: 4vw;
      }
      .product-price {
        margin-right: 2vw;
        font-size: 2vw;
        /* background: red; */
        position: relative;
        .msrp {
          position: absolute;
          top: -0.5vw;
          right: 0vw;
          font-family: "Roboto 300";
          font-size: 0.7vw;
          color: #818181;
          line-height: 0.7vw;
        }
      }
    }
    .poster-product-container {
      width: 100%;
      height: 40vw;
      .poster {
        width: 90%;
        height: 100%;
        object-fit: contain;
      }
    }
    .alignleft {
      width: 100%;
      height: 10vw;
    }
    .tabs {
      width: 100%;
      height: 3vw;
      padding: 0 5vw;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 0.1vw solid #222222;
      margin-top: 1vw;
      .tab {
        width: 10vw;
        height: 3vw;
        line-height: 3vw;
        text-align: center;
        /* padding: 0vw 2vw; */
        background: #080808;
        font-family: "Roboto 700";
        font-size: 1vw;
        color: white;
        margin-right: 0.5vw;
        cursor: pointer;
        text-transform: capitalize;
        user-select: none;
        border-radius: 0.3vw 0.3vw 0vw 0vw;
      }
    }
    .product-button-icon-title {
      width: 5vw;
      height: 5vw;
      right: 2vw;
      &:hover {
        transform: scale(1.1);
        transition: 0.1s;
      }
      .sysIconActionProduct {
        width: 5vw;
        height: 4vw;
        color: #ffffff;
      }
      .title-icon-product {
        width: auto;
        height: 1vw;
        line-height: 1vw;
        font-size: 1vw;
      }
    }
    .quantity-icon {
      top: 4vw;
      &:hover {
        transform: none;
        transition: none;
      }
      .numberStateQuantity {
        height: 4vw;
        line-height: 4vw;
        font-size: 3vw;
      }
    }
    .gallery-icon {
      bottom: 23vw;
    }
    .compare-icon {
      bottom: 16vw;
      .sysIconActionProduct {
        padding: 0.5vw;
      }
    }
    .edit-icon {
      bottom: 9vw;
      .sysIconActionProduct {
        padding: 0.5vw;
      }
    }
    .add-icon {
      bottom: 2vw;
    }
  }
`;

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const location = useLocation();
  const paramsLocation = new URLSearchParams(location.search);
  const app = useSelector((store: StoreInterface) => store.app);

  // !States
  const [state, setState] = useState<any>({});
  const [editStateModal, setEditStateModal] = useState(false);
  const [spinnerPosterProduct, setSpinnerPosterProduct] = useState(true);
  const [galleryModal, setGalleryModal] = useState(false);
  // !TABS State
  const [tab, setTab] = useState("overview");

  // !Obteniendo los parametros
  const component = paramsLocation.get("component");
  const idComponent = paramsLocation.get("idComponent");
  //   console.log(component, idComponent);

  // !Handle COMPARE
  const handleCompare = (model: string) => {
    if (app.compare.find((i: any) => i.model === model)) {
      toast.error(`El componente de pc ya esta agregado!!`);
    } else {
      dispatch(setCompare(state));
    }
  };
  // !Handle send to Setup
  const handlePayload = () => {
    dispatch(setSetup(state));
    if (state.type === "mobo") {
      dispatch(setSocket(state.socket));
      dispatch(setRamType(state.ram_type));
    }
    if (state.type === "cpu") {
      dispatch(setSocket(state.socket));
    }

    window.innerWidth < 568 ? navigate("/simulator") : navigate(-1);
  };
  // !Fetch function
  const fetchData = async ({ queryKey }: any) => {
    const response = await axios.get(
      `http://localhost:4000/${queryKey[0]}/${queryKey[1]}`
    );
    return response.data;
  };
  // !ReactQuery function
  const { data, isLoading, isError } = useQuery([`${component}`, `${idComponent}`], fetchData, {
    onSuccess: (data) => setState(data),
    keepPreviousData: true,
    cacheTime: 0,
    staleTime: 0,
  });
  const elementsInCommon = [
    "imageM",
    "imageS",
    "specifications",
    "id",
    "model",
    "manufacturer",
    "type",
    "createdAt",
    "updatedAt",
    //     "power",
    "quantity",
    "price",
    "error",
    "warning",
    "available",
    "keywords",
    "length",

    "platform",
    "socket",
    "ram_type",
    "memory_speed_max",
    "chipset",
    "PCIe",
    "lan_speed_max",

    "compatibility",
  ];

  const objectKeys =
    data && Object.keys(state).filter((i) => i !== elementsInCommon.find((e) => e === i));
  //   console.log(data);

  if (isLoading) {
    return <Spinner bgColor="black" />;
  }

  if (isError) {
    return <h1>Error</h1>;
  }
  if (!data) {
    return <ErrorFetchSt />;
  }
  return (
    <ProductSt>
      <div className="header-product-arrow-title-price">
        <IoChevronBackOutline
          className="sysIconArrowBack"
          onClick={() => navigate(`/simulator/component/${data.type}`)}
        />
        <h1 className="header-title-product">
          {data.manufacturer} {data.model}
        </h1>
        {/* <p className="product-price" title="Manufacturer's Suggested Retail Price">
          <span className="msrp">(MSRP)</span> $ {state.price.toFixed(2)}
        </p> */}
      </div>

      <div className="poster-product-container">
        <img
          className="poster"
          src={` http://localhost:4000/static/${data.type}/${data.imageS}`}
          alt=""
          //   onLoad={(e) => e.currentTarget.complete && setSpinnerPosterProduct(false)}
        />
        <img
          className="poster"
          src={` http://localhost:4000/static/${data.type}/${data.imageM}`}
          alt=""
          onLoad={(e) => e.currentTarget.complete && setSpinnerPosterProduct(false)}
        />
        {spinnerPosterProduct && <Spinner bgColor="none" />}
      </div>

      {/* <AmazonBanner /> */}

      <div className="tabs">
        <div
          className="tab"
          onClick={() => setTab("overview")}
          style={tab === "overview" ? { background: "#222222" } : { background: "#080808" }}
        >
          Detalles
        </div>
        {/* {data.specifications?.length !== 0 && (
          <div
            className="tab"
            onClick={() => setTab("specifications")}
            style={tab === "specifications" ? { background: "#222222" } : { background: "#080808" }}
          >
            specifications
          </div>
        )} */}
      </div>
      {tab === "overview" ? (
        <Details
          manufaturer={data.manufacturer}
          model={data.model}
          objectKeys={objectKeys}
          state={state}
        />
      ) : tab === "specifications" ? (
        <Specifications specifications={data.specifications} />
      ) : null}

      <div
        className="product-button-icon-title quantity-icon"
        onClick={() => {
          navigate(`${location.pathname}${location.search}`);
          setEditStateModal(true);
        }}
      >
        <div className="numberStateQuantity">x{state.quantity}</div>
        <div className="title-icon-product">Cantidad</div>
      </div>
{/* 
      {data.imageM.length > 1 && (
        <div
          className="product-button-icon-title gallery-icon"
          onClick={() => {
            navigate(`${location.pathname}${location.search}`);
            setGalleryModal(true);
          }}
        >
          <IoMdPhotos className="sysIconActionProduct" />
          <div className="title-icon-product">Gallery</div>
        </div>
      )} */}

      <div
        className="product-button-icon-title edit-icon"
        onClick={() => {
          navigate(`${location.pathname}${location.search}`);
          setEditStateModal(true);
        }}
      >
        <MdModeEditOutline className="sysIconActionProduct" />
        <div className="title-icon-product">Editar</div>
      </div>

      <div
        className="product-button-icon-title compare-icon"
        onClick={() => handleCompare(data.model)}
      >
        <IoGitCompareSharp className="sysIconActionProduct" />
        <div className="title-icon-product">Comparar</div>
      </div>

      <div className="product-button-icon-title add-icon" onClick={handlePayload}>
        <HiViewGridAdd className="sysIconActionProduct" />
        <div className="title-icon-product">Agregar</div>
      </div>

      {editStateModal && (
        <EditPriceProduct
          state={state}
          setState={setState}
          editStateModal={editStateModal}
          setEditStateModal={setEditStateModal}
        />
      )}
      {galleryModal && (
        <Gallery
          imageM={data.imageM}
          imageS={data.imageS}
          type={data.type}
          data={data}
          setGalleryModal={setGalleryModal}
        />
      )}
    </ProductSt>
  );
};

export default Product;
