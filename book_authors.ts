import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { prisma } from "./libs/prisma";

const app = new Hono();

app.get("/", async (c) => {
  try {
    const allBookAuthors = await prisma.bookAuthor.findMany({
      where: {},
      orderBy: [{ created_at: "desc" }],
    });

    return c.json(allBookAuthors);
  } catch (err: any) {
    console.log(err.message);
  }
});

app.get("/:id", async (c) => {
  try {
    const paramId = c.req.param("id");

    if (!paramId) {
      c.status(204);
      return c.json({ message: "BookAuthor ID needed" });
    }

    const bookAuthor = await prisma.bookAuthor.findUnique({
      where: { id: paramId },
    });

    if (bookAuthor == null) {
      c.status(204);
      return c.json({ message: "BookAuthor doesn't exists!" });
    }

    return c.json(bookAuthor);
  } catch (err: any) {
    console.log(err.message);
    throw new HTTPException(401, { message: err.message });
  }
});

app.post("/", async (c) => {
  const body = await c.req.json();
  try {
    const bookAuthor = await prisma.bookAuthor.create({
      data: {
        book_id: body.book_id,
        author_id: body.author_id,
      },
    });

    return c.json(bookAuthor);
  } catch (err: any) {
    console.log(err.message);
    throw new HTTPException(401, { message: err.message });
  }
});

app.delete("/:id", async (c) => {
  const paramId = c.req.param("id");

  try {
    if (!paramId) {
      c.status(204);
      return c.json({ message: "BookAuthor ID needed" });
    }

    const deletedBookAuthor = await prisma.bookAuthor.deleteMany({
      where: { id: paramId },
    });

    if (deletedBookAuthor == null) {
      c.status(204);
      return c.json({ message: "BookAuthor doesn't exists!" });
    }

    return c.json({
      message: `BookAuthor with ID: '${paramId}' has been deleted!`,
      deletedBook: deletedBookAuthor,
    });
  } catch (err: any) {
    console.log(err.message);
    throw new HTTPException(401, { message: err.message });
  }
});

app.put("/:id", async (c) => {
  const paramId = c.req.param("id");
  const body = await c.req.json();

  if (!paramId) {
    return c.json({ message: "BookAuthor ID param needed before update!" });
  }

  const bookAuthor = await prisma.bookAuthor.findUnique({
    where: { id: paramId },
  });

  if (bookAuthor == null) {
    c.status(204);
    return c.json({ message: "BookAuthor doesn't exists!" });
  }

  const updatedBookAuthor = await prisma.bookAuthor.update({
    where: {
      id: paramId,
    },
    data: {
      book_id: body.book_id,
      author_id: body.author_id,
    },
  });

  return c.json({
    message: `BookAuthor with ID: ${paramId} has been updated!`,
    updatedBook: updatedBookAuthor,
  });
});

export const book_authors = app;
