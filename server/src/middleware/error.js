export const errorHandler = (err, _req, res, _next) => {
  console.error(err);
  const code = res.statusCode >= 400 ? res.statusCode : 500;
  res.status(code).json({ message: err.message || "Server Error" });
};
