import express from "express";
import student from "./routes/student.js";
import teacher from "./routes/teachers.js"
const app = express();

app.use('/students', student);
app.use('/teachers', teacher);


app.listen(8000, () => console.log("It works"));
