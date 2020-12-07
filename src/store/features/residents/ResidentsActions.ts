import {
  FETCH_RESIDENT_LIST_SUCCESS,
  FETCH_RESIDENT_LIST_REQUEST,
} from "./ResidentsActionTypes";
import { ResidentsMap } from "./ResidentsModel";

export interface FetchResidentListAction {
  type: typeof FETCH_RESIDENT_LIST_REQUEST;
  payload: string[];
}

export interface FetchResidentListSuccess {
  type: typeof FETCH_RESIDENT_LIST_SUCCESS;
  payload: ResidentsMap;
}

export const fetchResidentListSuccess = (
  payload: ResidentsMap
): FetchResidentListSuccess => ({
  type: FETCH_RESIDENT_LIST_SUCCESS,
  payload,
});

export const fetchResidentListRequest = (
  payload: string[]
): FetchResidentListAction => ({
  type: FETCH_RESIDENT_LIST_REQUEST,
  payload,
});

export type ResidentsActions =
  | FetchResidentListAction
  | FetchResidentListSuccess;
