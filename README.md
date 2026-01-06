#  Scrapays Backend – Job Assessment

This repository contains a **NestJS backend service** built as part of a **job assessment for Scrapays**.  
It demonstrates backend architecture, API design, authentication, database integration, and testing using modern Node.js tooling.

---

##  Purpose

This project was created **specifically for a job assessment** to showcase:

- Backend development skills with **NestJS**
- API implementation using **GraphQL**
- Authentication using **JWT & Passport**
- Database integration with **TypeORM**
- Code structure, testing, and best practices

---

##  Tech Stack

- **Framework:** NestJS v11
- **API Layer:** GraphQL (Apollo Server v5)
- **Authentication:** Passport + JWT (JWKS support)
- **Database:** TypeORM + SQLite
- **Language:** TypeScript
- **Testing:** Jest (unit & e2e)
- **Validation:** class-validator & class-transformer

---

##  Features

-  Modular NestJS architecture
-  JWT authentication with Passport
-  JWKS support (useful for Auth0 / external providers)
-  GraphQL API using Apollo Server
-  Database integration via TypeORM
-  Unit tests and end-to-end tests
-  Environment configuration using `@nestjs/config`

---

##  Requirements

- **Node.js** v16+ (v18+ recommended)
- **npm** v8+
- SQLite (bundled via `sqlite3`)

---

##  Installation

```bash
git clone https://github.com/Omo-Akeye/scrapaysbackend-test.git
cd scrapaysbackend-test
npm install
```

---

##  Running the Application

### Development mode (with hot reload)

```bash
npm run start:dev
```

### Standard start

```bash
npm run start
```

### Production build & run

```bash
npm run build
npm run start:prod
```

---

##  Testing

```bash
npm run test
npm run test:watch
npm run test:e2e
npm run test:cov
```

---

##  Project Structure

```plaintext
src/
 ├── main.ts
 ├── app.module.ts
 ├── **/*.resolver.ts
 ├── **/*.service.ts
 └── **/*.entity.ts

test/
 ├── jest-e2e.json
 └── **/*.spec.ts
```

---

## 📄 License

UNLICENSED — created for **job assessment and evaluation purposes only**.
