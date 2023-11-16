import { barber, barbers } from "../initials/barberInitials";
import {
  ADD,
  DELETE,
  UPDATE,
  GET_LIST_BARBER,
  GET_BY_BARBER_ID,
  BARBER_REGISTER,
  BARBER_LOGIN,
  UPDATE_BARBER_PASSWORD,
} from "../actions/barberActions";

const initialvales = {
  barber,
  barbers,
};
export default function barberReducer(state = initialvales, { type, payload }) {
  switch (type) {
    case GET_LIST_BARBER:
      return {
        ...state,
        barbers: payload,
      };
    case GET_BY_BARBER_ID:
      return {
        ...state,
        barber: payload,
      };
    case ADD:
      return {
        ...state,
        barbers: [...state.barbers, payload],
      };
    case BARBER_REGISTER:
      return {
        ...state,
        barbers: [...state.barbers, payload],
      };
    case BARBER_LOGIN:
      return {
        ...state,
        barbers: [...state.barbers, payload],
      };
    case UPDATE:
      return {
        ...state,
        barbers: [...state.barbers.filter((x) => x.id !== payload.id), payload],
      };
    case UPDATE_BARBER_PASSWORD:
      return {
        ...state,
        barbers: [...state.barbers, payload],
      };
    case DELETE:
      return {
        ...state,
        barbers: [...state.barbers.filter((x) => x.id !== payload)],
      };
    default:
      return {
        ...state,
      };
  }
}
