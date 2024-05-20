import {about,abouts} from "../initials/aboutInitials"
import {
    GET_BY_ID,
    ADD,
    DELETE,
    UPDATE,
    GET_LIST_ABOUT
} from "../actions/aboutActions"

const initialvales ={
    about,
    abouts,
};
export default function aboutReducer(state=initialvales,{type,payload}){
    switch (type) {
        case GET_LIST_ABOUT:
           return {
            ...state,
            abouts:payload
           }
           case GET_BY_ID:
            return {
             ...state,
             about:payload
            }
            case ADD:
           return {
            ...state,
            abouts:[...state.abouts,payload]
           }
           case UPDATE:
           return {
            ...state,
            abouts:[...state.abouts.filter((x)=>x.id!==payload.id),payload]
           }
           case DELETE:
           return {
            ...state,
            abouts:[...state.abouts.filter((x)=>x.id!==payload)]
           }
        default:
            return {
                ...state
            }
    }
}