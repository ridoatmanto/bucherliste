import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { prisma } from "./libs/prisma";

const app = new Hono();

app.get("/", async (c) => {
  try {
    const searchQuery = c.req.query("q");

    if (!searchQuery) {
      const allAuthors = await prisma.author.findMany({
        where: {},
        orderBy: [{ created_at: "desc" }],
      });

      return c.json(allAuthors);
    }

    const searchAuthor = await prisma.author.findMany({
      where: {
        name: {
          contains: searchQuery,
          mode: "insensitive",
        },
      },
    });

    return c.json(searchAuthor);
  } catch (err: any) {
    console.log(err.message);
  }
});

app.get("/:id", async (c) => {
  try {
    const paramId = c.req.param("id");

    if (!paramId) {
      c.status(204);
      return c.json({ message: "Author ID needed" });
    }

    const author = await prisma.author.findUnique({
      where: { id: paramId },
    });

    if (author == null) {
      c.status(204);
      return c.json({ message: "Author doesn't exists!" });
    }

    return c.json(author);
  } catch (err: any) {
    console.log(err.message);
    throw new HTTPException(401, { message: err.message });
  }
});

app.post("/", async (c) => {
  const body = await c.req.json();
  try {
    const author = await prisma.author.create({
      data: {
        name: body.name,
      },
    });

    return c.json(author);
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
      return c.json({ message: "Author ID needed" });
    }

    const deletedAuthor = await prisma.author.deleteMany({
      where: { id: paramId },
    });

    if (deletedAuthor == null) {
      c.status(204);
      return c.json({ message: "Book doesn't exists!" });
    }

    return c.json({
      message: `Author with ID: '${paramId}' has been deleted!`,
      deletedBook: deletedAuthor,
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
    return c.json({ message: "Author ID param needed before update!" });
  }

  const book = await prisma.author.findUnique({
    where: { id: paramId },
  });

  if (book == null) {
    c.status(204);
    return c.json({ message: "Author doesn't exists!" });
  }

  const updatedAuthor = await prisma.author.update({
    where: {
      id: paramId,
    },
    data: {
      name: body.name,
    },
  });

  return c.json({
    message: `Author with ID: ${paramId} has been updated!`,
    updatedBook: updatedAuthor,
  });
});

export const authors = app;
