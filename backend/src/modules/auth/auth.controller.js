import { registerSchema, loginSchema } from "./auth.schema.js";
import * as AuthService from "./auth.service.js";

export async function register(req, res, next) {
  try {
    const payload = registerSchema.parse(req.body);
    const user = await AuthService.register(payload);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const payload = loginSchema.parse(req.body);
    const user = await AuthService.login(payload);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}
