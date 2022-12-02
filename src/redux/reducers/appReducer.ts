import { ActionType } from "redux/types";
import { ActionsInterface } from "interfaces/ActionsInterface";
//* INTERFACE APP
import { AppInterface, appTemplate } from "interfaces/storeTemplate";

const initialState: AppInterface = appTemplate;

const appReducer = (state = initialState, action: ActionsInterface) => {
  //   console.log(action);
  switch (action.type) {
    case ActionType.SET_LOGIN:
      return {
        ...state,
        login: {
          token: action.token,
          id: action.id,
        },
      };
    case ActionType.SET_SETUP:
      return {
        ...state,
        setup: {
          ...state.setup,
          [action.payload.type]: action.payload,
        },
      };
    case ActionType.RESET_SETUP:
      return {
        ...state,
        setup: { ...state.setup, [action.payload.type]: action.payload },
      };
    case ActionType.RESET_ALL_ITEMS:
      return {
        ...state,
        setup: action.payload,
        socket: "",
        ram_type: "",
      };
    case ActionType.SET_SOCKET:
      return {
        ...state,
        socket: action.payload,
      };
    case ActionType.SET_RAM_TYPE:
      return {
        ...state,
        ram_type: action.payload,
      };
    case ActionType.SET_COMPARE:
      return {
        ...state,
        compare:
          state.compare[0]?.type !== action.payload.type && state.compare[1]?.type !== action.payload.type
            ? [action.payload]
            : state.compare.length < 2
            ? [...state.compare, action.payload]
            : [...state.compare.filter((i: any, index: any) => index !== 0), action.payload],
      };
    case ActionType.DELETE_COMPARE:
      return {
        ...state,
        compare: [...state.compare.filter((i: any) => i.id !== action.payload)],
      };
    case ActionType.OPEN_MENU:
      return {
        ...state,
        menu: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
