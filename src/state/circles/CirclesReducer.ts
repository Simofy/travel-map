import { constants } from "../constants";
import { Action, CellData } from "../../types";

export type CirclesData = {
  circles: CellData[];
  selectedCircleId: string;
};

const defaultCirclesData: CirclesData = {
  circles: [],
  selectedCircleId: "",
};

export const circlesReducer = (
  state = defaultCirclesData,
  action: Action
): CirclesData => {
  switch (action.type) {
    case constants.circles.SET_CIRCLES:
      return { ...state, circles: action.payload };
    case constants.circles.UPDATE_CIRCLE: {
      const filteredCircles = state.circles.filter(
        (circle) =>
          circle.x !== action.payload.x && circle.y !== action.payload.x
      );
      return { ...state, circles: [...filteredCircles, action.payload] };
    }
    case constants.circles.DELETE_CIRCLE: {
      const filteredCircles = state.circles.filter(
        (circle) => circle._id !== action.payload
      );
      return { ...state, circles: filteredCircles };
    }
    case constants.circles.SET_SELECTED_CIRCLE_ID:
      return {
        ...state,
        selectedCircleId: action.payload,
      };
    default:
      return state;
  }
};
