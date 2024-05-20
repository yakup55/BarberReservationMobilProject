import HourService from "../services/hourService";

export const GET_LIST_HOUR = "GET_LIST_HOUR";
export const GET_BY_HOUR_ID = "GET_BY_HOUR_ID";
export const ADD = "ADD";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";
const service = new HourService();

export function getList4() {
  return function (dispacth) {
    service
      .getHoursList()
      .then((resp) => dispacth({ type: GET_LIST_HOUR, payload: resp }));
  };
}
export function getByHourId(id) {
  return function (dispacth) {
    service
      .getByIdHour(id)
      .then((resp) => dispacth({ type: GET_BY_HOUR_ID, payload: resp }));
  };
}

export function add(hour) {
  return function (dispacth) {
    service
      .addHour(hour)
      .then((resp) => dispacth({ type: ADD, payload: resp }));
  };
}
export function update(id,hour) {
  return function (dispacth) {
    service
      .updateHour(id,hour)
      .then((resp) => dispacth({ type: UPDATE, payload: resp }));
  };
}
export function deleted(id) {
  return function (dispacth) {
    service
      .deleteHour(id)
      .then((resp) => dispacth({ type: DELETE, payload: id }));
  };
}
