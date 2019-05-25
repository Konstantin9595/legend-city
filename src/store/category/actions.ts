import Api from '../../services/Api'

export const GET_CATEGORY = "GET_CATEGORY"
export const GET_CATEGORY_SUCCESS = "GET_CATEGORY_SUCCESS"
export const GET_CATEGORY_FAIL = "GET_CATEGORY_FAIL"

const request = new Api()

export const getCategoryAction = (): Function => {
    return (dispatch:Function) => {
        dispatch({
            type: GET_CATEGORY
        })

        request
            .getCategory()
            .then(data => {
                dispatch({
                    type: GET_CATEGORY_SUCCESS,
                    payload: data
                })
            })
            .catch(err => {
                dispatch({
                    type:GET_CATEGORY_FAIL,
                    payload: err
                })
            })
    }
}
