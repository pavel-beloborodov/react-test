import { all, call, put, takeEvery } from "redux-saga/effects";
import { API } from "../../../network/api";
import { extractId } from "../../common/extractId";
import { FetchFilmListRequest, fetchFilmListSuccess } from "./FilmsActions";
import { FETCH_FILM_LIST_REQUEST } from "./FilmsActionTypes";
import { FilmsMap } from "./FilmsModel";

function* fetchFilmsSaga(action: FetchFilmListRequest) {
  const ids: string[] = action.payload;
  try {
    const response = yield all(ids.map((id) => call(API.get, `films/${id}/`)));
    const filmsByIds: FilmsMap = response.reduce(
      (result: FilmsMap, { data }: any) => {
        const id = extractId(data.url);
        if (id) {
          result[id] = { ...data, id };
        }
        return result;
      },
      {}
    );
    yield put(fetchFilmListSuccess(filmsByIds));
  } catch (err) {
    console.log(err);
  }
}

export function* filmsSagas() {
  yield all([takeEvery(FETCH_FILM_LIST_REQUEST, fetchFilmsSaga)]);
}
