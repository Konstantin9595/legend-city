import { getContentReducers } from './content/reducers'
import { getCategoryReducers } from './category/reducers'
import { getNavigationReducers } from './navigation/reducers'
import { getUserReducers } from './user/reducers'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
    content: getContentReducers,
    category: getCategoryReducers,
    navigation: getNavigationReducers,
    user: getUserReducers
})


export default rootReducers