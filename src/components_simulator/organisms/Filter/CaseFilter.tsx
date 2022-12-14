import { componentSelectedTemplate } from "json/ComponentSelectedTemplate";
import { translatorClient } from "libs/translatorClient";
import React, { useEffect, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { Navigate, useNavigate } from "react-router-dom";
import { FilterSt } from "styles/components/organisms/FilterSt";
interface props {
  itemsComponentRef: any;
  setFilterModal: any;
  queries: any;
  setQueries: any;
  template: any;
  queriesTemplate: any;
}
// !JSON RESET TEMPLATE
const template = componentSelectedTemplate["case"];

const Filter = (props: props) => {
  const navigate = useNavigate();
  // !States
  const [state, setState] = useState(props.template);
  const [queriesTemplate, setQueriesTemplate] = useState(props.queriesTemplate);

  // !Handle SET STATE
  const handleSetState = (e: React.ChangeEvent<HTMLSelectElement>, i: string) => {
    if (i === "platform" && e.currentTarget.value === "intel") {
      setQueriesTemplate({
        ...queriesTemplate,
        socket: ["", "lga1700"],
        chipset: ["", "z690", "h670", "b660", "h610"],
      });
      setState({ ...state, [i]: e.currentTarget.value, socket: "" });
    } else if (i === "platform" && e.currentTarget.value === "amd") {
      setQueriesTemplate({
        ...queriesTemplate,
        socket: ["", "am4"],
        chipset: ["", "x570", "b550", "a520"],
      });
      setState({ ...state, [i]: e.currentTarget.value, socket: "" });
    } else if (i === "platform" && e.currentTarget.value === "") {
      setQueriesTemplate({
        ...queriesTemplate,
        socket: ["", "lga1700", "am4"],
        chipset: ["", "z690", "h670", "b660", "h610", "x570", "b550", "a520"],
      });
      setState({ ...state, [i]: e.currentTarget.value, socket: "" });
    } else {
      setState({ ...state, [i]: e.currentTarget.value });
    }
  };
  // !UseEffect
  useEffect(() => {
    setState(props.queries);
    setQueriesTemplate({
      ...props.queriesTemplate,
      //       socket:
      //         props.queries.socket === "LGA1700"
      //           ? ["", "LGA1700"]
      //           : props.queries.socket === "AM4"
      //           ? ["", "AM4"]
      //           : ["", "LGA1700", "AM4"],
    });
  }, []);
  // !Handel Submit
  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    props.itemsComponentRef.current.scrollTop = 0;
    e.preventDefault();
    props.setQueries(state);
    navigate(-1);
  };
  //   console.log(props.queriesTemplate);
  // !Set Window Location
  const setFilterModal = () => {
    props.setFilterModal(false);
  };
  // !UseEffect
  useEffect(() => {
    window.addEventListener("popstate", setFilterModal);
    return () => {
      window.removeEventListener("popstate", setFilterModal);
    };
  }, []);
  return (
    <FilterSt>
      <form className="form" onSubmit={handlerSubmit}>
        <div className="header">
          <IoChevronBackOutline className="sysIconBack" onClick={() => navigate(-1)} />
          <p>Filtros</p>
          <p
            className="reset"
            onClick={() => {
              setState(template);
              setQueriesTemplate({
                ...props.queriesTemplate,
                // socket: ["", "lga1700", "am4"],
              });
            }}
          >
            Resetear
          </p>
        </div>

        <div className="container-scrollable">
          <div className="input-container-price">
            <section className="price-range-element">
              <label className="label">Precio M??nimo</label>
              <input
                className="number"
                type="number"
                placeholder="M??nimo"
                onChange={(e) => setState({ ...state, gte: e.currentTarget.value })}
                value={state.gte === 0 ? "" : state.gte}
                onFocus={(e) => e.currentTarget.select()}
              />
            </section>
            <section className="price-range-element">
              <label className="label">Precio M??ximo</label>
              <input
                className="number"
                type="number"
                placeholder="M??ximo"
                onChange={(e) => setState({ ...state, lte: e.currentTarget.value })}
                value={state.lte === 9999999 ? "" : state.lte}
                onFocus={(e) => e.currentTarget.select()}
              />{" "}
            </section>
          </div>

          {Object.keys(queriesTemplate).map((i: any) => (
            <div className="select-container" key={i}>
              <label className="label">{translatorClient(i)}</label>
              <select
                className={`select ${state[i] !== "" ? "border-select" : ""}`}
                name="manufacturer"
                onChange={(e) => handleSetState(e, i)}
                value={state[i]}
                placeholder="Todos"
                // style={state[i] !== "" ? { border: "0.5vw solid #5100FF" } : { border: "none" }}
              >
                {queriesTemplate[i]?.map((i: any) => (
                  <option value={i} key={i}>
                    {i === "" ? "Todos" : i}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <input className="button-filter" type="submit" value="Filtrar" />
      </form>
    </FilterSt>
  );
};

export default Filter;
