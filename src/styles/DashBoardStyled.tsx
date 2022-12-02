import styled from "styled-components";
export const DashboardSt = styled.div`
  display: grid;
  grid-template-columns: 32.5% 32.5% 20% 15%;
  justify-content: space-evenly;
  align-content: flex-end;
  padding-bottom: 1vw;

  /* gap: 0.5vw; */

  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
  }
  // *_dashboard-title_***
  .dashboard_title {
    width: 100%;
    /* padding: 0 4vw; */
    color: white;
    .dashboard_h1 {
      font-size: 6vw;
    }
    .dashboard_p {
      font-size: 3vw;
      line-height: 3vw;
      color: #969696;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      span {
        width: 2vw;
        height: 2vw;
        background: #00ffea;
        margin-right: 1vw;
        border-radius: 2vw;
      }
    }
  }
  // *_cell_***
  .cell {
    width: 100%;
    justify-self: center;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // *_label_***
    .label {
      width: 100%;
      color: #8e8e8e;
      font-size: 2.5vw;
      font-family: "Roboto 300";
    }
    .label_padding_left {
      padding-left: 0vw;
    }
    // *_input_***
    .input {
      background: none;
      width: 100%;
      height: 8vw;
      font-size: 3.5vw;
      color: white;
      border-style: none;
      outline: none;
      padding: 1vw 0;
      font-family: "Roboto 900";

      // !Dots ...
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .center {
      text-align: center;
    }
    .input_select {
      option {
        color: black;
        text-align: start;
      }
    }
    .input_editable {
      background: #0e0e0e;
      border-radius: 1vw;
    }
    .input_warning {
      color: #ff0044;
    }
    .input_success {
      color: #00ffb7;
    }
  }
  // *_button_submit_***
  .button_submit {
    width: 100%;
    height: 10vw;
    font-size: 3vw;
    color: white;
    border-style: none;
    outline: none;
    background: #6200ff;
    border-radius: 1vw;
    justify-self: center;
    align-self: center;
    &:hover {
      background: #5600e0;
    }
  }
  .button_fake {
    background: #0f0f0f;
    &:hover {
      background: #0b0b0b;
    }
  }
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    justify-content: space-evenly;
    align-content: flex-end;
    padding-bottom: 1vw;
    /* gap: 0.5vw; */

    input[type="date"]::-webkit-calendar-picker-indicator {
      filter: invert(1);
    }
    // *_dashboard-title_***
    .dashboard_title {
      width: 100%;
      /* padding: 0 4vw; */
      color: white;
      .dashboard_h1 {
        font-family: "Roboto 800";
        font-size: 2vw;
      }
      .dashboard_p {
        font-size: 1vw;
        line-height: 1vw;
        color: #969696;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        span {
          width: 1vw;
          height: 1vw;
          background: #00ffea;
          margin-right: 0.5vw;
          border-radius: 1vw;
        }
      }
    }
    // *_cell_***
    .cell {
      justify-self: center;
      align-self: center;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      // *_label_***
      .label {
        width: 100%;
        color: #8e8e8e;
        font-size: 0.8vw;
      }
      .label_padding_left {
        padding-left: 1vw;
      }

      // *_input_***
      .input {
        background: none;
        /* width: 100%; */
        height: 3vw;
        font-family: "Roboto 900";
        font-size: 1.3vw;

        color: white;
        border-style: none;
        outline: none;
        padding: 0.5vw 1vw;
        // !Dots ...
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .center {
        text-align: center;
      }
      .input_select {
        option {
          color: black;
          text-align: start;
        }
      }
      .input_editable {
        border-radius: 0.5vw;
        background: #0e0e0e;
      }
      .input_warning {
        color: #ff0044;
      }
      .input_success {
        color: #00ffb7;
      }
    }
    // *_button_submit_***
    .button_submit {
      width: 100%;
      height: 3.5vw;
      font-size: 1.2vw;
      color: white;
      border-style: none;
      outline: none;
      background: #6200ff;
      border-radius: 0.5vw;
      &:hover {
        background: #5600e0;
      }
    }
    .button_fake {
      background: #0f0f0f;
      &:hover {
        background: #0b0b0b;
      }
    }
  }
`;
