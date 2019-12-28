import { GET_EVENT_TODAY } from "../config/constant";

const initialState = {
    data: [],
    isLoading: false,
    error: false
};

export const events = (state = initialState, action) =>{
    switch (action.type) {
        case `${GET_EVENT_TODAY}_PENDING`:
            return{
                ...state,
                isLoading: true,
            }
        case `${GET_EVENT_TODAY}_FULFILLED`:
            console.log(action.payload)
            return{
                ...state,
                data: action.payload.data,
                isLoading:false
            }
        case `${GET_EVENT_TODAY}_REJECTED`:
            return{

            }
        default:
            return state;
    }
};