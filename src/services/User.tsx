import  baseURL  from "./config";
import { logar, User } from "../@types";

export const addUser = async (user: User) => {
    const response = await baseURL.post("/user", user)
    return response.data
}

export const signInUser = async (payload: logar) => {
    try {
        const response = await baseURL.post("/login", payload);
        return response.data;
        
    } catch (error: any) {
        alert(`Error: ${error.response.data}`);
    }
};

export const getUserById = (id: string | null , token: string | null) => {
    return baseURL.get(`user/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }