import { GET_USER_SUCCESS } from './actions'


export type State = {
    readonly user: {};
};

export const initialState: State = {
    user: {}
}


export const getUserReducers = (state:{} = initialState, action:{type:string, payload?:object } ): object => {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}