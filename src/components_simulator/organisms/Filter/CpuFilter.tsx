import React, { useCallback, useEffect, useRef, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { FilterSt } from "styles/components/organisms/FilterSt";
import "styles/components/organisms/multiRangeSlider.css";
import classnames from "classnames";
import { StoreInterface } from "interfaces/storeTemplate";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { componentSelectedTemplate } from "json/ComponentSelectedTemplate";
interface props {
  itemsComponentRef: any;
  setFilterModal: any;
  queries: any;
  setQueries: any;
  template: any;
  queriesTemplate: any;
}
// !JSON RESET TEMPLATE
const template = componentSelectedTemplate["cpu"];

const Filter = (props: props) => {
  const navigate = useNavigate();

  // !States
  const [state, setState] = useState(props.template);
  const [queriesTemplate, setQueriesTemplate] = useState(props.queriesTemplate);

  // !Handle SET STATE
  const handleSetState = (e: React.ChangeEvent<HTMLSelectElement>, i: string) => {
    if (i === "manufacturer" && e.currentTarget.value === "intel") {
      setQueriesTemplate({ ...queriesTemplate, socket: ["", "lga1700"] });
      setState({ ...state, [i]: e.currentTarget.value, socket: "" });
    } else if (i === "manufacturer" && e.currentTarget.value === "amd") {
      setQueriesTemplate({ ...queriesTemplate, socket: ["", "am4"] });
      setState({ ...state, [i]: e.currentTarget.value, socket: "" });
    } else if (i === "manufacturer" && e.currentTarget.value === "") {
      setQueriesTemplate({ ...queriesTemplate, socket: ["", "lga1700", "am4"] });
      setState({ ...state, [i]: e.currentTarget.value, socket: "" });
    } else {
      setState({ ...state, [i]: e.currentTarget.value });
    }
  };
  // !UseEffect
  useEffect(() => {
    //     console.log(props.queries);

    setState(props.queries);
    setQueriesTemplate({
      ...props.queriesTemplate,
      socket:
        props.queries.socket === "LGA1700"
          ? ["", "LGA1700"]
          : props.queries.socket === "AM4"
          ? ["", "AM4"]
          : ["", "LGA1700", "AM4"],
    });
  }, []);

  // !Handel Submit
  const handlerSubmit = (e: any) => {
    e.preventDefault();
    props.setQueries({ ...state, gte_cores: minVal, lte_cores: maxVal });
    navigate(-1);
  };

  // !MULTI RANGE SLIDER
  const min = 1;
  const max = 64;
  const [minVal, setMinVal] = useState(props.queries.gte_cores);
  const [maxVal, setMaxVal] = useState(props.queries.lte_cores);
  const minValRef: any = useRef(null);
  const maxValRef: any = useRef(null);
  const range: any = useRef(null);

  // Convert to percentage
  const getPercent = useCallback((value) => Math.round(((value - min) / (max - min)) * 100), [min, max]);

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);
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
          <p>Filters</p>
          <p
            className="reset"
            onClick={() => {
              setMinVal(props.template.gte_cores);
              setMaxVal(props.template.lte_cores);
              setState(template);
              setQueriesTemplate({
                ...props.queriesTemplate,
                socket: ["", "lga1700", "am4"],
              });
            }}
          >
            Reset
          </p>
        </div>

        <div className="container-scrollable">
          <div className="input-container-price">
            <section className="price-range-element">
              <label className="label">Price Min</label>
              <input
                className="number"
                type="number"
                placeholder="Minimum"
                onChange={(e) => setState({ ...state, gte: e.currentTarget.value })}
                value={state.gte === 0 ? "" : state.gte}
                onFocus={(e) => e.currentTarget.select()}
              />
            </section>
            <section className="price-range-element">
              <label className="label">Price Max</label>
              <input
                className="number"
                type="number"
                placeholder="Maximum"
                onChange={(e) => setState({ ...state, lte: e.currentTarget.value })}
                value={state.lte === 9999999 ? "" : state.lte}
                onFocus={(e) => e.currentTarget.select()}
              />{" "}
            </section>
          </div>

          {/* <div className="select-container"> */}
          {/* <label className="label">Max Cores: {state.total_cores} </label> */}
          <div className="container">
            <input
              type="range"
              min={min}
              max={max}
              value={minVal}
              ref={minValRef}
              onChange={(event) => {
                const value = Math.min(+event.target.value, maxVal - 1);
                setMinVal(value);
                event.target.value = value.toString();
              }}
              className={classnames("thumb thumb--zindex-3", {
                "thumb--zindex-5": minVal > max - 100,
              })}
            />
            <input
              type="range"
              min={min}
              max={max}
              value={maxVal}
              ref={maxValRef}
              onChange={(event) => {
                const value = Math.max(+event.target.value, minVal + 1);
                setMaxVal(value);
                event.target.value = value.toString();
              }}
              className="thumb thumb--zindex-4"
            />

            <div className="slider">
              <div className="slider__track" />
              <div ref={range} className="slider__range" />
              <div className="slider__title">Cores</div>
              <div className="slider__left-value">{minVal}</div>
              <div className="slider__right-value">{maxVal}</div>
            </div>
          </div>
          {/* </div> */}
          {Object.keys(queriesTemplate).map((i) => (
            <div className="select-container" key={i}>
              <label className="label">{i.replace(/_/g, " ")}</label>
              <select
                className={`select ${state[i] !== "" ? "border-select" : ""}`}
                name="manufacturer"
                onChange={(e) => handleSetState(e, i)}
                value={state[i]}
                placeholder="All"
                // style={state[i] !== "" ? { border: ".0625rem solid #5100FF" } : { border: "none" }}
              >
                {queriesTemplate[i]?.map((i: any) => (
                  <option value={i} key={i}>
                    {i === "" ? "All" : i}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <input className="button-filter" type="submit" value="See Listings" />
      </form>
    </FilterSt>
  );
};

export default Filter;
