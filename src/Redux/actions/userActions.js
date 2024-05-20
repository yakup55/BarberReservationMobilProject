import UserService from "../services/userService";

export const GET_LIST_USER = "GET_LIST_USER";
export const GET_BY_USER_ID = "GET_BY_USER_ID";
export const ADD = "ADD";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";
export const UPDATE_USER_PASSWORD = "UPDATE_USER_PASSWORD";
const service = new UserService();

export function getList6() {
  return function (dispacth) {
    service
      .getUsersList()
      .then((resp) => dispacth({ type: GET_LIST_USER, payload: resp }));
  };
}
export function getByUserId(id) {
  return function (dispacth) {
    service
      .getByIdUser(id)
      .then((resp) => dispacth({ type: GET_BY_USER_ID, payload: resp }));
  };
}

export function add(user) {
  return function (dispacth) {
    service
      .addUser(user)
      .then((resp) => dispacth({ type: ADD, payload: resp }));
  };
}
export function update(id, user) {
  return function (dispacth) {
    service
      .updateUser(id, user)
      .then((resp) => dispacth({ type: UPDATE, payload: resp }));
  };
}
export function updateUserPassword(user) {
  return function (dispacth) {
    service
      .updateUserPassword(user)
      .then((resp) => dispacth({ type: UPDATE_USER_PASSWORD, payload: resp }));
  };
}
export function userDeleted(id) {
  return function (dispacth) {
    service
      .deleteUser(id)
      .then((resp) => dispacth({ type: DELETE, payload: id }));
  };
}
