import { Router } from "express";
import { requireAuth } from "../../middleware/auth.middleware.js";
import * as Ctrl from "./users.controller.js";

export const usersRoutes = Router();

usersRoutes.use(requireAuth);

usersRoutes.get("/", Ctrl.list);
usersRoutes.post("/", Ctrl.create);
usersRoutes.get("/:id", Ctrl.getById);
usersRoutes.put("/:id", Ctrl.update);
usersRoutes.delete("/:id", Ctrl.remove);
