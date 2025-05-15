import type { Context } from "hono";
import type { IProject } from "models";

export const bodyValidation = async (c: Context, next: () => void) => {
    const body = await c.req.json();
    
    if (!body) {
        return c.json({ error: "Body is required" }, 400);
    }

    if (!body.name && !body.description) {
        return c.json({ error: "Name or description are required" }, 400);
    }

    await next();
}
