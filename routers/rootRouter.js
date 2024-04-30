import express from "express";
import { getLogin, postLogin } from "../controllers/rootController.js";

const rootRouter = express.Router();

rootRouter.route("/login").post(postLogin).get(getLogin);

export default rootRouter;
