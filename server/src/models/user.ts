import { RowDataPacket } from "mysql2";

export interface IUser extends RowDataPacket {
  id: string;
  username?: string;
  email: string;
  password: string;
  phonenumber?: string;
  salt: string
}
