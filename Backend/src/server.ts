import Fastify from "fastify";
import { todoRoutes } from "./routes/todoRoutes/todo.routes";

const app = Fastify();

app.register(todoRoutes);

app.listen({ port: 3333 });