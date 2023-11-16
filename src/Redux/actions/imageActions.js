import ImageService from "../services/imageService";
export const GET_LIST_IMAGE = "GET_LIST_IMAGE";
export const GET_BY_ID_IMAGE = "GET_BY_ID_IMAGE";
export const ADD_IMAGE = "ADD_IMAGE";
export const UPDATE_IMAGE = "UPDATE_IMAGE";
export const DELETE_IMAGE = "DELETE_IMAGE";

const service = new ImageService();

export function getImagesList() {
  return function (dispacth) {
    service
      .getImagesList()
      .then((resp) => dispacth({ type: GET_LIST_IMAGE, payload: resp }));
  };
}

export function getById(id) {
  return function (dispacth) {
    service
      .getByImageId(id)
      .then((resp) => dispacth({ type: GET_BY_ID_IMAGE, payload: resp }));
  };
}
export function addImage(image) {
  return function (dispacth) {
    service
      .addImage(image)
      .then((resp) => dispacth({ type: ADD_IMAGE, payload: resp }));
  };
}
export function updateImage(id, image) {
  return function (dispacth) {
    service
      .updateImage(id, image)
      .then((resp) => dispacth({ type: UPDATE_IMAGE, payload: resp }));
  };
}
export function deleted(id) {
  return function (dispacth) {
    service
      .deleteImage(id)
      .then((resp) => dispacth({ type: DELETE_IMAGE, payload: resp }));
  };
}
