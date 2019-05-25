import { GET_CATEGORY_SUCCESS } from './actions'


export type State = {
    readonly category: [];
};

export const initialState: State = {
    category: []
}


export const getCategoryReducers = (state:{} = initialState, action:{type:string, payload?:object } ): object => {
    switch (action.type) {
        case GET_CATEGORY_SUCCESS:
            return {
                ...state,
                category: action.payload
            }
        default:
            return state
    }
}