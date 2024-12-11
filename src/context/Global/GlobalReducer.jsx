import { HANDLE_THEME } from "../types";
export const GlobalReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case HANDLE_THEME:
        return {
          ...state,
          theme: payload,
        };
      
      default:
        return state;
    }
  };