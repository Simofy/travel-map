import { Action } from "../../globalTypes";
import { constants } from "../constants";

export type AppData = {
  isSidebarVisible: boolean;
  loading: boolean;
  isCategoryModalVisible: boolean;
};

const defaultAppData: AppData = {
  isSidebarVisible: true,
  loading: false,
  isCategoryModalVisible: false,
};

export const appReducer = (state = defaultAppData, action: Action): AppData => {
  switch (action.type) {
    case constants.app.SET_LOADING:
      return { ...state, loading: action.payload };
    case constants.app.SET_SIDEBAR_VISIBILITY: {
      return { ...state, isSidebarVisible: !state.isSidebarVisible };
    }
    case constants.app.DISPLAY_CATEGORY_MODAL:
      return {
        ...state,
        isCategoryModalVisible: !state.isCategoryModalVisible,
      };
    default:
      return state;
  }
};
