import { all, call, put, takeEvery } from "redux-saga/effects";
import { API } from "../../../network/api";
import { extractId } from "../../common/extractId";
import {
  FetchResidentListAction,
  fetchResidentListSuccess,
} from "./ResidentsActions";
import { FETCH_RESIDENT_LIST_REQUEST } from "./ResidentsActionTypes";
import { ResidentsMap } from "./ResidentsModel";

export function* fetchResidentsSaga(action: FetchResidentListAction) {
  const ids = action.payload;
  try {
    const response = yield all(
      ids.map((id: any) => call(API.get, `people/${id}/`))
    );
    const residentsByIds: ResidentsMap = response.reduce(
      (result: ResidentsMap, { data }: any) => {
        const id = extractId(data.url);
        if (id) {
          result[id] = { ...data, id };
        }
        return result;
      },
      {}
    );
    yield put(fetchResidentListSuccess(residentsByIds));
  } catch (err) {
    console.log(err);
  }
}

export function* residentsSagas() {
  yield all([takeEvery(FETCH_RESIDENT_LIST_REQUEST, fetchResidentsSaga)]);
}
