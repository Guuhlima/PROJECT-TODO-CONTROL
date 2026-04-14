import { prisma } from "../../lib/prisma";
import type { CreateTodoInput } from "../../schema/todoSchema/todo.schema";

export class TodoService {
    async create(data: CreateTodoInput) {
        return prisma.todo.create({
            data: {
                title: data.title,
                description: data.description,
            }
        })
    }
}

export const todoService = new TodoService();
