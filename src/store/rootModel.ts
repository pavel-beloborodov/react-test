import { FilmsStoreState } from "./features/films/FilmsModel";
import { PlanetsStoreState } from "./features/planets/PlanetsModel";
import { ResidentsStoreState } from "./features/residents/ResidentsModel";

export interface RootStoreState {
  planets: PlanetsStoreState;
  films: FilmsStoreState;
  residents: ResidentsStoreState;
}
