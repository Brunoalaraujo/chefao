export interface Post {
    id: number;
    user_id: number;
    nome: string;
    email: string;
    comentario: string;
}

export interface logar {
    email: string;
    password: string;
}

export interface User extends logar {
    id: number;
    nome: string;
    permission: Permission;
    estado: string,
    cidade: string,
    endereco: string,
    numero: string,
    cep: string,
    bairro: string,
    complemento: string,
}

export enum Permission {
    "Nothing",
    "User",
    "Admin",
}

export interface UserState {
    isLogged: boolean;
    accessToken: string;
    permission: Permission;
    id?: number;
    nome?: string;
    email?: string;
    cidade: string,
    estado: string
    
    
}

export interface PostState {
    post: Post[];
}
