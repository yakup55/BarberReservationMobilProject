import BarberService from "../services/barberService";

export const GET_LIST_BARBER = "GET_LIST_BARBER";
export const GET_BY_BARBER_ID = "GET_BY_BARBER_ID";
export const ADD = "ADD";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";
export const BARBER_REGISTER = "BARBER_REGISTER";
export const BARBER_LOGIN = "BARBER_LOGIN";
export const UPDATE_BARBER_PASSWORD = "UPDATE_BARBER_PASSWORD";
const service = new BarberService();

export function getList2() {
  return function (dispacth) {
    service
      .getBarbersList()
      .then((resp) => dispacth({ type: GET_LIST_BARBER, payload: resp }));
  };
}
export function getByBarberId(id) {
  return function (dispacth) {
    service
      .getByIdBarber(id)
      .then((resp) => dispacth({ type: GET_BY_BARBER_ID, payload: resp }));
  };
}

export function add(barber) {
  return function (dispacth) {
    service
      .addBarber(barber)
      .then((resp) => dispacth({ type: ADD, payload: resp }));
  };
}

export function barberRegister(barber) {
  return function (dispacth) {
    service
      .barberRegister(barber)
      .then((resp) => dispacth({ type: BARBER_REGISTER, payload: resp }));
  };
}
export function barberLogin(barber) {
  return function (dispacth) {
    service
      .barberLogin(barber)
      .then((resp) => dispacth({ type: BARBER_LOGIN, payload: resp }));
  };
}
export function updateBarberPassword(barber) {
  return function (dispacth) {
    service
      .updateBarberPassword(barber)
      .then((resp) =>
        dispacth({ type: UPDATE_BARBER_PASSWORD, payload: resp })
      );
  };
}
export function update(id, barber) {
  return function (dispacth) {
    service
      .updateBarber(id, barber)
      .then((resp) => dispacth({ type: UPDATE, payload: resp }));
  };
}
export function deleted(id) {
  return function (dispacth) {
    service
      .deleteBarber(id)
      .then((resp) => dispacth({ type: DELETE, payload: id }));
  };
}
