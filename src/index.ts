import { Hono } from "hono";

import { type Author, type Book, dataBooks } from "./data/books";
import { SortByDate } from "./utils/sort-by-date";

let books = dataBooks;

const app = new Hono();

app.get("/", (c) => {
  return c.json({
    message: "Bucherliste",
    books: "/books",
  });
});

app.get("/books", (c) => {
  return c.json(SortByDate(books));
});

app.get("/books/:id", (c) => {
  const book = books.filter((book) => book.id == c.req.param("id"));
  return c.json(book);
});

app.post("/books", async (c) => {
  const body = await c.req.json();
  const newBook: Book = {
    id: randomId(),
    title: body.title,
    description: body.description,
    authors: [],
    publised: body.published,
    cover: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const newBooksList = [...books, newBook];
  books = newBooksList;

  return c.json(newBook);
});

app.delete("/books/:id", (c) => {
  const id = c.req.param("id");

  if (!id) {
    return c.json({ message: "Books ID needed before delete!" });
  }

  const deletedBook = books.find((book) => book.id === id);

  if (!deletedBook) {
    return c.json({ message: `Books with ID: $id not found.` });
  }

  books = books.filter((book) => book.id !== id);

  return c.json({
    message: `Book with ID: ${id} has been deleted!`,
    deletedBook: deletedBook,
  });
});

app.put("/books/:id", async (c) => {
  const id = c.req.param("id");
  const body = await c.req.json();

  if (!id) {
    return c.json({ message: "Books ID needed before delete!" });
  }

  const updatedBook = books.find((book: Book) => book.id === id);

  if (!updatedBook) {
    return c.json({ message: `Books with ID: $id not found.` });
  }

  const submittedBook: Book = {
    id: updatedBook.id,
    title: body.title,
    description: body.description,
    authors: [],
    publised: body.published,
    cover: "",
    createdAt: updatedBook.createdAt,
    updatedAt: new Date(),
  };

  const latestBook = books.map((book: Book) => {
    if (book.id === id) {
      return submittedBook;
    } else {
      return book;
    }
  });

  books = latestBook;

  return c.json({
    message: `Book with ID: ${id} has been updated!`,
    deletedBook: submittedBook,
  });
});

app.delete("/books", (c) => {
  books = [];
  return c.json(books);
});

function randomId() {
  return Math.random().toString(36).slice(2, 7);
}

export default app;
