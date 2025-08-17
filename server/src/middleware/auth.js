import jwt from "jsonwebtoken";

export const auth = (req, _res, next) => {
  const token = (req.headers.authorization || "").replace("Bearer ", "");
  if (!token) return next(); // public allowed
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id, role: decoded.role };
  } catch {}
  next();
};

export const authRequired = (req, res, next) => {
  if (!req.user?.id) return res.status(401).json({ message: "Unauthorized" });
  next();
};

export const adminOnly = (req, res, next) => {
  if (req.user?.role !== "admin")
    return res.status(403).json({ message: "Forbidden" });
  next();
};
