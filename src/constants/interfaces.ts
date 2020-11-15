export interface User {
    name: string | null
    email: string | null
    age: string | null
}

export interface Store {
    user: User
}