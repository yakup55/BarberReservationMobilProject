import { reservation, reservations } from "../initials/reservationInitials";
import {
  GET_BY_ID,
  ADD,
  DELETE,
  UPDATE,
  GET_LIST_RESERVATION,
  FIND_BY_USER_ID,
  FIND_BY_BARBER_ID,
  GET_STATUS_ACTIVE,
  GET_STATUS_PASIVE,
  CHECK,
} from "../actions/reservationActions";

const initialvales = {
  reservation,
  reservations,
};
export default function reservationReducer(
  state = initialvales,
  { type, payload }
) {
  switch (type) {
    case GET_LIST_RESERVATION:
      return {
        ...state,
        reservations: payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        reservation: payload,
      };
    case FIND_BY_USER_ID:
      return {
        ...state,
        reservations: payload,
      };
    case FIND_BY_BARBER_ID:
      return {
        ...state,
        reservations: payload,
      };
    case GET_STATUS_ACTIVE:
      return {
        ...state,
        reservation: payload,
      };
    case GET_STATUS_PASIVE:
      return {
        ...state,
        reservation: payload,
      };
      case CHECK:
        return{
          ...state,
          reservation:payload,
        }
    case ADD:
      return {
        ...state,
        reservations: [...state.reservations, payload],
      };
    case UPDATE:
      return {
        ...state,
        reservations: [
          ...state.reservations.filter((x) => x.id !== payload.id),
          payload,
        ],
      };
    case DELETE:
      return {
        ...state,
        reservations: [...state.reservations.filter((x) => x.id !== payload)],
      };

    default:
      return {
        ...state,
      };
  }
}
