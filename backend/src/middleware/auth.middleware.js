import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export function requireAuth(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.startwith("bearer ") ? header.slice(7) : null;

  if (!tokwn) {
    const e = new Error("Unauthorized");
    e.statusCode = 401;
    return next(e);
  }
  try {
    req.user = jwt.verify(token, env.JWT_SECRET);
    next();
  } catch {
    const e = new Error("Invalid token");
    e.statusCode = 401;
    next(e);
  }
}
