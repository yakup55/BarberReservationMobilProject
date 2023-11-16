import { contact, contacts } from "../initials/contactInitials";
import {
  GET_BY_ID,
  ADD,
  DELETE,
  UPDATE,
} from "../actions/quentionsActions";
import { GET_LIST_CONTACT } from "../actions/contactActions";

const initialvales = {
  contact,
  contacts,
};
export default function contactReducer(
  state = initialvales,
  { type, payload }
) {
  switch (type) {
    case GET_LIST_CONTACT:
      return {
        ...state,
        contacts: payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        contact: payload,
      };
    case ADD:
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };
    case UPDATE:
      return {
        ...state,
        contacts: [
          ...state.contacts.filter((x) => x.id !== payload.id),
          payload,
        ],
      };
    case DELETE:
      return {
        ...state,
        contacts: [...state.contacts.filter((x) => x.id !== payload)],
      };
    default:
      return {
        ...state,
      };
  }
}
