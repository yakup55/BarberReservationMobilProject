import {
  BARBER_SET_USER,
  LOGIN,
  REGISTER,
  SET_USER,
} from "../actions/authActions";
import { auth, auths, user, barber } from "../initials/authInitials";

const initialValues = {
  auth,
  auths,
  user,
  barber,
};

export default function authReducer(state = initialValues, { type, payload }) {
  switch (type) {
    case REGISTER:
      return {
        ...state,
        auths: [...state.auths, payload],
      };

    case LOGIN:
      return {
        ...state,
        auths: [...state.auths, payload],
      };
    case SET_USER:
      return {
        ...state,
        user: {
          ...payload,
        },
      };
    case BARBER_SET_USER:
      return {
        ...state,
        barber: {
          ...payload,
        },
      };

    default:
      return {
        ...state,
      };
  }
}
