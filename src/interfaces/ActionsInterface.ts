import { ActionType } from "redux/types";

interface setLogin {
  type: ActionType.SET_LOGIN;
  token: string;
  id: string;
}
interface setSetup {
  type: ActionType.SET_SETUP;
  payload: any;
}
interface resetSetup {
  type: ActionType.RESET_SETUP;
  payload: any;
}
interface resetAllItems {
  type: ActionType.RESET_ALL_ITEMS;
  payload: any;
}
interface setSocket {
  type: ActionType.SET_SOCKET;
  payload: string;
}
interface setRamType {
  type: ActionType.SET_RAM_TYPE;
  payload: string;
}
interface setCompare {
  type: ActionType.SET_COMPARE;
  payload: any;
}
interface deleteCompare {
  type: ActionType.DELETE_COMPARE;
  payload: any;
}
interface openMenu {
  type: ActionType.OPEN_MENU;
  payload: string;
}
export type ActionsInterface =
  | setLogin
  | setSetup
  | resetSetup
  | resetAllItems
  | setSocket
  | setRamType
  | setCompare
  | deleteCompare
  | openMenu;
