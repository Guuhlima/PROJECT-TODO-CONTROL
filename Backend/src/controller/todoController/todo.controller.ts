import type { FastifyReply, FastifyRequest } from "fastify";
import { ZodError } from "zod";
import { createTodoSchema } from "../../schema/todoSchema/todo.schema";
import { todoService } from "../../services/todoServices/todo.service";

export class TodoController {
    async create(request: FastifyRequest, reply: FastifyReply) {
        try {
            const data = createTodoSchema.parse(request.body);

            const todo = await todoService.create(data);

            return reply.status(201).send(todo);
        } catch (error) {
            if (error instanceof ZodError) {
                return reply.status(400).send({
                    message: "Dados invalidos",
                    errors: error.flatten(),
                });
            }

            return reply.status(500).send({
                message: "Erro ao criar todo"
            })
        }
    } 
}

export const todoController = new TodoController()