import { initialState } from './'

export function userReducer(state = initialState, action: any){
    switch(action.type){
        case "SAVE_USER":
            return { ...state, user: action.payload }
        default:
            return state
    }
}