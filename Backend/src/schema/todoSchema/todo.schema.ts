import { z } from "zod";

export const createTodoSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, "O campo title é obrigatorio"),
    description: z
        .string()
        .trim()
        .optional(),
});

export type CreateTodoInput = z.infer<typeof createTodoSchema>