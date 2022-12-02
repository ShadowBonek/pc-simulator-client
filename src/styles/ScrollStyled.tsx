import styled from "styled-components";
const ScrollSt = styled.div`
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    // !Firefox
    scrollbar-color: #212121 #040404;
    scrollbar-width: thin;
    // !Chrome
    &::-webkit-scrollbar {
      width: 0.5vw;
      height: 0vw;
    }
    &::-webkit-scrollbar-track {
      background: #040404;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 0.1vw;
      background: #212121;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: #3b3b3b;
      box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    }
    &::-webkit-scrollbar-thumb:active {
      background-color: rgb(41, 41, 41);
    }
  }
`;
export default ScrollSt;
