import ScrollSt from "styles/ScrollStyled";
import styled from "styled-components";

const TableSt = styled(ScrollSt)`
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: 10vw;
  overflow-y: scroll;

  // *_row_Desktop
  .row {
    width: 100%;
    display: grid;
    /* grid-template-columns: calc(60% - 30vw) 20% 20% 15vw 15vw; */
    grid-template-rows: 100%;
    border-bottom: 1px solid #111111;
    justify-self: center;
    &:hover {
      background: #080808;
      .cell {
        color: white;
      }
      .icon {
        color: white;
        cursor: pointer;
      }
    }
    // *_cell_Desktop
    .cell {
      line-height: 10vw;
      color: #848484;
      padding: 0 1vw;
      font-size: 3.5vw;
      font-family: 'Roboto regular';
      // !Dots ...
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .cell_center {
      text-align: center;
    }
    .cell_header {
      /* font-size: 3vw; */
      color: #dadada;
    }
    .cell_warning {
      color: #ff0044;
    }
    .cell_caution {
      color: #ffd900;
    }
    .cell_success {
      color: #00ffb7;
    }
    .cell_editable {
      background: #0e0e0e;
      border-style: none;
      border-radius: 1vw;
      width: 100%;
      height: 80%;
      align-self: center;
      justify-self: center;
    }
    .cell_thumbnail {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
    // *_nonde_Mobile
    .none {
      display: none;
    }
    // *_icon_Desktop
    .icon {
      width: 100%;
      height: 100%;
      justify-self: center;
      align-self: center;
      padding: 2.5vw;
      color: #848484;
    }
  }
  .fixed {
    position: sticky;
    top: 0;
    background: #040404;
  }
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: 4vw;
    overflow-y: scroll;

    // *_row_Desktop
    .row {
      width: 100%;
      display: grid;
      /* grid-template-columns: calc(60% - 20vw) 20% 20% 10vw 10vw; */
      grid-template-rows: 100%;
      border-bottom: 1px solid #111111;
      justify-self: center;
      &:hover {
        background: #080808;
        .cell {
          color: white;
        }
        .icon {
          color: white;
          cursor: pointer;
        }
        .cell_warning {
          color: #ff0044;
        }
        .cell_caution {
          color: #ffd900;
        }
        .cell_success {
          color: #00ffb7;
        }
      }
      // *_cell_Desktop
      .cell {
        line-height: 4vw;
        color: #848484;
        padding: 0 1vw;
        font-size: 1vw;
        // !Dots ...
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .cell_center {
        text-align: center;
      }
      .cell_header {
        font-family: "Roboto 900";
        color: #dadada;
      }
      .cell_warning {
        color: #ff0044;
      }
      .cell_caution {
        color: #ffd900;
      }
      .cell_success {
        color: #00ffb7;
      }
      .cell_editable {
        background: #0e0e0e;
        border-style: none;
        border-radius: 0.3vw;
        width: 100%;
        height: 80%;
        align-self: center;
        justify-self: center;
      }
      // *Desktop
      .none {
        display: block;
      }
      // *_icon_Desktop
      .icon {
        width: 100%;
        height: 100%;
        justify-self: center;
        align-self: center;
        padding: 1.3vw;
        color: #848484;
      }
    }
    .fixed {
      position: sticky;
      top: 0;
      background: #040404;
    }
  }
`;
export default TableSt;
