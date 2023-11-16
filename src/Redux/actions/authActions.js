import AuthService from "../services/authService";
export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const SET_USER = "SET_USER";
export const BARBER_SET_USER = "BARBER_SET_USER";
const service = new AuthService();

export function register(auth) {
  return function (dispacth) {
    service
      .register(auth)
      .then((resp) => dispacth({ type: REGISTER, payload: resp }));
  };
}
export function login(login) {
  return function (dispacth) {
    service
      .login(login)
      .then((resp) => dispacth({ type: LOGIN, payload: resp }));
  };
}
export function setUser(user) {
  return function (dispatch) {
    return dispatch({ type: SET_USER, payload: user });
  };
}

export function setBarber(barber) {
  return function (dispatch) {
    return dispatch({ type: BARBER_SET_USER, payload: barber });
  };
}
