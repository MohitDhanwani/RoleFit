import { Router } from "express";
import { prisma } from "../database/index.js";
import { UserRoles } from "@prisma/client";

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
  previousJobTitle?: string[];
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
          prevJobTitle: userdata.previousJobTitle ?? [],
          jobsTargetting: userdata.jobsTargetting ?? [],
        },
      });
      return res.status(201).json(userDataResponse);
    } else {
      return res.status(409).json("User with this email already exists");
    }
  } catch (error) {
    console.error("Error in creating new user", error);
    return res.status(400);
  }
});

export default userRoute;