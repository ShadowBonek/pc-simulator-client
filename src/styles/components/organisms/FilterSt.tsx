import BottomArrowIcon from "img/bottom-arrow-icon.png";
import styled from "styled-components";
export const FilterSt = styled.div`
  width: 100%;
  height: 100%;
  background: #000000;
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .form {
    width: 100%;
    height: 100%;
    background: #000000;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    color: white;
    border-radius: 0vw;
    .header {
      width: 100%;
      height: 15vw;
      margin-top: 0vw;
      margin-bottom: 0.5vw;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      font-family: "Roboto regular";
      font-size: 6vw;
      position: relative;
      .sysIconBack {
        position: absolute;
        left: 1vw;
        width: 10vw;
        height: 10vw;
        cursor: pointer;
      }
      .reset {
        position: absolute;
        right: 4vw;
        font-family: "Roboto 300";
        font-size: 6vw;
        color: #b6b6b6;
        cursor: pointer;
      }
    }
    .container-scrollable {
      width: 90%;
      height: calc(100% - 50vw);
      display: grid;
      grid-template-columns: 100%;
      grid-auto-rows: 20vw;
      gap: 5vw;
      border-top: 0.1vw solid #2f2f2f;
      border-bottom: 0.1vw solid #2f2f2f;
      overflow-y: scroll;
      padding-top: 4vw;
      padding-bottom: 4vw;
      .input-container-price {
        display: grid;
        grid-template-columns: calc(50% - 1vw) calc(50% - 1vw);
        grid-template-rows: 100%;
        gap: 2vw;

        .price-range-element {
          display: flex;
          flex-direction: column;
          .label {
            width: 100%;
            height: 5vw;
            line-height: 5vw;
            color: #909090;
            font-family: "Roboto 300";
            font-size: 4vw;
            text-transform: capitalize;
            text-align: start;
          }
          .number {
            width: 100%;
            height: 15vw;
            background: #141414;
            outline: none;
            border-style: none;
            color: white;
            font-family: "Roboto 900";
            font-size: 4vw;
            border-radius: 2vw;
            padding: 0 4vw;
          }
        }
      }
      .select-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .label {
          width: 100%;
          height: 5vw;
          line-height: 5vw;
          color: #909090;
          font-family: "Roboto 300";
          font-size: 4vw;
          text-transform: capitalize;
          padding-left: 1vw;
        }
        .select {
          width: 100%;
          height: 15vw;
          background: #141414;
          outline: none;
          border-style: none;
          color: white;
          font-family: "Roboto 900";
          font-size: 4vw;
          border-radius: 2vw;
          padding: 0 4vw;
          cursor: pointer;
          //!hide ugly arrow
          appearance: none;
          -moz-appearance: none;
          -webkit-appearance: none;
          background-image: url(${BottomArrowIcon});
          background-repeat: no-repeat;
          background-position: calc(100% - 3vw) center;
          background-size: 6vw;
        }
        .border-select {
          border: 0.5vw solid #5100ff;
        }
      }
    }

    .button-filter {
      background: #5100ff;
      width: 50vw;
      height: 15vw;
      border-style: none;
      outline: none;
      border-radius: 1vw;
      color: white;
      font-family: "Roboto 900";
      font-size: 5vw;
      cursor: pointer;
      margin-top: 4vw;
      /* &:hover {
        color: #000000;
        background: #ffffff;
      } */
    }
  }
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    background: #080808;

    .form {
      width: 35vw;
      height: 40vw;
      border-radius: 0.5vw;
      background: #000000;
      .header {
        width: 100%;
        height: 4vw;
        margin-top: 0.5vw;
        margin-bottom: 0.5vw;
        font-size: 1.5vw;
        .sysIconBack {
          left: 1vw;
          width: 3vw;
          height: 3vw;
        }
        .reset {
          right: 1.5vw;
          font-size: 1.5vw;
        }
      }
      .container-scrollable {
        width: 80%;
        height: calc(100% - 11vw);
        grid-auto-rows: 5vw;
        gap: 0.5vw;
        padding-top: 0.5vw;
        padding-bottom: 0.5vw;
        .input-container-price {
          display: grid;
          grid-template-columns: calc(50% - 1vw) calc(50% - 1vw);
          grid-template-rows: 100%;
          gap: 1vw;

          .price-range-element {
            display: flex;
            flex-direction: column;
            .label {
              height: 2vw;
              line-height: 2vw;
              font-size: 1vw;
            }
            .number {
              width: 100%;
              height: 3vw;
              font-size: 1.2vw;
              border-radius: 0.3vw;
              padding: 0 1vw;
            }
          }
        }
        .select-container {
          width: calc(100% - 1vw);
          .label {
            width: 100%;
            height: 2vw;
            line-height: 2vw;
            font-size: 1vw;
            padding-left: 0.5vw;
          }
          .select {
            height: 3vw;
            font-size: 1.2vw;
            border-radius: 0.3vw;
            padding: 0 1vw;

            //!hide ugly arrow
            appearance: none;
            -moz-appearance: none;
            -webkit-appearance: none;
            background-image: url(${BottomArrowIcon});
            background-repeat: no-repeat;
            background-position: calc(100% - 1vw) center;
            background-size: 1.5vw;
          }
          .border-select {
            border: 0.2vw solid #5100ff;
          }
        }
      }

      .button-filter {
        background: #5100ff;
        width: 15vw;
        height: 4vw;
        border-radius: 0.3vw;
        font-size: 1.4vw;
        margin-top: 0.5vw;
        &:hover {
          color: #000000;
          background: #ffffff;
        }
      }
    }
  }
`;
