import Api from '../services/Api'
import { requestCategoryServices, REQUEST_CATEGORY_SERVICES } from '../actions/requestCategoryServices'

const initialData = new Api().getAllServices()

const requestServicesReducer = (state = initialData, action: any ) => {
    switch (action.type) {
        case "REQUEST_CATEGORY_SERVICES":
            return state
        default:
            return state
    }
}

export default requestServicesReducer