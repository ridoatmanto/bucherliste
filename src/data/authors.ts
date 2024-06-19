export type Author = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

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
