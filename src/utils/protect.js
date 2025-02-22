import jwt from "jsonwebtoken";

const protect = (handler) => async (req, res) => {
  if (req.method !== "GET") {
    res.status(400).json({
      message: "Invalid Request",
    });
  }
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    res.status(400).json({
      message: "No Token, Not Authorize",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    return await handler(req, res);
  } catch (error) {
    console.error("JWT Verification Error: ", error);
    return res.status(401).json({
      message: "Invalid or Expired Token.",
    });
  }
};

export default protect;
