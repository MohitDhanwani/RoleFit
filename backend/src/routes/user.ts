import { Router } from "express";
import { prisma } from "../database/index.js";

const route: Router = Router();

route.post("/create-user", async (req, res) => {
  try {
    const {username, emailAddress} = req.body;

    // Create user in DB
    const registeredUser = await prisma.user.create({
      data: {
       username,
       emailAddress
      },
    });

    return res.status(201).json(registeredUser);
  } catch (error: any) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Something went wrong" });
  }
});

export default route;
