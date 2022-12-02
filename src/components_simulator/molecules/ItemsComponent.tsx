import { useIntersectionObserver } from "hooks/useIntersectionObserver";
import React, { Fragment, useEffect, useRef } from "react";
import styled from "styled-components";
import Item from "./Item";
import Spinner from "../atoms/Spinner";
const ItemsComponentSt = styled.div`
  overflow-y: scroll;
  margin-top: 3vw;

  .grid-items {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(3, 32vw);
    grid-auto-rows: 32vw;
    gap: 1vw;
    justify-content: center;
    align-content: flex-start;
    padding-bottom: 0vw;
    padding-right: 0.5vw;
    // !Scroll
    scroll-behavior: auto;
    -webkit-scroll-behavior: auto;
  }
  .no-results {
    font-family: "Roboto regular";
    color: #a7a7a7;
    font-size: 5vw;
    padding: 2vw 4vw;
  }
  .load-more {
    width: 100%;
    height: 2vw;
  }
  .spinner-container {
    width: 100%;
    height: 3rem;
    background-color: #220462;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    overflow-y: scroll;
    margin-top: 0.5vw;
    .grid-items {
      width: 100%;
      height: auto;
      display: grid;
      grid-template-columns: repeat(6, 10.5vw);
      grid-auto-rows: 10.5vw;
      gap: 0.2rem;
      justify-content: center;
      align-content: flex-start;
      padding-bottom: 1vw;
      padding-right: 0.5vw;

      // !Scroll
      scroll-behavior: auto;
      -webkit-scroll-behavior: auto;
    }
    .no-results {
      font-family: "Roboto regular";
      color: #a7a7a7;
      font-size: 1.5vw;
      padding: 0vw 2vw;
    }
    .load-more {
      width: 100%;
      height: 0.5vw;
      /* background: red; */
    }
    .spinner-container {
      width: 100%;
      height: 3rem;
      background-color: #220462;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }
  }
`;
interface props {
  itemsComponentRef: any;
  componentSelected: string | undefined;
  data: any;
  fetchNextPage: any;
  hasNextPage: any;
  isFetchingNextPage: any;
}
const ItemsComponent = (props: props) => {
  // !Logica para infinite scroll
  const loadMoreRef = useRef(null);
  const isBottomVisible = useIntersectionObserver(
    loadMoreRef,
    {
      rootMargin: "0px 400px 0px 400px",
      threshold: 0, //trigger event as soon as the element is in the viewport.
    },
    false // don't remove the observer after intersected.
  );
  // ! Scroll to TOP
  //   const itemsComponent = useRef<any>(null);
  //   const scrollToTop = () => {
  //     itemsComponent.current.scrollTop = 0;
  //   };
  useEffect(() => {
    if (isBottomVisible) {
      props.fetchNextPage();
    }
    //     scrollToTop();
  }, [isBottomVisible]);

  if (props.data.pages[0].code === 51091) {
    return <div></div>;
  }

  return (
    <ItemsComponentSt ref={props.itemsComponentRef}>
      <div className="grid-items">
        {props.data.pages.map((group: any, e: any) => {
          return (
            <Fragment key={e}>
              {group.rows.map((i: any) => (
                <Item
                  key={i.id}
                  uri={`details?model=${i.model}&component=${props.componentSelected}&idComponent=${i.id}`}
                  manufacturer={i.manufacturer}
                  model={i.model}
                  summary={""}
                  //   summary={
                  //     props.componentSelected === "power"
                  //       ? `${i.wattage}W • ${i.efficiency_rating} • ${i.form_factor}`
                  //       : props.componentSelected === "case"
                  //       ? `${i.form_factor} • (PSU ${i.PSU.toUpperCase()})`
                  //       : props.componentSelected === "cpu"
                  //       ? `C${i.total_cores} • T${i.total_threads} • ${i.boost_clock}Ghz`
                  //       : props.componentSelected === "mobo"
                  //       ? `${i.platform} • ${i.ram_type} • ${i.memory_speed_max}MHz`
                  //       : props.componentSelected === "ram"
                  //       ? `${i.memory_size} • ${i.ram_type} • ${i.speed}MHz`
                  //       : props.componentSelected === "gpu"
                  //       ? `${i.memory} • ${i.memory_type} • ${i.benchmark} G3D`
                  //       : props.componentSelected === "nvme"
                  //       ? `${i.capacity} • ${i.read}MB/s • ${i.write} MB/s`
                  //       : props.componentSelected === "ssd"
                  //       ? `${i.capacity} • ${i.read}MB/s • ${i.write} MB/s`
                  //       : props.componentSelected === "hdd"
                  //       ? `${i.capacity} • ${i.rpm}RPM • ${i.cache}`
                  //       : props.componentSelected === "cooler"
                  //       ? `${i.noise_level} • ${i.fans_size}mm`
                  //       : ""
                  //   }
                  type={i.type}
                  price={i.price}
                  img={i.imageS}
                  quantity={i.quantity}
                  error={i.error}
                  warning={i.warning}
                />
              ))}
            </Fragment>
          );
        })}
      </div>
      {props.data.pages[0].rows.length === 0 && <div className="no-results">Sin resultados.</div>}

      {props.isFetchingNextPage && (
        <div className="spinner-container">
          <Spinner bgColor="black" />
        </div>
      )}
      {/* {props.hasNextPage && <div ref={loadMoreRef} className="load-more"></div>} */}
      <div ref={loadMoreRef} className="load-more"></div>
    </ItemsComponentSt>
  );
};

export default ItemsComponent;
