
```markdown
# 🏗️ Technical Architecture Document

## 1. Overview

The system is designed as a web-based platform with three user roles: Candidate, Operator, and Admin. It follows a modular architecture with clear separation of frontend, backend, and database.

---

## 2. High-Level Architecture Diagram

```plaintext
+------------------+        +---------------------+       +------------------+
|   Frontend App   | <----> |     Backend API     | <-->  |     Database     |
| (React/Next.js)  |        | (Node.js + Express) |       | (MongoDB/Postgres)|
+------------------+        +---------------------+       +------------------+
        |                            |                              
        |                            |                              
        ↓                            ↓                              
 Candidate / Operator / Admin    Auth, File Uploads, Business Logic, DB Queries
```

---

## 3. Frontend

- **Framework:** React or Next.js
- **Design System:** Tailwind CSS
- **Responsibilities:**
  - User Interface
  - Role-based Dashboards
  - Forms for uploads (resume, job list)
  - Consumes REST APIs

---

## 4. Backend

- **Runtime:** Node.js
- **Framework:** Express.js
- **Responsibilities:**
  - Authentication (JWT)
  - RESTful API Endpoints
  - File uploads (resume, job list)
  - Business logic
  - Role-based authorization

---

## 5. Database

- **Choice:** MongoDB or PostgreSQL (based on familiarity)
- **Responsibilities:**
  - Storing user profiles, job links, resumes
  - Tracking operator actions and progress
  - Storing admin configurations

---

## 6. Authentication Flow

- JWT-based login
- Role extracted from token
- Role-specific access on frontend & backend middleware

---

## 7. Deployment Plan

| Component | Platform |
|----------|----------|
| Frontend | Vercel (or Netlify) |
| Backend  | Render or Railway |
| Database | MongoDB Atlas or Railway Postgres |

---

## 8. Future Considerations

- Email notifications for candidates
- Cron jobs to check job board APIs
- Payment gateway integration
```

---
