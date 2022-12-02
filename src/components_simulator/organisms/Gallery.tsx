import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ArrowLeftIcon from "icons/ArrowLeftIcon";
import ArrowRightIcon from "icons/ArrowRightIcon";
import Spinner from "../atoms/Spinner";
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
const GallerySt = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  user-select: none;
  overflow: hidden;
  background: black;
  .header-gallery-arrow-title {
    width: 100%;
    height: 15vw;
    background: #000000;
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
    .header-title-gallery {
      width: calc(100% - 20vw);
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
  }
  .poster-container {
    width: 100%;
    height: 100vw;
    position: relative;
    display: flex;
    /* margin-top: 10vw; */
    .poster {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    .spinner-poster {
      width: 100%;
      height: 100%;
      position: absolute;
    }
  }
  .thumbnails-arrow-container {
    width: 100%;
    height: 40vw;
    display: grid;
    grid-template-columns: 0vw calc(100% - 0vw) 0vw;
    grid-template-rows: 100%;
    margin-bottom: 15vw;
    .thumbnails-gallery {
      width: auto;
      height: 40vw;
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 40vw;
      grid-template-rows: 100%;
      gap: 1vw;
      overflow-x: scroll;
      overflow-y: hidden;
      // !Scroll Behavior
      scroll-behavior: smooth;
      -webkit-scroll-behavior: smooth;

      .thumb-gallery {
        background-color: #0a0a0a92;
        width: 40vw;
        height: 40vw;
        object-fit: contain;
        border-radius: 1vw;
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        &:hover {
          background: #1b1a1a;
        }
      }
    }
    .arrow-thumbnails {
      width: 100%;
      height: 100%;
      background-color: #000000;
      color: #585858;
      cursor: pointer;
      /* &:hover {
        color: #ffffff;
      } */
    }
  }
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    .header-gallery-arrow-title {
      width: 100%;
      height: 4vw;
      .sysIconArrowBack {
        width: 3vw;
        height: 3vw;
        left: 1vw;
      }
      .header-title-gallery {
        width: calc(100% - 20vw);
        font-size: 2vw;
        left: 5vw;
      }
    }
    .poster-container {
      width: 100%;
      height: calc(100vh - 15vw);
      position: relative;
      display: flex;
      .poster {
      }
      .spinner-poster {
      }
    }
    .thumbnails-arrow-container {
      width: 100%;
      height: 10vw;
      display: grid;
      grid-template-columns: 4vw calc(100% - 8vw) 4vw;
      grid-template-rows: 100%;
      margin-bottom: 0.5vw;
      .thumbnails-gallery {
        width: auto;
        height: 10vw;
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: 10vw;
        grid-template-rows: 100%;
        gap: 0.5vw;
        overflow-x: scroll;
        overflow-y: hidden;
        // !Scroll Behavior
        scroll-behavior: smooth;
        -webkit-scroll-behavior: smooth;

        .thumb-gallery {
          background-color: #0a0a0a92;
          width: 10vw;
          height: 10vw;
          object-fit: contain;
          border-radius: 0.3vw;
          &:hover {
            background: #181717;
          }
        }
      }
      .arrow-thumbnails {
        width: 100%;
        height: 100%;
        background-color: #000000;
        color: #585858;
        cursor: pointer;
      }
    }
  }
`;
interface props {
  imageM: [""];
  imageS: [""];
  type: string;
  data: any;
  setGalleryModal: any;
}
const Gallery = (props: props) => {
  const navigate = useNavigate();
  const [indexPoster, setIndexPoster] = useState(0);
  const [spinnerPoster, setSpinnerPoster] = useState(true);
  const moviesGenderRef = useRef<any>(null);

  const handleScroll = (direction: string) => {
    if (direction === "right") moviesGenderRef.current.scrollLeft += 1000;
    if (direction === "left") moviesGenderRef.current.scrollLeft -= 1000;
  };

  const handleCLick = (direction: string) => {
    direction === "right" && setIndexPoster(indexPoster + 1);
    direction === "left" && setIndexPoster(indexPoster - 1);
    setSpinnerPoster(true);
  };
  // !Set Window Location
  const setGalleryModal = () => {
    props.setGalleryModal(false);
  };
  // !UseEffect
  useEffect(() => {
    window.addEventListener("popstate", setGalleryModal);
    return () => {
      window.removeEventListener("popstate", setGalleryModal);
    };
  }, []);
  return (
    <GallerySt>
      <div className="header-gallery-arrow-title">
        <IoChevronBackOutline className="sysIconArrowBack" onClick={() => navigate(-1)} />
        <h1 className="header-title-gallery">
          {props.data.manufacturer} {props.data.model}
        </h1>
      </div>
      <div className="poster-container">
        <img
          className="poster"
          src={` http://localhost:4000/static/${props.type}/${props.imageM[indexPoster]}`}
          alt=""
          onLoad={(e) => e.currentTarget.complete && setSpinnerPoster(false)}
        />
        {spinnerPoster && (
          <section className="spinner-poster">
            <Spinner bgColor="black" />
          </section>
        )}
      </div>

      <div className="thumbnails-arrow-container">
        <ArrowLeftIcon className="arrow-thumbnails" onClick={() => handleScroll("left")} />
        <div className="thumbnails-gallery" ref={moviesGenderRef}>
          {props.imageS.map((i, index) => (
            <img
              className="thumb-gallery"
              src={` http://localhost:4000/static/${props.type}/${i}`}
              alt=""
              key={i}
              onClick={() => {
                index !== indexPoster && setSpinnerPoster(true);
                index !== indexPoster && setIndexPoster(index);
              }}
            />
          ))}
        </div>
        <ArrowRightIcon className="arrow-thumbnails" onClick={() => handleScroll("right")} />
      </div>
    </GallerySt>
  );
};

export default Gallery;
