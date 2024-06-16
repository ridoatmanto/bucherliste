import { Hono } from "hono";

import { type Book, books } from "./data/books";

const app = new Hono();
app.get("/", (c) => {
  return c.json(books);
});

export default app;
