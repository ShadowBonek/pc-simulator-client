import styled from "styled-components";
//*icons
import { useDispatch, useSelector } from "react-redux";
import { StoreInterface } from "interfaces/storeTemplate";
import { resetAllItems } from "redux/actions/appAction";
import { setupTemplate } from "json/setupTemplate";
import amazonBtn from "img/amazon-btn.png";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
const DasboardSt = styled.div`
  display: grid;
  grid-template-columns: 35% 30% 22%;
  grid-template-rows: 14vw;
  gap: 2vw;
  justify-content: center;
  align-content: center;

  .element {
    align-self: center;

    width: 100%;
    height: 12vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title {
      width: 100%;
      height: 4vw;
      line-height: 4vw;
      font-family: "Roboto 300";
      font-size: 3vw;
      color: #9b9b9b;
      // !Dots ...
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .data {
      width: 100%;
      height: 8vw;
      line-height: 8vw;
      font-family: "Roboto 900";
      font-size: 6vw;
      color: white;
      // !Dots ...
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .reset-dashboard-button {
    /* justify-self: center; */
    align-self: center;
    height: 11vw;
    background: #5100ff;
    border-radius: 1vw;
    font-family: "Roboto 700";
    color: white;
    font-size: 4vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    /* &:hover {
      background: #ffffff;
      color: #000000;
    } */
  }

  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    display: grid;
    grid-template-columns: 40% 30% calc(25% - 2vw);
    grid-template-rows: 3vw;
    gap: 0.5vw;
    justify-content: center;
    align-content: center;
    .element {
      width: 100%;
      height: 3vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title {
        width: 100%;
        height: 1vw;
        line-height: 1vw;
        font-family: "Roboto 300";
        font-size: 0.9vw;
        color: #9b9b9b;
      }
      .data {
        width: 100%;
        height: 2vw;
        line-height: 2vw;
        font-family: "Roboto 900";
        font-size: 2vw;
        color: white;
        // !Dots ...
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .reset-dashboard-button {
      height: 3vw;
      background: #5100ff;
      border-radius: 0.3vw;
      font-family: "Roboto 900";
      color: white;
      font-size: 1.2vw;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        background: #ffffff;
        color: #000000;
      }
    }
  }
`;
const Dashboard = () => {
  const dispatch = useDispatch<any>();
  const app = useSelector((store: StoreInterface) => store.app);
  // !TOTAL PRICE
  const totalPrice = Object.keys(app.setup)
    .map((i: any) => {
      return app.setup[i].price * app.setup[i].quantity;
    })
    .reduce(function (sum: any, number: any) {
      const updatedSum = sum + number;
      return updatedSum;
    }, 0);
  // !TOTAL POWER
  const totalPower = Object.keys(app.setup)
    .map((i: any) => {
      return app.setup[i].power * app.setup[i].quantity;
    })
    .reduce(function (sum: any, number: any) {
      const updatedSum = sum + number;
      return updatedSum;
    }, 0);
  //   // !RESET ALL ITEMS
  //   const dispatchResetAllItems = () => {
  //     dispatch(resetAllItems(setupTemplate));
  //   };
  const psuFunction = (number: number) => {
    switch (true) {
      case number >= 0 && number <= 450:
        return 450;
      case number >= 450 && number <= 500:
        return 500;
      case number >= 500 && number <= 550:
        return 550;
      case number >= 550 && number <= 600:
        return 600;
      case number >= 600 && number <= 650:
        return 650;
      case number >= 650 && number <= 700:
        return 700;
      case number >= 700 && number <= 750:
        return 750;
      case number >= 750 && number <= 800:
        return 800;
      case number >= 800 && number <= 850:
        return 850;
      case number >= 850 && number <= 1000:
        return 1000;
      case number >= 1000 && number <= 1200:
        return 1200;
      case number >= 1200 && number <= 1600:
        return 1600;
      default:
        return 2000;
    }
  };
  // !GO AMAZON
  const goAmazon = () => {
    window.open(
      `https://www.amazon.com/s?k=power+supply+${psuFunction(
        totalPower + 75
      )}w&sprefix=power+suppl%2Caps%2C174&linkCode=ll2&tag=natus3k-20&linkId=4eb8f97a159199659eed140620026175&language=es_US&ref_=as_li_ss_tl`,
      "_blank"
    );
  };
  return (
    <DasboardSt>
      <div className="element">
        <div className="title" title="Manufacturer's Suggested Retail Price">
          Precio Total{" "}
        </div>
        <section className="data">{totalPrice} $</section>
      </div>

      <div className="element">
        <div className="title" title="Total consumption estimated">
          Recomendado (PSU)
        </div>
        <section className="data">
          {totalPower < 400 ? psuFunction(totalPower) : psuFunction(totalPower + 75)} W
        </section>{" "}
      </div>

      <div className="reset-dashboard-button" onClick={goAmazon}>
        Comprar
      </div>
    </DasboardSt>
  );
};

export default Dashboard;
