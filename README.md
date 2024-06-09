# Bücherliste (Book List)

Backend API which showing best seller book recommendations to feed your thirsty brain.

JSON output preview:
![Bucherliste Preview](./public/screenshot.png)

## REST API Specification

- Production: `https://bucherliste.ridoatmanto.com`
- Local: `http://localhost:3000`

| Endpoint     | HTTP     | Description        |
| ------------ | -------- | ------------------ |
| `/books`     | `GET`    | Get all books      |
| `/books/:id` | `POST`   | Get book by id     |
| `/books`     | `POST`   | Add new book       |
| `/books`     | `DELETE` | Delete all books   |
| `/books/:id` | `DELETE` | Delete book by id  |
| `/books/:id` | `PUT`    | Update books by id |

## Tech Stack

- Hono
- Bun
- TypeScript
- JSON
- Vercel
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

---

Created © 2024 by [Rido Atmanto](https://ridoatmanto.com)
