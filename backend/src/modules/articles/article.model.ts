import type { Tag } from "../tags/tag.model.js"
import type { Profile } from "../profiles/profile.model.js";

export interface Article {
  id: number;
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: Tag[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: Profile;
};