import { ActionType } from "redux/types";
import { Dispatch } from "redux";
import { ActionsInterface } from "interfaces/ActionsInterface";

// !Seteando LOGIN
export const setLogin = (token: string, id: string) => (dispatch: Dispatch<ActionsInterface>) => {
  // console.log(data);
  dispatch({
    type: ActionType.SET_LOGIN,
    token,
    id,
  });
};
// !Seteando  SETUP
export const setSetup = (payload: any) => (dispatch: Dispatch<ActionsInterface>) => {
        dispatch({
          type: ActionType.SET_SETUP,
          payload: payload,
        });
      };
      // !RESET  SETUP
      export const resetSetup = (payload: any) => (dispatch: Dispatch<ActionsInterface>) => {
        //   console.log(payload);
        dispatch({
          type: ActionType.RESET_SETUP,
          payload: payload,
        });
      };
      // !RESET  ALL ITEMS
      export const resetAllItems = (payload: any) => (dispatch: Dispatch<ActionsInterface>) => {
        //   console.log(payload);
        dispatch({
          type: ActionType.RESET_ALL_ITEMS,
          payload: payload,
        });
      };
      // !Seteando  SOCKET
      export const setSocket = (payload: string) => (dispatch: Dispatch<ActionsInterface>) => {
        //   console.log(payload);
        dispatch({
          type: ActionType.SET_SOCKET,
          payload: payload,
        });
      };
      // !Seteando  RAM
      export const setRamType = (payload: string) => (dispatch: Dispatch<ActionsInterface>) => {
        //   console.log(payload);
        dispatch({
          type: ActionType.SET_RAM_TYPE,
          payload: payload,
        });
      };
      // !Seteando  COMPARE
      export const setCompare = (payload: any) => (dispatch: Dispatch<ActionsInterface>) => {
        dispatch({
          type: ActionType.SET_COMPARE,
          payload: payload,
        });
      };
      // !Delete  COMPARE
      export const deleteCompare = (payload: any) => (dispatch: Dispatch<ActionsInterface>) => {
        dispatch({
          type: ActionType.DELETE_COMPARE,
          payload: payload,
        });
      };
      // !Open MENU
      export const openMenu = (payload: string) => (dispatch: Dispatch<ActionsInterface>) => {
        dispatch({
          type: ActionType.OPEN_MENU,
          payload: payload,
        });
      };
      