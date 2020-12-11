import { PlanetsActions } from "./PlanetsActions";
import {
  FETCH_PLANET_LIST_SUCCESS,
  FETCH_PLANET_SUCCESS,
} from "./PlanetsActionTypes";
import { Planet, PlanetsMap, PlanetsStoreState } from "./PlanetsModel";

const INITIAL_STATE: PlanetsStoreState = {
  planetById: {},
  nextPage: 1,
  planetsIds: [],
};

export const planetsReducer = (
  state = INITIAL_STATE,
  action: PlanetsActions
): PlanetsStoreState => {
  switch (action.type) {
    case FETCH_PLANET_LIST_SUCCESS: {
      const planets = action.payload.planets;
      const planetById: PlanetsMap = planets.reduce(
        (result: PlanetsMap, planet: Planet) => {
          result[planet.id] = planet;
          return result;
        },
        {}
      );
      const planetIds: string[] = planets.map((planet) => planet.id);
      return {
        ...state,
        nextPage: action.payload.nextPage,
        planetById: { ...state.planetById, ...planetById },
        planetsIds: [...state.planetsIds, ...planetIds],
      };
    }
    case FETCH_PLANET_SUCCESS: {
      const id = action.payload.id;
      return {
        ...state,
        planetById: { ...state.planetById, [id]: action.payload },
      };
    }
    default: {
      return state;
    }
  }
};
