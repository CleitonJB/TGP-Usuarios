import { RolesID } from "./Role";

export interface User {
    id?: number;
    name: string;
    email?: string;
    password: string;
    role?: RolesID;
}