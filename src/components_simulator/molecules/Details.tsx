import React from "react";
import styled from "styled-components";
const DetailsSt = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: 15vw;
  /* gap: 1vw; */
  /* margin-top: 1vw; */
  .detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 0.1vw solid #222222;

    .label {
      width: 100%;
      font-family: "Roboto 300";
      font-size: 3vw;
      text-transform: capitalize;
      color: #a0a0a0;
      padding: 0 10vw;
    }
    .contain {
      width: 100%;
      font-family: "Roboto 900";
      font-size: 3.5vw;
      color: white;
      padding: 0 10vw;
      /* text-transform: capitalize; */
      //!Dots ...
      text-overflow: ellipsis;
      overflow: hidden;
      // Addition lines for 2 line or multiline ellipsis
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: normal;
    }
  }

  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    grid-auto-rows: 5vw;
    /* gap: 0.5vw; */
    /* margin-top: 1vw; */
    .detail {
      .label {
        font-size: 1vw;
        color: #a0a0a0;
        padding: 0 5vw;
      }
      .contain {
        font-size: 1.3vw;
        padding: 0 5vw;
      }
    }
  }
`;
interface props {
  manufaturer: string;
  model: string;
  objectKeys: any;
  state: any;
}
const Details = (props: props) => {
  //   var options: any = { year: "numeric", month: "short", day: "numeric" };

  return (
    <DetailsSt>
      {" "}
      <div className="detail">
        <section className="label">Model:</section>{" "}
        <section className="contain">
          {props.manufaturer?.toUpperCase()} {props.model}
        </section>
      </div>
      {props.objectKeys.sort().map((i: any) => (
        <div className="detail" key={i}>
          <section className="label">{i === 'power' ? "Consumption" : i.replace(/_/g, " ")}:</section>{" "}
          <section className="contain">
            {
              //     i === "launch_date"
              //       ? new Date(props.state[i]).toLocaleDateString("en-US", options)
              //       :

              i === "height"
                ? `${props.state[i]} mm`
                : i === "length"
                ? `${props.state[i]} mm`
                : i === "width"
                ? `${props.state[i]} mm`
                : i === "read"
                ? `${props.state[i]} MB/s`
                : i === "write"
                ? `${props.state[i]} MB/s`
                : i === "MTBF"
                ? `${props.state[i]} Million Hours`
                // : i === "memory"
                // ? `${props.state[i]} Gb`
                // : i === "memory_size"
                // ? `${props.state[i]} Gb`
                : i === "memory_speed_max"
                ? `${props.state[i]} MHz`
                : i === "speed"
                ? `${props.state[i]} MHz`
                : i === "boost_clock"
                ? `${props.state[i]} MHz`
                // : i === "cache"
                // ? `${props.state[i]} MB`
                : i === "power"
                ? `${props.state[i]} W`
                : // : props.state[i] === 0
                // ? `No data`
                i === "fans_size"
                ? `${props.state[i]} mm`
                : i === "gpu_boost_clock"
                ? `${props.state[i]} MHz`
                : props.state[i]
            }
          </section>
        </div>
      ))}
    </DetailsSt>
  );
};

export default Details;
