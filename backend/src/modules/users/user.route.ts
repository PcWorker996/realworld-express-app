import { Router } from "express";

const router = Router();

/**
 *  log in user
 */
router.post("/users/login", (_req, res) => {
  res.json({ message: "users route placeholder" });
});

/**
 *  register user
 */
router.post("/users", (_req, res) => {
  res.json({ message: "users route placeholder" });
});

/**
 *  get current user
 */
router.get("/user", (_req, res) => {
  res.json({ message: "users route placeholder" });
});

/**
 *  Update user
 */
router.put("/user", (_req, res) => {
  res.json({ message: "users route placeholder" });
});

export default router;
