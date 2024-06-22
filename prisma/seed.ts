import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const books = await prisma.book.createMany({
    data: [
      {
        id: "book-1",
        title:
          "80/20 Sales and Marketing: The Definitive Guide to Working Less and Making More",
        description:
          'Stop "Just Getting By"... Master the 80/20 Rule. Apply the Pareto Principle to Business And Make More Money Without More Work.\n\nWhen you know how to walk into any situation and see the 80/20\'s, the 80/20 Principle can solve almost ANY conversion problem.\n\nAny traffic problem.\n\nAny money problem.\nPerry Marshall has something original and extremely useful to say,because he has thought profoundly about the 80/20 Principle. He has come up with some original insights that are literally priceless. You really can change your business and your life.',
        published: "Aug 13, 2013",
        cover:
          process.env.BASE_URL + "books-cover/80-20-sales-and-marketing.png",
      },
      {
        id: "book-2",
        title:
          "Sales Funnel Sabotage: Are These 10 Common Mistakes Holding Your Business Back? (The Internet Marketing Starter Pack Book 3)",
        description:
          'Are your sales funnels underperforming? Are you struggling to identify what\'s holding your business back?\n\nUncover the secrets to maximizing your sales funnel effectiveness with "Sales Funnel Sabotage."\n\nThis insightful book shines a spotlight on the pitfalls that could be costing your business BIG, and reveals how you can turn the tables on the common mistakes entrepreneurs often make.',
        published: "July 24, 2023",
        cover: process.env.BASE_URL + "books-cover/sales-funnel-sabotage.png",
      },
    ],
  });

  const authors = await prisma.author.createMany({
    data: [
      {
        id: "author-1",
        name: "Perry Marshall",
      },
      {
        id: "author-2",
        name: "Richard Koch",
      },
      {
        id: "author-3",

        name: "Miles Beckler",
      },
    ],
  });

  const bookAuthors = await prisma.bookAuthor.createMany({
    data: [
      {
        book_id: "book-1",
        author_id: "author-1",
      },
      {
        book_id: "book-1",
        author_id: "author-2",
      },
      {
        book_id: "book-2",
        author_id: "author-3",
      },
    ],
  });

  console.log({ books, authors, bookAuthors });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
