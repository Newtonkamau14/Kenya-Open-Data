import { RowDataPacket } from "mysql2";


export interface IAPI extends RowDataPacket {
    id: number
    userId: string
    name: string
    apiKey: string
    createdAt: Date
}