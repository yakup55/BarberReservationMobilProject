import QuentionsService from "../services/quentionsService";

export const GET_LIST_QUENTION = "GET_LIST_QUENTION";
export const GET_BY_ID = "GET_BY_ID";
export const ADD = "ADD";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";
const service = new QuentionsService();

export function getList8() {
  return function (dispacth) {
    service
      .getQuentionsList()
      .then((resp) => dispacth({ type: GET_LIST_QUENTION, payload: resp }));
  };
}
export function getById(id) {
  return function (dispacth) {
    service
      .getQuentionById(id)
      .then((resp) => dispacth({ type: GET_BY_ID, payload: resp }));
  };
}

export function add(quention) {
  return function (dispacth) {
    service
      .addQuention(quention)
      .then((resp) => dispacth({ type: ADD, payload: resp }));
  };
}
export function update(id,quention) {
  return function (dispacth) {
    service
      .updateQuention(id,quention)
      .then((resp) => dispacth({ type: UPDATE, payload: resp }));
  };
}
export function deleted(id) {
  return function (dispacth) {
    service
      .deleteQuention(id)
      .then((resp) => dispacth({ type: DELETE, payload: id }));
  };
}
