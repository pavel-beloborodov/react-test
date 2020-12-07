import { all } from "redux-saga/effects";
import { filmsSagas } from "./features/films/FilmsSagas";
import { planetsSagas } from "./features/planets/PlanetsSagas";
import { residentsSagas } from "./features/residents/ResidentsSagas";

export function* watchAllSagas() {
  yield all([planetsSagas(), residentsSagas(), filmsSagas()]);
}
