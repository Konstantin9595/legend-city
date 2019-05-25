import { GET_CONTENT_SUCCESS } from './actions'


export type State = {
    readonly services: [];
};

export const initialState: State = {
    services: []
}


export const getContentReducers = (state:{} = initialState, action:{type:string, payload?:object } ): object => {
    switch (action.type) {
        case GET_CONTENT_SUCCESS:
            return {
                ...state,
                services: action.payload
            }
        default:
            return state
    }
}