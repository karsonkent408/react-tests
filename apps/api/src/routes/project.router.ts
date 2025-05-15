import { Hono } from "hono";
import { createProject, deleteProject, getProjectById, listProjects, updateProject } from "../controllers/project.controller";
import { paramIdValidation } from "../validation/paramId.validation";
import { queryValidation } from "../validation/query.validation";
import { bodyValidation } from "../validation/projects/body.validation";
const projectRouter = new Hono();

projectRouter.post("/list", queryValidation, listProjects);

projectRouter.get("/:id", paramIdValidation, getProjectById);

projectRouter.post("/", bodyValidation, createProject);

projectRouter.patch("/:id", paramIdValidation, bodyValidation, updateProject);

projectRouter.delete("/:id", paramIdValidation, deleteProject);

export default projectRouter;
