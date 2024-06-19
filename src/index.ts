import { Hono } from "hono";

import {
  type Book,
  dataBooks,
  type Author,
  dataAuthors,
  type CompleteBook,
} from "./data/books";
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
  const sortedBooks = SortByDate(books);
  const completeBooks: CompleteBook[] = [];
  sortedBooks.forEach((book: Book) => {
    let currentBook = book;
    Object.assign(currentBook, { prop: "authors" });
    currentBook.authors = [getAuthorDetail(book.author_id)];
    completeBooks.push(currentBook);
  });

  return c.json(completeBooks);
});

app.get("/books/:id", (c) => {
  const book = books.filter((book) => book.id == c.req.param("id"));

  Object.assign(book, { prop: "authors" });
  book.authors = [getAuthorDetail(book.author_id)];

  return c.json(book);
});

app.post("/books", async (c) => {
  const body = await c.req.json();
  const newBook: Book = {
    id: randomId(),
    title: body.title,
    description: body.description,
    author_id: body.author_id,
    published: body.published,
    cover: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const newBooksList = [...books, newBook];
  books = newBooksList;

  Object.assign(newBook, { prop: "authors" });
  newBook.authors = [getAuthorDetail(newBook.author_id)];

  return c.json(newBook);
});

app.delete("/books/:id", (c) => {
  const id = c.req.param("id");

  if (!id) {
    return c.json({ message: "Books ID needed before delete!" });
  }

  const deletedBook = books.find((book) => book.id === id);

  if (!deletedBook) {
    return c.json({ message: `Books with ID: '${id}' not found.` });
  }

  books = books.filter((book) => book.id !== id);

  return c.json({
    message: `Book with ID: '${id}' has been deleted!`,
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
    return c.json({ message: `Books with ID: '${id}' not found.` });
  }

  const submittedBook: Book = {
    id: updatedBook.id,
    title: body.title,
    description: body.description,
    author_id: body.author_id,
    published: body.published,
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

function getAuthorDetail(authorId: string) {
  const result = dataAuthors.find((author: Author) => author.id === authorId);
  if (!result) {
    return [];
  }

  return result;
}

export default app;
