import jwt from "jsonwebtoken";
const auth = (req, res, next) => {
  try {
      const token = req.headers.authorization.split(" ")[1];
      const decodedData = jwt.verify(token, process.env.JWT_SECRET);

      console.log("Decoded Token:", decodedData); 
      req.userId = decodedData?.id;
      next();
  } catch (error) {
      console.log("Auth Middleware Error:", error);
      res.status(400).json("Invalid credentials...");
  }
};

export default auth;