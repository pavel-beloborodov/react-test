export interface Film {
  id: string;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characterIds: string[];
  planets: string[];
  sharshipsIds: string[];
  vehiclesIds: string[];
  speiesIds: string[];
}

export interface FilmsMap {
  [id: string]: Film;
}

export interface FilmsStoreState {
  filmById: FilmsMap;
}
