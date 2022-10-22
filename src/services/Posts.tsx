import { baseURL as api } from "./config";
import { Post, User } from "../@types";

export const addMessage = async (post: Omit<Post, "id">) => {
  try {
    const response = await api.post("/post", post);
    return response.data;
  } catch (error: any) {
    alert(`Error: ${error.response.data}`);
  }
};

export const renderPosts = async (token: string) => { 
  const response = await api.get("/feed", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data.posts
}

 /* export const renderPosts = async (): Promise<IPost[]> => {
    return api.get<IPost[]>("/feed").then((response) => response.data);
}; */ 


  


