import { GET_NAVIGATION_SUCCESS } from './actions'


export type State = {
    readonly navigation: [];
};

export const initialState: State = {
    navigation: []
}


export const getNavigationReducers = (state:{} = initialState, action:{type:string, payload?:object } ): object => {
    switch (action.type) {
        case GET_NAVIGATION_SUCCESS:
            return {
                ...state,
                navigation: action.payload
            }
        default:
            return state
    }
}