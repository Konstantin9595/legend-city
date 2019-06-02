import { GET_CONTENT_SUCCESS } from './actions'
import { UPDATE_CONTENT_SUCCESS, SORT_ACTION } from '../actions'

export type State = {
    readonly services: [];
    readonly sortingData: {}
};

export const initialState: State = {
    services: [],
    sortingData: {}
}


export const getContentReducers = (state:{} = initialState, action:{type:string, payload?:object } ): object => {
    switch (action.type) {
        case GET_CONTENT_SUCCESS:
            return {
                ...state,
                services: action.payload
            }
        case UPDATE_CONTENT_SUCCESS:
            return {
                ...state
            }
        case SORT_ACTION:
            return {
                ...state,
                sortingData: action.payload
            }
        default:
            return state
    }
}