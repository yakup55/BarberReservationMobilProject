import AboutService from "../services/aboutService";

export const GET_LIST_ABOUT = "GET_LIST_ABOUT";
export const GET_BY_ID = "GET_BY_ID";
export const ADD = "ADD";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";
const service = new AboutService();

export function getList() {
  return function (dispacth) {
    service
      .getAboutsList()
      .then((resp) => dispacth({ type: GET_LIST_ABOUT, payload: resp }));
  };
}
export function getById(id) {
  return function (dispacth) {
    service
      .getByIdAbout(id)
      .then((resp) => dispacth({ type: GET_BY_ID, payload: resp }));
  };
}

export function add(about) {
  return function (dispacth) {
    service
      .addAbout(about)
      .then((resp) => dispacth({ type: ADD, payload: resp }));
  };
}
export function update(id, about) {
  return function (dispacth) {
    service
      .updateAbout(id, about)
      .then((resp) => dispacth({ type: UPDATE, payload: resp }));
  };
}
export function deleted(id) {
  return function (dispacth) {
    service
      .deleteAbout(id)
      .then((resp) => dispacth({ type: DELETE, payload: id }));
  };
}
