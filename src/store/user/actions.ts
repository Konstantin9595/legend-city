import Api from '../../services/Api'

export const GET_USER = "GET_USER"
export const GET_USER_SUCCESS = "GET_USER_SUCCESS"
export const GET_USER_FAIL = "GET_USER_FAIL"

const request = new Api()

export const getUserAction = (id:number): Function => {


    return (dispatch:Function) => {

        dispatch({
            type: GET_USER
        })
        request
            .getUser(id)
            .then(data => {
                dispatch({
                    type: GET_USER_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type:GET_USER_FAIL,
                    payload: err
                })
            })
    }
}
