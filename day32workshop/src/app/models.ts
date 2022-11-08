export interface LineItem {
    item: string
    quantity: number
}

export interface Order {
    name: string
    mobile: number
    lineItems: LineItem[]
    orderId?: string
}

export type OrderDB = {
    [ key: string ] : Order
}

export const orderDB: OrderDB = {}