export interface Planet {
  id: string;
  name: string;
  rotation_period: number;
  orbital_period: number;
  diameter: number;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: number;
  population: string;
  residentsIds: string[];
  filmsIds: string[];
}

export interface PlanetsMap {
  [id: string]: Planet;
}

export interface PlanetsStoreState {
  planetById: PlanetsMap;
  planetsIds: string[];
  nextPage: number | null;
}
