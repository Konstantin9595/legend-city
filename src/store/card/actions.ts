import Api from '../../services/Api'
import { GET_CONTENT_SUCCESS } from '../content/actions'

export const UPDATE_CONTENT = "UPDATE_CONTENT"
export const UPDATE_CONTENT_SUCCESS = "UPDATE_CONTENT_SUCCESS"
export const UPDATE_CONTENT_FAIL = "UPDATE_CONTENT_FAIL"

const request = new Api()

// Причина в добавлении, удалении "избранного"
// Происходит запрос на изменение данных в бд
// После чего происходит запрос на получение всех новых дынных из бд

// сортинг при таком случае просто слетает.

// Возможно при рендринге контента нужно сделать  middleware

export const updateContentAction = (id:number, dataFavorites:boolean): Function => {
    return (dispatch:Function) => {
        dispatch({
            type: UPDATE_CONTENT
        })

        request
            .updateFavoriteEntity(id, dataFavorites)
            .then(data => {
                dispatch({
                    type: UPDATE_CONTENT_SUCCESS
                })
            })
            .then(() => {
                return request.getAllServices()
            })
            .then(services => {
                dispatch({
                    type: GET_CONTENT_SUCCESS,
                    payload: services
                })
            })
            .catch(err => {
                dispatch({
                    type:UPDATE_CONTENT_FAIL
                })
            })
    }
}