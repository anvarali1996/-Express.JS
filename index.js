///////====== DOUBLE CALLBACK FUNCTION ======///////

// import express from "express";
// const app = express();

// app.get("/double-cb", (req, res, next) => {
//     console.log("First Callback");
//     next();
// },
//     (req, res) => {
//         res.send("Second Callback");
//     });

// app.listen(8000, () => console.log("server runs"));


////==== ARRAY OF CALLBACKS ====////
// import express from "express";
// const app = express();

// const cb1 = (req, res, next) => {
//     console.log("First Callback");
//     next();
// };
// const cb2 = (req, res, next) => {
//     console.log("Second Callback");
//     next();
// };
// const cb3 = (req, res) => {
//     console.log("Third Callback");
//     res.send("Array of Callbacks");
// };
// app.get("/array-cb", [cb1, cb2, cb3])
// app.listen(8000, () => console.log("server runs"));

////////////======== FOUR CALLBACK ========//////////////

import express from "express";
const app = express();

const cb1 = (req, res, next) => {
    console.log("First Callback");
    next();
};
const cb2 = (req, res, next) => {
    console.log("Second Callback");
    next();
};
app.get(
    "/four-cb",
    [cb1, cb2],
    (req, res, next) => {
        console.log("Third callback");
        next();
    },
    (req, res, next) => {
        console.log("Third callback");
        res.send("<h1>There're four callbacks");
    }
);


app.listen(8000, () => console.log("server runs"));