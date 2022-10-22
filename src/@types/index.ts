export interface Post {
    user: User;
    assets: IAssets;
    description: string;
    accessTk: UserState;
  }
  
  export interface IAssets {
    offer: Array<string>;
    want: Array<string>;
  }
  
  export interface PostDocument extends Post, Document {
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
    post: Post[];
}
