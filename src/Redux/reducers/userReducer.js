import { user, users } from "../initials/userInitials";
import {
  ADD,
  DELETE,
  UPDATE,
  GET_LIST_USER,
  GET_BY_USER_ID,
  UPDATE_USER_PASSWORD,
} from "../actions/userActions";

const initialvales = {
  user,
  users,
};
export default function userReducer(state = initialvales, { type, payload }) {
  switch (type) {
    case GET_LIST_USER:
      return {
        ...state,
        users: payload,
      };
    case GET_BY_USER_ID:
      return {
        ...state,
        user: payload,
      };
    case ADD:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case UPDATE:
      return {
        ...state,
        users: [...state.users.filter((x) => x.id !== payload.id), payload],
      };
    case UPDATE_USER_PASSWORD:
      return {
        ...state,
        users: [...state.users, payload],
      };
    case DELETE:
      return {
        ...state,
        users: [...state.users.filter((x) => x.id !== payload)],
      };
    default:
      return {
        ...state,
      };
  }
}
