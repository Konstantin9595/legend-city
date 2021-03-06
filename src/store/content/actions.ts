import Api from '../../services/Api'

export const GET_CONTENT = "GET_CONTENT"
export const GET_CONTENT_SUCCESS = "GET_CONTENT_SUCCESS"
export const GET_CONTENT_FAIL = "GET_CONTENT_FAIL"

const request = new Api()


export const getContentAction = (): Function => {
    return (dispatch:Function) => {
        dispatch({
            type: GET_CONTENT
        })

        request
            .getAllServices()
            .then(data => {
                dispatch({
                    type: GET_CONTENT_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type:GET_CONTENT_FAIL,
                    payload: err
                })
            })
    }
}