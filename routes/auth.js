import express from "express";
import { signin } from "../controllers/auth.js";
import { signup } from "../controllers/auth.js";
const router = express.Router();

//user create
router.post("/signup", signup)

//sign up
router.post("/signin", signin)

//google auth
router.post("/google", )

export default router;