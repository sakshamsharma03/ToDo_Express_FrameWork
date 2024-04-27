import express from "express";
import { UpdateTask, deleteTask, getmytask, newtask } from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router=express.Router();

router.post("/new",isAuthenticated,newtask);
router.get("/my",isAuthenticated,getmytask);

router.route("/:id").put(isAuthenticated,UpdateTask).delete(isAuthenticated,deleteTask);

export default router; 