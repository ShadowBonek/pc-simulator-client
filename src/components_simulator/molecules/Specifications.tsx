import React from "react";
import styled from "styled-components";
const SpecificationsSt = styled.div`
  width: 100%;
  height: auto;
  .specifications-item {
    border-bottom: 0.1vw solid #1d1c1c;
    width: 100%;
    height: auto;
    padding: 5vw 0;
    .specifications-title {
      font-family: "Roboto 900";
      font-size: 3vw;
      color: white;
      padding: 0vw 10vw;
    }
    .specifications-content {
      width: 100%;
      height: auto;
      font-family: "Roboto 300";
      font-size: 3vw;
      color: white;
      padding: 0vw 10vw 0vw 10vw;
      background: none;
      border-style: none;
      outline: none;
      resize: none;
      white-space: pre-line;
      /* line-height: 5vw; */
    }
  }
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    width: 100%;
    height: auto;
    .specifications-item {
      border-bottom: 0.1vw solid #1d1c1c;
      width: 100%;
      height: auto;
      padding: 2vw 0;

      .specifications-title {
        font-family: "Roboto 900";
        font-size: 1.2vw;
        color: white;
        padding: 0vw 5vw;
      }
      .specifications-content {
        width: 100%;
        height: auto;
        font-family: "Roboto 300";
        font-size: 1.2vw;
        color: white;
        padding: 0vw 5vw 0vw 5vw;
        background: none;
        border-style: none;
        outline: none;
        resize: none;
        white-space: pre-line;
        /* line-height: 2vw; */
      }
    }
  }
`;
interface props {
  specifications: any;
}
const Specifications = (props: props) => {
//   props.specifications.sort((a: any, b: any) => a.title.localeCompare(b.title));
  return (
    <SpecificationsSt>
      {props.specifications.map((i: any) => (
        <div className="specifications-item" key={i.key}>
          <div className="specifications-title">{i.title}:</div>
          <div className="specifications-content">{i.content}</div>
        </div>
      ))}
    </SpecificationsSt>
  );
};

export default Specifications;
