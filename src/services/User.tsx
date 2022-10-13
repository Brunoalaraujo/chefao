import { baseURL as api } from "./config";
import { logar, User } from "../@types";


/*  export const addUser = async (user: <User>) => {
    try {
        const response = await api.post("/user", user);
        console.log(response.data)
        return response.data;
    } catch (error) {
        throw new Error("Não foi possível enviar o formulário");
    }
};
*/
export const addUser = async (user: User) => {
    const response = await api.post("/user", user)
    console.log(response.data)
    
    return response.data
}

export const signInUser = async (payload: logar) => {
    try {
        const response = await api.post("/login", payload);
        console.log(response.data)
        console.log(response.status)
        console.log(response.data.token)
        return response.data;
        
    } catch (error: any) {
        alert(`Error: ${error.response.data}`);
    }
};

export const getUserById = (id: string | null, token: string | null)  => {
    return api.get(`user/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }