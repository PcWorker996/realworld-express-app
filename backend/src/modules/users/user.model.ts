import type { Article } from "../articles/article.model.js";
import type { Comment } from "../articles/comment.model.js";

export interface User {
  id: number;
  username: string;
  email: string;
  passwordHash: string;
  bio?: string | null;
  image?: string | null;
  articles: Article[];
  following: User[];
  followers: User[];
  favorites: Article[];
  comments: Comment[];
}