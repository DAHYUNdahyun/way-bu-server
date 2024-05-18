import express from "express";
import { getSports } from "../controllers/sportController.js";

const sportRouter = express.Router();

sportRouter.route("/sports").get(getSports);

export default sportRouter;
