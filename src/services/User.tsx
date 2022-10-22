import { baseURL as api } from "./config";
import { logar, User } from "../@types";

export const addUser = async (user: User) => {
    const response = await api.post("/user", user)
    return response.data
}

export const signInUser = async (payload: logar) => {
    try {
        const response = await api.post("/login", payload);
        return response.data;
        
    } catch (error: any) {
        alert(`Error: ${error.response.data}`);
    }
};

export const getUserById = (id: string , token: string ) => {
    return api.get(`user/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }