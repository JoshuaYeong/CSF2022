export interface Registration {
    name: string
    email: string
    id?: string
}

export interface Response {
    code: number
    message?: any
    data?: any
}