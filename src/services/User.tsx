import { baseUrl as api } from "./config";
import { logar, User } from "../@types";


export const addUser = async (user: Omit<User, "id">) => {
    try {
        const response = await api.post("/users", user);
        return response.data;
    } catch (error) {
        throw new Error("Não foi possível enviar o formulário");
    }
};

export const signInUser = async (payload: logar) => {
    try {
        const response = await api.post("/", payload);
        return response.data;
    } catch (error: any) {
        alert(`Error: ${error.response.data}`);
    }
};
