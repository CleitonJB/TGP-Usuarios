import { Role } from "./Role";
import { Funcionalidade } from "./Funcionalidade";

export interface Autorizacao {
    id: number;
    role: Role;
    funcionalidade: Funcionalidade;
}