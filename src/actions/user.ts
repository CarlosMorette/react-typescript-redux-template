import { User } from './../constants/interfaces'

interface SaveUser {
    type: "SAVE_USER"
    payload: User
}

export const saveNewUser = (payload: User): SaveUser => {
    return {
        type: "SAVE_USER",
        payload,
    }
}