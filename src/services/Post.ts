import { IAssets, User, UserState } from "../@types";
import baseURL from "./config";

interface PostPayload {
  // user: User;
  assets: IAssets;
  description: string;
  token: string;
}

export function novoPost({ description, assets, token }: PostPayload) {
  return baseURL.post(
    "/post",
    { description },
        {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

export function listarPost() {
  return baseURL.get("/post");
}
