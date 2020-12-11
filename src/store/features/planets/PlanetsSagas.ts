import { all, call, put, takeEvery } from "redux-saga/effects";
import { API } from "../../../network/api";
import { extractId, extractPageNumber } from "../../common/extractId";

import {
  fetchPlanetListSuccess,
  fetchPlanetSuccess,
  RequestPlanetAction,
  RequestPlanetListAction,
} from "./PlanetsActions";
import {
  FETCH_PLANET_LIST_REQUEST,
  FETCH_PLANET_REQUEST,
} from "./PlanetsActionTypes";
import { Planet } from "./PlanetsModel";

function mapToState(input: any): Planet | undefined {
  const planetId = extractId(input.url);
  if (planetId) {
    const { residents, films, ...rest } = input;
    const residentsIds = residents.map(extractId);
    const filmsIds = films.map(extractId);
    return { ...rest, id: planetId, residentsIds, filmsIds };
  }
}

function* fetchPlanetsSaga(action: RequestPlanetListAction) {
  try {
    const page = action.payload.page;
    const {
      data: { results: planets, next },
    } = yield call(API.get, `planets?page=${page}`);

    const result: Planet[] = planets.map(mapToState).filter(Boolean);

    let nextPageNumber = next ? extractPageNumber(next) : null;

    yield put(
      fetchPlanetListSuccess({
        planets: result,
        nextPage: nextPageNumber,
      })
    );
  } catch (err) {
    console.log(err);
  }
}

function* fetchPlanetDetailsSaga(action: RequestPlanetAction) {
  try {
    const id = action.payload;
    const { data } = yield call(API.get, `planets/${id}/`);
    const planet = mapToState(data);
    if (planet) {
      yield put(fetchPlanetSuccess(planet));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* planetsSagas() {
  yield all([
    takeEvery(FETCH_PLANET_LIST_REQUEST, fetchPlanetsSaga),
    takeEvery(FETCH_PLANET_REQUEST, fetchPlanetDetailsSaga),
  ]);
}
