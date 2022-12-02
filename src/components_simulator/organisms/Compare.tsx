import { StoreInterface } from "interfaces/storeTemplate";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ArrowLeftIcon from "icons/ArrowLeftIcon";
import ArrowRightIcon from "icons/ArrowRightIcon";
import { useEffect, useState } from "react";
import Spinner from "../atoms/Spinner";
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { deleteCompare } from "redux/actions/appAction";
const CompareSt = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  /* user-select: none; */
  overflow-y: scroll;
  background: rgb(0, 0, 0);
  z-index: 10;
  .header-compare {
    width: 100%;
    height: 15vw;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    .sysIconBack {
      color: white;
      width: 10vw;
      height: 10vw;
      cursor: pointer;
      margin-left: 1vw;
    }
    .component-name {
      /* width: 30vw; */
      color: white;
      font-family: "Roboto 900";
      font-size: 5vw;
      text-transform: uppercase;
      margin-left: 1vw;
      // !Dots ...
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .items-compare-container {
    display: grid;
    grid-template-columns: 50% 50%;

    .poster-compare-container {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      .poster-spinner-container {
        width: 100%;
        height: 50vw;
        display: flex;
        justify-content: center;
        align-content: center;
        position: relative;
        .poster-compare {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      .buttons-compare {
        width: 100%;
        height: 10vw;
        display: grid;
        grid-template-columns: 10vw 20vw 10vw;
        grid-template-rows: 10vw;
        gap: 1vw;
        justify-content: center;
        align-content: center;
        .sysIconArrowCompare {
          width: 100%;
          height: 100%;
          background-color: #000000;
          border-radius: 1vw;
          color: white;
          cursor: pointer;
          background-color: #5100ff;

          /* &:hover {
            background-color: #ffffff;
            color: #000000;
          } */
        }
        .counter-compare {
          font-family: "Roboto 300";
          font-size: 6vw;
          color: white;
          line-height: 10vw;
          text-align: center;
        }
      }

      .details-compare {
        width: 100%;
        height: auto;
        display: grid;
        grid-template-columns: 100%;
        grid-auto-rows: 14vw;
        /* gap: 0.5vw; */

        .cell-compare-details {
          display: grid;
          grid-template-columns: 100%;
          grid-template-rows: 4vw 6vw;
          justify-content: center;
          align-content: center;
          padding: 0 2vw;
          border-bottom: 0.1vw solid #242424;
          .compare-cell-label {
            font-family: "Roboto 300";
            text-transform: capitalize;
            color: #a0a0a0;
            font-size: 3vw;
          }
          .compare-cell-data {
            font-family: "Roboto 900";
            color: white;
            font-size: 4.5vw;
            // !Dots ...
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }

  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    .header-compare {
      height: 4vw;
      .sysIconBack {
        width: 3vw;
        height: 3vw;
        margin-left: 0.5vw;
      }
      .component-name {
        font-size: 2vw;
        margin-left: 0.5vw;
      }
    }
    .items-compare-container {
      .poster-compare-container {
        .poster-spinner-container {
          width: 100%;
          height: 35vw;
          display: flex;
          justify-content: center;
          align-content: center;
          position: relative;
          .poster-compare {
          }
        }

        .buttons-compare {
          height: 4vw;
          grid-template-columns: 4vw 10vw 4vw;
          grid-template-rows: 4vw;
          gap: 0.5vw;
          .sysIconArrowCompare {
            border-radius: 0.3vw;

            &:hover {
              background-color: #ffffff;
              color: #000000;
            }
          }
          .counter-compare {
            font-size: 3vw;
            line-height: 4vw;
          }
        }

        .details-compare {
          grid-auto-rows: 4vw;

          .cell-compare-details {
            grid-template-rows: 1vw 2vw;
            padding: 0 4vw;
            border-bottom: 0.1vw solid #242424;

            .compare-cell-label {
              font-size: 1vw;
            }
            .compare-cell-data {
              font-size: 1.5vw;
            }
          }
        }
      }
    }
  }
`;
const CompareEmptySt = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  .title-compare-empty {
    font-family: "Roboto 900";
    font-size: 6vw;
    color: white;
  }

  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;
    .title-compare-empty {
      font-family: "Roboto 900";
      font-size: 3rem;
      color: white;
    }
  }
`;

const useCounter = () => {
  const [counter, setCounter] = useState(0);
  const [spinnerPoster, setSpinnerPoster] = useState(true);
  const handleCounter = (data: string, length: number) => {
    if (data === "left" && counter > 0) {
      setCounter(counter - 1);
      setSpinnerPoster(true);
    }
    if (data === "right" && counter < length - 1) {
      setCounter(counter + 1);
      setSpinnerPoster(true);
    }
  };
  return {
    counter,
    handleCounter,
    spinnerPoster,
    setSpinnerPoster,
  };
};
interface props {
  setCompareModal: any;
}
const Compare = (props: props) => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const app = useSelector((store: StoreInterface) => store.app);
  const counter1 = useCounter();
  const counter2 = useCounter();
  const counters = [counter1, counter2];
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
    "error",
    "warning",
    "available",
    "keywords",
    "length",
    "price",

    "platform",
    "socket",
    "ram_type",
    "memory_speed_max",
    "chipset",
    "PCIe",
    "lan_speed_max",

    "compatibility",
  ];
  //   var options: any = { year: "numeric", month: "short", day: "numeric" };
  //       const objectKeys = Object.keys(state).filter((i) => i !== elementsInCommon.find((e) => e === i));
  // !Handle delete COMPARE
  //   const handleDeleteCompare = (id: string) => {
  //     dispatch(deleteCompare(id));
  //   };
  // !Set Window Location
  const setCompareModal = () => {
    props.setCompareModal(false);
  };
  // !UseEffect
  useEffect(() => {
    window.addEventListener("popstate", setCompareModal);
    return () => {
      window.removeEventListener("popstate", setCompareModal);
    };
  }, []);
  if (app.compare.length === 0) {
    return (
      <CompareEmptySt>
        <h1 className="title-compare-empty">
          <div>Empty</div>
          <button onClick={() => navigate(-1)}>Close</button>
        </h1>
      </CompareEmptySt>
    );
  }
  return (
    <CompareSt>
      <div className="header-compare">
        <IoChevronBackOutline className="sysIconBack" onClick={() => navigate(-1)} />
        <section className="component-name">Compare</section>
      </div>

      <div className="items-compare-container">
        {app.compare.map((i: any, index: any) => (
          <div className="poster-compare-container" key={index}>
            <div className="poster-spinner-container">
              <img
                className="poster-compare"
                src={`http://localhost:4000/static/${i.type}/${
                  //   i.imageM[counters[index].counter]
                  i.imageM
                }`}
                alt=""
                onLoad={(e) => e.currentTarget.complete && counters[index].setSpinnerPoster(false)}
              />
              {counters[index].spinnerPoster && <Spinner bgColor="black" />}
            </div>

            {/* {i.imageM.length > 1 ? (
              <div className="buttons-compare">
                <ArrowLeftIcon
                  className="sysIconArrowCompare"
                  onClick={() => counters[index].handleCounter("left", i.imageM.length)}
                />
                <section className="counter-compare">
                  {counters[index].counter + 1}/{i.imageM.length}
                </section>
                <ArrowRightIcon
                  className="sysIconArrowCompare"
                  onClick={() => counters[index].handleCounter("right", i.imageM.length)}
                />
              </div>
            ) : (
              <div className="buttons-compare"></div>
            )} */}

            {/* <div className="compare-model">
              {i.manufacturer} {i.model}
            </div> */}

            <div className="details-compare">
              <div className="cell-compare-details" key={index}>
                <div className="compare-cell-label">Model:</div>
                <div className="compare-cell-data">{i.model}</div>
              </div>
              {Object.keys(i)
                .filter((x) => x !== elementsInCommon.find((y) => y === x))
                .sort()
                .map((z, index) => (
                  <div className="cell-compare-details" key={index}>
                    <div className="compare-cell-label">
                      {z === "price" ? `${z.replace(/_/g, " ")}` : z === "power" ? "consumption" : z.replace(/_/g, " ")}
                      :
                    </div>
                    <div
                      className="compare-cell-data"
                      style={
                        // z === "number_of_performance_cores" ||
                        // z === "number_of_efficient_cores" ||
                        // z === "benchmark_single_core" ||
                        z === "boost_clock" ||
                        z === "total_threads" ||
                        z === "total_cores" ||
                        z === "launch_date" ||
                        z === "cache" ||
                        z === "ram_type" ||
                        z === "speed" ||
                        z === "memory_size" ||
                        z === "memory" ||
                        z === "benchmark" ||
                        z === "memory_speed_max" ||
                        z === "max_memory" ||
                        z === "MTBF" ||
                        z === "read" ||
                        z === "write" ||
                        z === "TBW" ||
                        z === "rpm" ||
                        z === "capacity" ||
                        z === "fans_size" ||
                        z === "fans"
                          ? { color: "#ff002f" }
                          : z === "price"
                          ? { color: "#00ff9d" }
                          : { color: "white" }
                      }
                    >
                      {z === "price"
                        ? `$ ${i.type === "gpu" ? (i.price + (i.price * 30) / 100).toFixed(2) : i[z].toFixed(2)}`
                        : // : z === "launch_date"
                        // ? new Date(i[z]).toLocaleDateString("en-US", options)
                        z === "height"
                        ? `${i[z]} mm`
                        : z === "length"
                        ? `${i[z]} mm`
                        : z === "width"
                        ? `${i[z]} mm`
                        : z === "read"
                        ? `${i[z]} MB/s`
                        : z === "write"
                        ? `${i[z]} MB/s`
                        : z === "MTBF"
                        ? `${i[z]} Million Hours`
                        : // : z === "cache"
                        // ? `${i[z]} Mb`
                        z === "power"
                        ? `${i[z]} W`
                        : // : z === "memory"
                        // ? `${i[z]} Gb`
                        // : z === "memory_size"
                        // ? `${i[z]} Gb`
                        z === "speed"
                        ? `${i[z]} MHz`
                        : z === "boost_clock"
                        ? `${i[z]} GHz`
                        : z === "gpu_boost_clock"
                        ? `${i[z]} MHz`
                        : // : i[z] === 0
                        // ? `No data`
                        z === "fans_size"
                        ? `${i[z]} mm`
                        : i[z]}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </CompareSt>
  );
};

export default Compare;
