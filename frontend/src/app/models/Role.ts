export interface Role {
    id: RolesID;
    description: string;
}

export enum RolesID {
    Novato        = 1,
    Estagiario    = 2,
    Desenvolvedor = 3,
    Gerente       = 4,
    Diretor       = 5,
}

export enum RolesString {
    '1 - Novato'        = 1,
    '2 - Estagiario'    = 2,
    '3 - Desenvolvedor' = 3,
    '4 - Gerente'       = 4,
    '5 - Diretor'       = 5
}