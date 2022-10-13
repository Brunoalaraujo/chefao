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

export interface User  {
  //  id: number;
   
  name: string;
  nickname: string;
  email: string;
  password: string;
  gender: string;
 // role: string;
  address: IAddress;
}
export interface IAddress {
    city: string;
    state: string;
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
