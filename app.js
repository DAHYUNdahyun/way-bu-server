import express from "express";
import rootRouter from "./routers/rootRouter.js";
import programRouter from "./routers/programRouter.js";
import cors from "cors";

const PORT = 4000;

const app = express();
app.use(cors());

app.use("/api", rootRouter, programRouter);

const handleListening = () => {
  console.log(`Server listening on http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);

/* To Do
1. getPrograms
2. postLogin
3. postSignin
4. getUsers
*/
