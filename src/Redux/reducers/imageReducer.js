import {
  ADD_IMAGE,
  DELETE_IMAGE,
  GET_BY_ID_IMAGE,
  GET_LIST_IMAGE,
  UPDATE_IMAGE,
} from "../actions/imageActions";
import { image, images } from "../initials/imageInitials";

const initialValues = {
  image,
  images,
};
export default function imageReducer(state = initialValues, { type, payload }) {
  switch (type) {
    case GET_LIST_IMAGE:
      return {
        ...state,
        images: payload,
      };
    case GET_BY_ID_IMAGE:
      return {
        ...state,
        image: payload,
      };
    case ADD_IMAGE:
      return {
        ...state,
        images: [...state.images, payload],
      };
    case UPDATE_IMAGE:
      return {
        ...state,
        images: [...state.images.filter((x) => x.id !== payload.id), payload],
      };
    case DELETE_IMAGE:
      return {
        ...state,
        images: [...state.images.filter((x) => x.id !== payload)],
      };

    default:
      return {
        ...state,
      };
  }
}
