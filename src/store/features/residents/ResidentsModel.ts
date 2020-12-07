export interface Resident {
  id: string;
  name: string;
  height: number;
  mass: number;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export interface ResidentsMap {
  [id: string]: Resident;
}

export interface ResidentsStoreState {
  residentById: ResidentsMap;
}
