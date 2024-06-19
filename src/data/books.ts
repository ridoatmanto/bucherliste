export type Author = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Book = {
  id: string;
  title: string;
  description: string;
  author_id: string;
  published: string;
  cover: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CompleteBook = {
  id: string;
  title: string;
  description: string;
  authors: Author[];
  published: string;
  cover: string;
  createdAt: Date;
  updatedAt: Date;
};

export const dataBooks: Book[] = [
  {
    id: "xpv1v",
    title:
      "80/20 Sales and Marketing: The Definitive Guide to Working Less and Making More",
    description:
      'Stop "Just Getting By"... Master the 80/20 Rule. Apply the Pareto Principle to Business And Make More Money Without More Work.\n\nWhen you know how to walk into any situation and see the 80/20\'s, the 80/20 Principle can solve almost ANY conversion problem.\n\nAny traffic problem.\n\nAny money problem.\nPerry Marshall has something original and extremely useful to say,because he has thought profoundly about the 80/20 Principle. He has come up with some original insights that are literally priceless. You really can change your business and your life.',
    author_id: "author-1",
    published: "Aug 13, 2013",
    cover: process.env.BASE_URL + "books-cover/80-20-sales-and-marketing.png",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "tbvxk",
    title:
      "Sales Funnel Sabotage: Are These 10 Common Mistakes Holding Your Business Back? (The Internet Marketing Starter Pack Book 3)",
    description:
      'Are your sales funnels underperforming? Are you struggling to identify what\'s holding your business back?\n\nUncover the secrets to maximizing your sales funnel effectiveness with "Sales Funnel Sabotage."\n\nThis insightful book shines a spotlight on the pitfalls that could be costing your business BIG, and reveals how you can turn the tables on the common mistakes entrepreneurs often make.',
    author_id: "author-3",
    published: "July 24, 2023",
    cover: process.env.BASE_URL + "books-cover/sales-funnel-sabotage.png",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const dataAuthors: Author[] = [
  {
    id: "author-1",
    name: "Perry Marshall",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "author-2",
    name: "Richard Koch",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "author-3",
    name: "Miles Beckler",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
