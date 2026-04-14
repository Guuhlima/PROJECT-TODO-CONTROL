import { FastifyInstance } from "fastify";  
import { todoController } from "../../controller/todoController/todo.controller";

export async function todoRoutes(app: FastifyInstance) {
    app.post("/todos", (request, reply) => todoController.create(request, reply));
}