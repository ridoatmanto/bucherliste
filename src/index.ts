import { Hono } from "hono";
import { books } from "./books";
import { authors } from "./authors";
import { bookAuthors } from "./book-authors";

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Bücherliste (Book List)",
    books: "/books",
    authors: "/authors",
    "book-authors": "/book-authors",
  });
});

app.route("/books", books);
app.route("/authors", authors);
app.route("/book-authors", bookAuthors);

export default app;
