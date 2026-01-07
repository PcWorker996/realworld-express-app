import { Router } from "express";
import { login, register, getCurrentUser, updateCurrentUser } from "./user.controller.js";
import { authRequired } from "../../middleware/auth.js";
const router = Router();
/**
 *  log in user
 */
router.post("/users/login", login);
/**
 *  register user
 */
router.post("/users", register);
/**
 *  get current user
 */
router.get("/user", authRequired, getCurrentUser);
/**
 *  Update user
 */
router.put("/user", authRequired, updateCurrentUser);
export default router;
//# sourceMappingURL=user.route.js.map