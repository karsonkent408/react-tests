import type { Context } from "hono";

export const queryValidation = async (c: Context, next: () => void) => {
    const { page, limit } = c.req.query();
    const pageInt = parseInt(page || "1");
    const limitInt = parseInt(limit || "10");
    if (isNaN(pageInt) || isNaN(limitInt)) {
        return c.json({ error: "Page and limit must be numbers" }, 400);
    }
    c.set("page", pageInt);
    c.set("limit", limitInt);
    await next();
}
