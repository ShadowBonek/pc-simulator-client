import styled from "styled-components";

export const ComponentSt = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 15vw 50px calc(100% - 15vw - 50px);
  justify-content: center;
  align-content: center;
  position: relative;
  background: rgb(0, 0, 0);

  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 4vw 90px calc(100% - 4vw - 90px);
    justify-content: center;
    align-content: center;
    position: relative;
    background: rgb(0, 0, 0);
  }
`;
