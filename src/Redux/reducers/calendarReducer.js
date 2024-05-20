import { calendar, calendars } from "../initials/calendarInitials";
import {

  ADD,
  DELETE,
  UPDATE,
  GET_LIST_CALENDAR,
  GET_BY_CALENDAR_ID,
} from "../actions/calendarActions";

const initialvales = {
  calendar,
  calendars,
};
export default function calendarReducer(
  state = initialvales,
  { type, payload }
) {
  switch (type) {
    case GET_LIST_CALENDAR:
      return {
        ...state,
        calendars: payload,
      };
    case GET_BY_CALENDAR_ID:
      return {
        ...state,
        calendar: payload,
      };
    case ADD:
      return {
        ...state,
        calendars: [...state.calendars, payload],
      };
    case UPDATE:
      return {
        ...state,
        calendars: [
          ...state.calendars.filter((x) => x.id !== payload.id),
          payload,
        ],
      };
    case DELETE:
      return {
        ...state,
        calendars: [...state.calendars.filter((x) => x.id !== payload)],
      };
    default:
      return {
        ...state,
      };
  }
}
