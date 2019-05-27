import Api from '../../services/Api'

export const UPDATE_CONTENT = "UPDATE_CONTENT"
export const UPDATE_CONTENT_SUCCESS = "UPDATE_CONTENT_SUCCESS"
export const UPDATE_CONTENT_FAIL = "UPDATE_CONTENT_FAIL"

const request = new Api()


export const updateContentAction = (id:number, dataFavorites:boolean): Function => {
    return (dispatch:Function) => {
        dispatch({
            type: UPDATE_CONTENT
        })

        request
            .updateFavoriteEntity(id, dataFavorites)
            .then(data => {
                dispatch({
                    type: UPDATE_CONTENT_SUCCESS,
                    payload: true
                })
            })
            .catch(err => {
                dispatch({
                    type:UPDATE_CONTENT_FAIL,
                    payload: false
                })
            })
    }
}