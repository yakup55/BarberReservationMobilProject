import ReservationService from "../services/reservationService";

export const GET_LIST_RESERVATION = "GET_LIST_RESERVATION";
export const GET_BY_ID = "GET_BY_ID";
export const ADD = "ADD";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";
export const FIND_BY_USER_ID = "FIND_BY_USER_ID";
export const FIND_BY_BARBER_ID = "FIND_BY_BARBER_ID";
export const GET_STATUS_ACTIVE = "GET_STATUS_ACTIVE";
export const GET_STATUS_PASIVE = "GET_STATUS_PASIVE";
export const CHECK = "CHECK";
const service = new ReservationService();

export function getList5() {
  return function (dispacth) {
    service
      .getReservationsList()
      .then((resp) => dispacth({ type: GET_LIST_RESERVATION, payload: resp }));
  };
}
export function getById(id) {
  return function (dispacth) {
    service
      .getByIdReservation(id)
      .then((resp) => dispacth({ type: GET_BY_ID, payload: resp }));
  };
}
export function getUserId(userId) {
  return function (dispacth) {
    service
      .getUserId(userId)
      .then((resp) => dispacth({ type: FIND_BY_USER_ID, payload: resp }));
  };
}
export function getBarberId(barberId) {
  return function (dispacth) {
    service
      .getBarberId(barberId)
      .then((resp) => dispacth({ type: FIND_BY_BARBER_ID, payload: resp }));
  };
}
export function reservationActive(id) {
  return function (dispacth) {
    service
      .getStatusActive(id)
      .then((resp) => dispacth({ type: GET_STATUS_ACTIVE, payload: resp }));
  };
}
export function reservationPasive(id) {
  return function (dispacth) {
    service
      .getStatusPasive(id)
      .then((resp) => dispacth({ type: GET_STATUS_PASIVE, payload: resp }));
  };
}
export function check(barberId, horuId, date) {
  return function (dispacth) {
    service
      .check(barberId, horuId, date)
      .then((resp) => dispacth({ type: CHECK, payload: resp }));
  };
}
export function add(reservation) {
  return function (dispacth) {
    service
      .addReservation(reservation)
      .then((resp) => dispacth({ type: ADD, payload: resp }));
  };
}
export function update(reservation) {
  return function (dispacth) {
    service
      .updateReservation(reservation)
      .then((resp) => dispacth({ type: UPDATE, payload: resp }));
  };
}
export function deleted(id) {
  return function (dispacth) {
    service
      .deleteReservation(id)
      .then((resp) => dispacth({ type: DELETE, payload: id }));
  };
}
