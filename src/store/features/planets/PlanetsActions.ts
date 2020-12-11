import {
  FETCH_PLANET_LIST_REQUEST,
  FETCH_PLANET_LIST_SUCCESS,
  FETCH_PLANET_REQUEST,
  FETCH_PLANET_SUCCESS,
} from "./PlanetsActionTypes";
import { Planet } from "./PlanetsModel";

// LIST ACTIONS

export interface UpdatePlanetListAction {
  type: typeof FETCH_PLANET_LIST_SUCCESS;
  payload: {
    planets: Planet[];
    nextPage: number | null;
  };
}

export interface RequestPlanetListAction {
  type: typeof FETCH_PLANET_LIST_REQUEST;
  payload: {
    page: number;
  };
}

export const fetchPlanetListRequest = (
  page: number
): RequestPlanetListAction => ({
  type: FETCH_PLANET_LIST_REQUEST,
  payload: { page },
});

export const fetchPlanetListSuccess = (payload: {
  planets: Planet[];
  nextPage: number | null;
}): UpdatePlanetListAction => ({
  type: FETCH_PLANET_LIST_SUCCESS,
  payload,
});

// SINGLE ACTIONS

export interface UpdatePlanetAction {
  type: typeof FETCH_PLANET_SUCCESS;
  payload: Planet;
}

export interface RequestPlanetAction {
  type: typeof FETCH_PLANET_REQUEST;
  payload: string;
}

export const fetchPlanetRequest = (id: string): RequestPlanetAction => ({
  type: FETCH_PLANET_REQUEST,
  payload: id,
});

export const fetchPlanetSuccess = (payload: Planet): UpdatePlanetAction => ({
  type: FETCH_PLANET_SUCCESS,
  payload,
});

export type PlanetsActions =
  | UpdatePlanetListAction
  | RequestPlanetListAction
  | UpdatePlanetAction
  | RequestPlanetAction;
