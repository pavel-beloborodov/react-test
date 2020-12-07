import { FilmsActions } from "./FilmsActions";
import { FETCH_FILM_LIST_SUCCESS } from "./FilmsActionTypes";
import { FilmsStoreState } from "./FilmsModel";

const INITIAL_STATE: FilmsStoreState = {
  filmById: {},
};

export const filmsReducer = (
  state = INITIAL_STATE,
  action: FilmsActions
): FilmsStoreState => {
  switch (action.type) {
    case FETCH_FILM_LIST_SUCCESS: {
      return { ...state, filmById: action.payload };
    }
    default: {
      return state;
    }
  }
};
