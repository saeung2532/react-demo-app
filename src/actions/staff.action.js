import {
  HTTP_STAFF_FETCHING,
  HTTP_STAFF_FAILED,
  HTTP_STAFF_SUCCESS,
  HTTP_STAFF_CLEAR,
} from "../constants";
import { server } from "../constants";
import { httpClient } from "../utils/HttpClient";

// Information being sent to Reducer
export const setStateStaffToSuccess = (payload) => ({
  type: HTTP_STAFF_SUCCESS,
  payload,
});

const setStateStaffToFetching = () => ({
  type: HTTP_STAFF_FETCHING,
});

const setStateStaffToFailed = () => ({
  type: HTTP_STAFF_FAILED,
});

const setStateStaffToClear = () => ({
  type: HTTP_STAFF_CLEAR,
});

export const getStaff = () => {
  return async (dispatch) => {
    dispatch(setStateStaffToFetching());
    doGetStaff(dispatch);
  };
};

const doGetStaff = async (dispatch) => {
  try {
    let result = await httpClient.get(server.STAFF_URL);
    dispatch(setStateStaffToSuccess(result.data));
  } catch (err) {
    dispatch(setStateStaffToFailed());
  }
};
