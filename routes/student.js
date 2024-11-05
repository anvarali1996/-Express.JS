// import express from "express";
// const app = express();

// // app.get("/student", (req, res) => {
// //     res.send("All Studnets");
// // });
// // app.post("/student", (req, res) => {
// //     res.send("Add New Studnet");
// // });
// // app.put("/student", (req, res) => {
// //     res.send("Update Studnet");
// // });
// // app.delete("/student", (req, res) => {
// //     res.send("Delete Studnet");
// // });

// // REFACTOR
// app.route("/student")
//     .get((req, res) => res.send("All Students"))
//     .post((req, res) => res.send("Add Student"))
//     .put((req, res) => res.send("Update Student"))
//     .delete((req, res) => res.send("Delete Student"))

// app.listen(8000, () => console.log("server runs"));

//////////========ROUTER=========//////////
import express from "express";
const router = express.Router();

router.get("/all", (req, res) => {
    res.send("All Students");
});
router.post("/create", (req, res) => {
    res.send("Sign in new Students");
});
router.put("/update", (req, res) => {
    res.send("Update Student's ID");
});
router.delete("/delete", (req, res) => {
    res.send("Delete Students from DB");
});

export default router;
