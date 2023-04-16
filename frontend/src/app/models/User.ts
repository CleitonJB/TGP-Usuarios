import { RolesID } from "./Role";

export interface User {
    id?: string;
    name: string;
    email?: string;
    password: string;
    role?: RolesID;
}