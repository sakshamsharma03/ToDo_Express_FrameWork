import express from "express";
import { newtask } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router=express.Router();

router.post("/new",isAuthenticated,newtask);

export default router; 