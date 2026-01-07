import { Router } from "express";
const router = Router();
router.get("/profiles/:username", (_req, res) => {
    res.json({ message: "users route placeholder" });
});
router.post("/profiles/:username/follow", (_req, res) => {
    res.json({ message: "users route placeholder" });
});
router.delete("/profiles/:username/follow", (_req, res) => {
    res.json({ message: "users route placeholder" });
});
export default router;
//# sourceMappingURL=profile.route.js.map