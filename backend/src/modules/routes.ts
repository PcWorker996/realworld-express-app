import { Router } from "express";
import userRoutes from "./users/user.route.js";
import articleRoutes from "./articles/article.route.js";
import tagRoutes from "./tags/tag.route.js";
import profileRoutes from "./profiles/profile.route.js";

const api = Router();

api.use(userRoutes);
api.use(articleRoutes);
api.use(tagRoutes);
api.use(profileRoutes);

export default api;