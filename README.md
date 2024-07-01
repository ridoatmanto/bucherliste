# Bücherliste (Book List)

Backend API which showing best seller book recommendations to feed your thirsty brain.

## REST API Specification

- Production: `https://api.bucherliste.ridoatmanto.com`
- Local: `http://localhost:3000`

### Books API

| Endpoint           | HTTP     | Description       |
| ------------------ | -------- | ----------------- |
| `/books`           | `GET`    | Get all books     |
| `/books?q=:search` | `GET`    | Search books      |
| `/books/:id`       | `GET`    | Get book by id    |
| `/books`           | `POST`   | Add new book      |
| `/books/:id`       | `DELETE` | Delete book by id |
| `/books/:id`       | `PUT`    | Update book by id |

### Authors API

| Endpoint             | HTTP     | Description         |
| -------------------- | -------- | ------------------- |
| `/authors`           | `GET`    | Get all books       |
| `/authors?q=:search` | `GET`    | Search authors      |
| `/authors/:id`       | `GET`    | Get author by id    |
| `/authors`           | `POST`   | Add new author      |
| `/authors/:id`       | `DELETE` | Delete author by id |
| `/authors/:id`       | `PUT`    | Update author by id |

### Book Authors API

| Endpoint                  | HTTP     | Description               |
| ------------------------- | -------- | ------------------------- |
| `/book_authors`           | `GET`    | Get all book authors      |
| `/book_authors?q=:search` | `GET`    | Search book authors       |
| `/book_authors/:id`       | `GET`    | Get book authors by id    |
| `/book_authors`           | `POST`   | Add new book authors      |
| `/book_authors/:id`       | `DELETE` | Delete book authors by id |
| `/book_authors/:id`       | `PUT`    | Update book authors by id |

## ERD

![ERD](./assets/bucherliste-erd.svg)

## Tech Stack

- Hono
- Bun
- TypeScript
- Docker
- PostgreSQL
- Prisma
- Render
- Neon.tech
- Doppler Env
- CloudFlare
- VSCode

## How to run this project (with `bun`)

To install dependencies:

```sh
bun install
```

To run:

```sh
bun run dev
```

then open `http://localhost:3000`

## Futhermore Information

Another detail or something to discuss please contact me on Telegram on [t.me/ridoatmanto](https://t.me/ridoatmanto).

## JSON output preview:

```json
[
  {
    "id": "book-1",
    "title": "80/20 Sales and Marketing: The Definitive Guide to Working Less and Making More",
    "description": "Stop \"Just Getting By\"... Master the 80/20 Rule. Apply the Pareto Principle to Business And Make More Money Without More Work. When you know how to walk into any situation and see the 80/20's, the 80/20 Principle can solve almost ANY conversion problem. Any traffic problem. Any money problem. Perry Marshall has something original and extremely useful to say,because he has thought profoundly about the 80/20 Principle. He has come up with some original insights that are literally priceless. You really can change your business and your life.",
    "published": "Aug 13, 2013",
    "cover": "80-20-sales-and-marketing.png",
    "created_at": "2024-06-26T09:36:40.681Z",
    "updated_at": "2024-06-26T09:36:40.681Z"
  },
  {
    "id": "book-2",
    "title": "Sales Funnel Sabotage: Are These 10 Common Mistakes Holding Your Business Back? (The Internet Marketing Starter Pack Book 3)",
    "description": "Are your sales funnels underperforming? Are you struggling to identify what's holding your business back? Uncover the secrets to maximizing your sales funnel effectiveness with \"Sales Funnel Sabotage\". This insightful book shines a spotlight on the pitfalls that could be costing your business BIG, and reveals how you can turn the tables on the common mistakes entrepreneurs often make.",
    "published": "July 24, 2023",
    "cover": "sales-funnel-sabotage.png",
    "created_at": "2024-06-26T09:36:40.681Z",
    "updated_at": "2024-06-26T09:36:40.681Z"
  }
]
```

---

Created © 2024 by [Rido Atmanto](https://ridoatmanto.com)
