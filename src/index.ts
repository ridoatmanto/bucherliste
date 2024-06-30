import { Hono } from "hono";
import { books } from "./books";
import { authors } from "./authors";
import { book_authors } from "./book_authors";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Bucherliste",
    books: "/books",
    authors: "/authors",
    book_authors: "/book_authors",
  });
});

app.route("/books", books);
app.route("/authors", authors);
app.route("/book_authors", book_authors);

export default app;
