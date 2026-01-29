import { Router } from "express";
import * as AuthController from "./auth.controller.js";

export const authRoutes = Router();

authRoutes.post("/register", AuthController.register);
authRoutes.post("/login", AuthController.login);
