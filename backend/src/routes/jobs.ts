import { Router } from "express";
import { VerifyAdmin } from "../middleware/AdminAuthentication.js";
import { prisma } from "../database/index.js";

// create route to allow only the ADMIN to do the job posting
// create route to allow only the ADMIN to edit the job postings
// create route to allow only the ADMIN to delete the job postings

//if normal user is trying to access the admin route should get 403 error

const jobsRoute: Router = Router();

interface JobInformation {
  title: string;
  description: string;
  applyUrl: string;
}

jobsRoute.post("/create", VerifyAdmin, async (req, res) => {
  const jobData: JobInformation = req.body;
  try {
    await prisma.jobInformation.create({
      data: {
        title: jobData.title,
        description: jobData.description,
        applyUrl: jobData.applyUrl,
      },
    });
    return res.status(201).json({ message: "Job created successfully" });
  } catch (error) {
    console.error("Error in creating new job", error);
    return res.status(500).json({ message: "Error in creating new job" });
  }
});

export default jobsRoute;
