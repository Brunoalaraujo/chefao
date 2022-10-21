/* export interface Post {
    id: number;
    user_id: number;
    nome: string;
    email: string;
    comentario: string;
}
*/
export interface IPost {
    description: string;
    assets: IAssets;
    user: string;
  }
  
  export interface IAssets {
    offer: Array<string>;
    want: Array<string>;
  }
  
  export interface PostDocument extends IPost, Document {
    _doc: { [x: string]: unknown; password: unknown };
    updatedAt: Date;
    createdAt: Date;
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
    nickname?: string;
    
    
    
}

export interface PostState {
    post: IPost[];
}
