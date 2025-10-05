import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import { prisma } from "../database/index.js";
import dotenv from "dotenv";
dotenv.config();

interface JwtPayload {
    id: string
}

export const VerifyAdmin = async (req: Request, res: Response, next: NextFunction) => {
  const secretKey = process.env.JWT_SECRET_KEY;

  try {
    if (!secretKey) {
      return res.status(500).json({ message: "Secret Key is not configured" });
    }

    const adminToken : string = req.cookies?.UserToken || req.headers["authorization"]?.split(" ")[1];
    if (!adminToken) {
      return res.status(400).json({ message: "User is not authenticated" });
    }

    const decodedAdminToken = jwt.verify(adminToken, secretKey) as JwtPayload;
    const tokenVerificationResposne = await prisma.user.findUnique({
        where:{
            id: decodedAdminToken.id,
        }
    })
    if(tokenVerificationResposne?.role == 'ADMIN'){
        (req as any).userId = decodedAdminToken.id
        next();
    } else {
        return res.status(403).json({message: "User Unauthorized to access the requested route"});
    }
  } catch (error) {
    console.error("Error in verifying admin for protected routes", error);
    return res.status(500).json({message: "Error in accessing protected routes"});
  }
};
