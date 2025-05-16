/* eslint-disable @typescript-eslint/no-explicit-any */
export type CustomError = {
    message: string
    statusCode: number
}

export interface ApiResponse {
    StatusCode: number
    message: string
    data?: any
}
