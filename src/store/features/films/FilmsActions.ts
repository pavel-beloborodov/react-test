import {
  FETCH_FILM_LIST_SUCCESS,
  FETCH_FILM_LIST_REQUEST,
} from "./FilmsActionTypes";
import { FilmsMap } from "./FilmsModel";

export interface FetchFilmListRequest {
  type: typeof FETCH_FILM_LIST_REQUEST;
  payload: string[];
}

export interface FetchFilmListSuccess {
  type: typeof FETCH_FILM_LIST_SUCCESS;
  payload: FilmsMap;
}

export const fetchFilmListSuccess = (
  payload: FilmsMap
): FetchFilmListSuccess => ({
  type: FETCH_FILM_LIST_SUCCESS,
  payload,
});

export const fetchFilmListRequest = (
  payload: string[]
): FetchFilmListRequest => ({
  type: FETCH_FILM_LIST_REQUEST,
  payload,
});

export type FilmsActions = FetchFilmListRequest | FetchFilmListSuccess;
