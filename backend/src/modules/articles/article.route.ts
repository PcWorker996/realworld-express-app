import { Router } from "express";

const router = Router();

router.get("/articles", (_req, res) => {
  res.json({ message: "users route placeholder" });
});

router.get("/articles/feed", (_req, res) => {
  res.json({ message: "users route placeholder" });
});

router.get("/articles/:slug", (_req, res) => {
  res.json({ message: "users route placeholder" });
});

router.post("/articles", (_req, res) => {
  res.json({ message: "users route placeholder" });
});

router.put("/articles/:slug", (_req, res) => {
  res.json({ message: "users route placeholder" });
});

router.delete("/articles/:slug", (_req, res) => {
  res.json({ message: "users route placeholder" });
});

router.post("/articles/:slug/comments", (_req, res) => {
  res.json({ message: "users route placeholder" });
});

router.get("/articles/:slug/comments/:id", (_req, res) => {
  res.json({ message: "users route placeholder" });
});

router.delete("/articles/:slug/comments/:id", (_req, res) => {
  res.json({ message: "users route placeholder" });
});

router.post("/articles/:slug/favorite", (_req, res) => {
  res.json({ message: "users route placeholder" });
});

router.delete("/articles/:slug/favorite", (_req, res) => {
  res.json({ message: "users route placeholder" });
});

export default router;
