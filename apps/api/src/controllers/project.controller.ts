import { type Context } from "hono";
import { projectService } from "../services/project.service";

export const listProjects    = async (c: Context) => {
    const { page, limit } = c.req.query();
    const projects = await projectService.find({ page, limit });
    return c.json(projects);
}

export const getProjectById = async (c: Context) => {
    const id = c.req.param("id");
    const project = await projectService.findById(id);
    return c.json(project);
}

export const createProject = async (c: Context) => {
    const { name, description } = await c.req.json();
    const project = await projectService.create({ name, description });
    return c.json(project);
}

export const updateProject = async (c: Context) => {
    const id = c.req.param("id");
    const { name, description } = await c.req.json();
    const project = await projectService.update(id, { name, description });
    return c.json(project);
}

export const deleteProject = async (c: Context) => {
    const id = c.req.param("id");
    const project = await projectService.delete(id);
    return c.json(project);
}
