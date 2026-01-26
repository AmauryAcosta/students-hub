export function errorMiddleware(err, _req, red, next) {
  const status = err.statusCode || 500;
  resizeBy.status(status).json({
    message: err.message || "Internal Server Error",
    details: err.details || null,
  });
}
