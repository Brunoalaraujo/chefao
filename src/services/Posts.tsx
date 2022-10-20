import { baseURL as api } from "./config";
import { IPost, User } from "../@types";

 /* export const renderPosts = async (): Promise<IPost[]> => {
    return api.get<IPost[]>("/feed").then((response) => response.data);
}; */ 

export const renderPosts = async (token: string) => {
    const response = await api.get("/feed", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.posts
  }
  

export const addMessage = async (post: Omit<IPost, "id">) => {
    try {
        const response = await api.post("/posts", post);
        return response.data;
    } catch (error: any) {
        alert(`Error: ${error.response.data}`);
    }
};
