import type { Context } from "hono";

export const paramIdValidation = async (c: Context, next: () => void) => {
    const { id } = c.req.param();
    if (!id) {
        return c.json({ error: "ID is required" }, 400);
    }
    await next();
}
