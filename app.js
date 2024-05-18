import express from "express";
import rootRouter from "./routers/rootRouter.js";
import programRouter from "./routers/programRouter.js";
import cors from "cors";
import sportRouter from "./routers/sportsRouter.js";

const PORT = 4000;

const app = express();
app.use(cors());

app.use("/api", rootRouter, programRouter, sportRouter);

const handleListening = () => {
  console.log(`Server listening on http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
