import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

interface JwtPayload {
    id: string;
}

export const VerifyJWT = (req: Request, res: Response, next: NextFunction) => {
  try {
    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
      return res.status(500).json({ message: "Secret key is not configured" });
    }

    const token = req.cookies?.UserToken || req.headers["authorization"]?.split(" ")[1];
    if(!token){
        return res.status(401).json({message: "User is not authenticated"});
    }

    const decodedToken = jwt.verify(token, secretKey) as JwtPayload;
    (req as any).userId = decodedToken.id;
    next();
  } catch (error) {
    console.error("JWT authentication failed", error);
    return res.status(403).json({message: "Invalid or expired token"});
  }
};
