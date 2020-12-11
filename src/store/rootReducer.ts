import { combineReducers } from "redux";
import { filmsReducer } from "./features/films/FilmsReducer";
import { planetsReducer } from "./features/planets/PlanetsReducer";
import { residentsReducer } from "./features/residents/ResidentsReducer";

export const rootReducer = combineReducers({
  planets: planetsReducer,
  residents: residentsReducer,
  films: filmsReducer,
});
