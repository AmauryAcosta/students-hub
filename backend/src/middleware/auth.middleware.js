import jwt from "jsonwebtoken";
import { env } from "../config/env.js";

export function requireAuth(req, res, next) {
  const header = req.headers.authorization || "";
  // Extrae el token de forma case-insensitive (soporta 'Bearer' y 'bearer')
  const m = header.match(/^\s*bearer\s+(.+)$/i);
  const token = m ? m[1] : null;

  if (!token) {
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
