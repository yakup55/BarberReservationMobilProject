import ContactService from "../services/contactService";

export const GET_LIST_CONTACT = "GET_LIST_CONTACT";
export const GET_BY_ID = "GET_BY_ID";
export const ADD = "ADD";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";
const service = new ContactService();

export function getList7() {
  return function (dispacth) {
    service
      .getContactsList()
      .then((resp) => dispacth({ type: GET_LIST_CONTACT, payload: resp }));
  };
}
export function getById(id) {
  return function (dispacth) {
    service
      .getContactById(id)
      .then((resp) => dispacth({ type: GET_BY_ID, payload: resp }));
  };
}

export function add(contact) {
  return function (dispacth) {
    service
      .addContact(contact)
      .then((resp) => dispacth({ type: ADD, payload: resp }));
  };
}
export function update(contact) {
  return function (dispacth) {
    service
      .updateContact(contact)
      .then((resp) => dispacth({ type: UPDATE, payload: resp }));
  };
}
export function deleted(id) {
  return function (dispacth) {
    service
      .deleteContact(id)
      .then((resp) => dispacth({ type: DELETE, payload: id }));
  };
}
