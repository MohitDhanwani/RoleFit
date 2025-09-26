import { Router } from "express";
import { VerifyAdmin } from "../middleware/AdminAuthentication.js";
import { prisma } from "../database/index.js";

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

jobsRoute.post("/update/:id", VerifyAdmin, async (req, res) => {
  const updatedJobData: JobInformation = req.body;
  const jobIdToUpdate = req.params.id;

  if (!jobIdToUpdate) {
    return res.status(400).json({ error: "Job ID is required in params" });
  }
  try {
    await prisma.jobInformation.update({
      where: {
        jobId: jobIdToUpdate,
      },
      data: {
        ...updatedJobData,
      },
    });
    return res.status(200).json({ message: "Job updated successfully" });
  } catch (error) {
    console.error("Error in updating job details", error);
    return res.status(500).json({ message: "Error in updating job" });
  }
});

jobsRoute.delete("/delete-job/:id", VerifyAdmin, async (req, res) => {
  if (!req.params.id) {
    return res.status(400).json({ error: "Job ID is required in params" });
  }
  try {
    await prisma.jobInformation.delete({
      where: {
        jobId: req.params.id,
      },
    });
    return res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    console.error("Error in deleting jobs", error);
    return res.status(500).json({ message: "Error in deleting jobs" });
  }
});

export default jobsRoute;