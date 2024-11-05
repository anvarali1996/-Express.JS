import express from "express";
const router = express.Router();

router.get("/all", (req, res) => {
    res.send("All Teachers");
});
router.post("/create", (req, res) => {
    res.send("Sign in new Teacher");
});
router.put("/update", (req, res) => {
    res.send("Update Teacher's ID");
});
router.delete("/delete", (req, res) => {
    res.send("Delete Teacher from DB");
});

export default router;