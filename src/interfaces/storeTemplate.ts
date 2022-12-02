import { setupTemplate } from "json/setupTemplate";

export type AppInterface = {
  login: {
    token: string;
    id: "";
  };
  setup: any;
  socket: string;
  ram_type: string;
  compare: any;
  menu: string;
};
export const appTemplate: AppInterface = {
  login: {
    token: "",
    id: "",
  },
  setup: setupTemplate,
  socket: "",
  ram_type: "",
  compare: [],
  menu: "-100vw",
};

export interface StoreInterface {
  app: AppInterface;
}
export const storeTemplate: StoreInterface = {
  app: appTemplate,
};
