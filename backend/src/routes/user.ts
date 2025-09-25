import { Router } from "express";
import { prisma } from "../database/index.js";
import { UserRoles } from "@prisma/client";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

//verify the jwt token when user updates the profile

const userRoute: Router = Router();

interface User {
  username: string;
  emailAddress: string;
  contactNumber?: string;
  role?: UserRoles;
  isPremiumMember?: boolean;
  skills?: string[];
  hasExperience?: boolean;
  totalMonthsOfExperience?: number;
  prevJobTitle?: string[];
  jobsTargetting?: string[];
}

userRoute.post("/create-user", async (req, res) => {
  const userdata : User = req.body;

  try {
    const checkExistingUser = await prisma.user.findFirst({
      where: {
        emailAddress: userdata.emailAddress,
      },
    });

    if (checkExistingUser == null) {
      const userDataResponse = await prisma.user.create({
        data: {
          username: userdata.username,
          emailAddress: userdata.emailAddress,
          contactNumber: userdata.contactNumber ?? null,
          role: userdata.role ?? UserRoles.USER,
          isPremiumMember: userdata.isPremiumMember ?? false,
          skills: userdata.skills ?? [],
          hasExperience: userdata.hasExperience ?? false,
          totalMonthsOfExperience: userdata.totalMonthsOfExperience ?? 0,
          prevJobTitle: userdata.prevJobTitle ?? [],
          jobsTargetting: userdata.jobsTargetting ?? [],
        },
      });
      
      const secretKey = process.env.JWT_SECRET_KEY;
      if (!secretKey) {
        return res.status(500).json("JWT secret key is not defined");
      }

      //assign jwt token
      const userToken = jwt.sign(userDataResponse.id, secretKey);
      res.cookie("UserToken", userToken);
      return res.status(201).json({message: "User created successfully", userToken});
    } else {
      return res.status(409).json("User with this email already exists");
    }
  } catch (error) {
    console.error("Error in creating new user", error);
    return res.status(400).json("Error in creating new user");
  }
});

userRoute.post("/update-user", async (req, res) => {
  const userDataToUpdate : User = req.body;
  
  try {
    const updatedUserResposne = await prisma.user.update({
      where:{
        emailAddress: userDataToUpdate.emailAddress,
      },
      data: {
          username: userDataToUpdate.username,
          emailAddress: userDataToUpdate.emailAddress,
          contactNumber: userDataToUpdate.contactNumber ?? null,
          role: userDataToUpdate.role ?? UserRoles.USER,
          isPremiumMember: userDataToUpdate.isPremiumMember ?? false,
          skills: userDataToUpdate.skills ?? [],
          hasExperience: userDataToUpdate.hasExperience ?? false,
          totalMonthsOfExperience: userDataToUpdate.totalMonthsOfExperience ?? 0,
          prevJobTitle: userDataToUpdate.prevJobTitle ?? [],
          jobsTargetting: userDataToUpdate.jobsTargetting ?? [],
      }
    });
    return res.status(200).json(updatedUserResposne);
  } catch (error) {
    console.error("Error in updating user data", error);
    return res.status(400).json("Error in updating user");
  }
})

export default userRoute;