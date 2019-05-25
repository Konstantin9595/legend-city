import Api from '../../services/Api'

export const GET_NAVIGATION = "GET_NAVIGATION"
export const GET_NAVIGATION_SUCCESS = "GET_NAVIGATION_SUCCESS"
export const GET_NAVIGATION_FAIL = "GET_NAVIGATION_FAIL"

const request = new Api()

export const getNavigationAction = (): Function => {
    return (dispatch:Function) => {
        dispatch({
            type: GET_NAVIGATION
        })

        request
            .getNavigation()
            .then(data => {
                dispatch({
                    type: GET_NAVIGATION_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type:GET_NAVIGATION_FAIL,
                    payload: err
                })
            })
    }
}
