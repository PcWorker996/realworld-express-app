import type { Profile } from "../profiles/profile.model.js";

export interface Comment {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  body: string;
  author: Profile;
};