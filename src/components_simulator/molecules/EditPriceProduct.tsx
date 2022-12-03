import React, { useEffect, useState } from "react";
import { MdModeEditOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const EditPriceSt = styled.div`
  width: 100%;
  height: 100%;
  background: #050505;
  position: sticky;
  top: 0;
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .inputs-container-edit-price {
    background: #000000;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 1vw;
    .title-edit-price {
      width: 100%;
      height: 15vw;
      line-height: 15vw;
      font-family: "Roboto 900";
      font-size: 6vw;
      color: white;
      text-align: center;
    }
    .inpunt-change {
      width: 80%;
      height: auto;
      .label {
        height: 3vw;
        line-height: 3vw;
        font-family: "Roboto 300";
        color: #7c7c7c;
        font-size: 3vw;
        text-align: start;
        margin-left: 1vw;
      }
      .input-icon-container {
        width: 100%;
        height: 15vw;
        background: #141414;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        border-radius: 1vw;
        .input {
          width: 100%;
          height: 15vw;
          padding-left: 5vw;
          padding-right: 15vw;
          font-family: "Roboto 900";
          color: #ffffff;
          font-size: 5vw;
          border-style: none;
          background: none;
          position: absolute;
        }
        .sysIconEdit {
          color: #ffffff;
          position: absolute;
          right: 0;
          top: 0;
          width: 15vw;
          height: 15vw;
          padding: 5vw;
        }
      }
    }
    .buttons-edit-price {
      width: 80%;
      height: 15vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 5vw;
      margin-bottom: 5vw;
      button {
        width: 48%;
        height: 100%;
        background: #5100ff;
        outline: none;
        border-style: none;
        border-radius: 1vw;
        font-family: "Roboto 900";
        color: #ffffff;
        font-size: 4vw;
        cursor: pointer;
        &:hover {
          background: #ffffff;
          color: #000000;
        }
      }
    }
  }
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    .inputs-container-edit-price {
      width: 40%;
      height: 70%;
      border-radius: 0.3vw;
      .title-edit-price {
        height: 4vw;
        line-height: 4vw;
        font-size: 2.5vw;
      }
      .inpunt-change {
        width: 80%;
        .label {
          height: 2vw;
          line-height: 2vw;
          font-size: 1vw;
          margin-left: 0.5vw;
        }
        .input-icon-container {
          width: 100%;
          height: 4vw;
          border-radius: 0.3vw;
          .input {
            height: 4vw;
            padding-left: 1vw;
            padding-right: 5vw;
            font-size: 2vw;
          }
          .sysIconEdit {
            width: 4vw;
            height: 4vw;
            padding: 1vw;
          }
        }
      }
      .buttons-edit-price {
        width: 80%;
        height: 4vw;
        margin-top: 1vw;
        margin-bottom: 2vw;
        button {
          border-radius: 0.3vw;
          font-size: 1.5vw;
          &:hover {
            background: #ffffff;
            color: #000000;
          }
        }
      }
    }
  }
`;
interface props {
  state: any;
  setState: any;
  editStateModal: boolean;
  setEditStateModal: any;
}
const EditPriceProduct = (props: props) => {
  const navigate = useNavigate();
  const [localState, setLocalState] = useState(props.state);

  // !Handle Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: any = e.currentTarget.value && parseFloat(e.currentTarget.value);
    setLocalState({
      ...localState,
      [e.currentTarget.name]: value,
    });
  };

  // !HANDLE SUBMIT
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.setState(localState);
    navigate(-1);
  };
  // !Set EDIT MODAL
  const setEditModal = () => {
    props.setEditStateModal(false);
  };
  // !USEEFFECT
  useEffect(() => {
    window.addEventListener("popstate", setEditModal);
    return () => {
      window.removeEventListener("popstate", setEditModal);
    };
  }, [props.editStateModal]);
  return (
    <EditPriceSt>
      <form className="inputs-container-edit-price" onSubmit={handleSubmit}>
        <h1 className="title-edit-price">Editar Cantidad</h1>
        {/* <div className="inpunt-change price">
          <label className="label">Price (MSRP)</label>
          <section className="input-icon-container">
            <input
              name="price"
              type="number"
              className="input"
              value={localState.price}
              onChange={(e) => handleChange(e)}
              onFocus={(e) => e.currentTarget.select()}
              autoComplete="off"
              required
              step="0.1"
            />
            <MdModeEditOutline className="sysIconEdit" />
          </section>
        </div> */}

        <div className="inpunt-change quantity">
          <label className="label">Cantidad</label>
          <section className="input-icon-container">
            <input
              name="quantity"
              type="number"
              className="input"
              value={localState.quantity}
              onChange={(e) => handleChange(e)}
              onFocus={(e) => e.currentTarget.select()}
              autoComplete="off"
              required
            />
            <MdModeEditOutline className="sysIconEdit" />
          </section>
        </div>
        <div className="buttons-edit-price">
          <button type="submit">Cambiar</button>
          <button type="button" onClick={() => navigate(-1)}>
            Cancelar
          </button>
        </div>
      </form>
    </EditPriceSt>
  );
};

export default EditPriceProduct;
