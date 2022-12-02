import React from "react";
import styled from "styled-components";

const SpinnerSt = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  .html-spinner {
    width: 8vw;
    height: 8vw;
    border: .8vw solid #ffffff16;
    border-top: .8vw solid white;
    border-radius: 50%;
  }

  .html-spinner {
    -webkit-transition-property: -webkit-transform;
    -webkit-transition-duration: 0.5;
    transition-duration: 0.5;
    -webkit-animation-name: rotate;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;

    -moz-transition-property: -moz-transform;
    -moz-animation-name: rotate;
    -moz-animation-duration: 0.5s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: linear;

    transition-property: transform;
    animation-name: rotate;
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @-moz-keyframes rotate {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    .html-spinner {
      width: 2.5vw;
      height: 2.5vw;
      border: 0.25vw solid #ffffff16;
      border-top: 0.25vw solid white;
      border-radius: 50%;
    }
  }
`;
interface props {
  bgColor: string;
}
const Spinner = (props: props) => {
  return (
    <SpinnerSt style={{ background: props.bgColor }}>
      <div className="html-spinner"></div>
    </SpinnerSt>
  );
};

export default Spinner;
