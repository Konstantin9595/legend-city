export const FETCH_ALL_SERVICES = "FETCH_ALL_SERVICES"
export const REQUEST


export const requestAllServices = () => {
    return (dispatch) => {
        dispatch({
            type: GET_SERVICES
        })
    }

    // return {
    //     type: REQUEST_ALL_SERVICES
    // }
}