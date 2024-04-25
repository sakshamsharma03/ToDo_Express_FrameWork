import express from "express";
import {user} from "../models/user.js"
import {  getAllusers, login, register,  getmyProfile, logout } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router=express.Router(); 

router.get("/all",getAllusers);

router.post("/new",register);
router.post("/login",login);
router.post("/logout",logout);
router.get("/me",isAuthenticated,getmyProfile);



export default router;