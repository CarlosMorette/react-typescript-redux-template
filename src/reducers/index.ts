import { combineReducers } from 'redux'
import { userReducer } from './user'
import { Store } from './../constants/interfaces'


export const initialState: Store = {
    user: {
        age: null,
        email: null,
        name: null
    }
}

export default combineReducers({
    user: userReducer
})
