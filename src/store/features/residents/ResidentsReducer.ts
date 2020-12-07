import { ResidentsActions } from "./ResidentsActions";
import { FETCH_RESIDENT_LIST_SUCCESS } from "./ResidentsActionTypes";
import { ResidentsStoreState } from "./ResidentsModel";

const INITIAL_STATE: ResidentsStoreState = {
  residentById: {},
};

export const residentsReducer = (
  state = INITIAL_STATE,
  action: ResidentsActions
): ResidentsStoreState => {
  switch (action.type) {
    case FETCH_RESIDENT_LIST_SUCCESS: {
      return { ...state, residentById: action.payload };
    }
    default: {
      return state;
    }
  }
};
