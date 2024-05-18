import express from "express";
import { getPrograms } from "../controllers/programController.js";

const programRouter = express.Router();

programRouter.route("/programs").get(getPrograms);

export default programRouter;
