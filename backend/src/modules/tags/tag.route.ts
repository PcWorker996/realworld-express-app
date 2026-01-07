import { Router } from "express";

const router = Router();

router.get("/tags", (_req, res) => {
  res.json({ message: "users route placeholder" });
});

export default router;


