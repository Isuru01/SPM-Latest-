import { Router } from "express";
import { logOut, signIn, signUp } from "../controllers/auth.controller.mjs";

const router = Router();

router.route("/signin").post(signIn);
router.route("/signup").post(signUp);
router.route("/logout").post(logOut);

export default router;
