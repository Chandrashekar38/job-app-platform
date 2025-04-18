```markdown
# 🏛 System Architecture & Overview

This document describes the high-level architecture and design decisions of the Job Application Outsourcing Platform.

---

## 🧱 1. Architecture Diagram

```
Frontend (React / Next.js)
       |
       |  REST API
       v
Backend (Node.js + Express)
       |
       |  MongoDB Driver / Mongoose
       v
Database (MongoDB)

+------------+     +------------+     +------------+
|  Candidate | --> |   Backend  | --> |   MongoDB  |
+------------+     +------------+     +------------+

+------------+                          ^
|  Operator  | ------------------------+
+------------+

+--------+
| Admin  |
+--------+
    |
    v
[Assign Operators to Candidates]
```

---

## 🧩 2. Components

### 🔹 Frontend (React or Next.js)
- Candidate Signup/Login
- Resume/Cover Upload UI
- Job Link Upload Form
- Operator Dashboard
- Admin Panel UI

### 🔹 Backend (Node.js + Express)
- Auth & Role-based access
- File Upload endpoints
- CRUD for Profiles & Job Applications
- Admin: Assign operator to candidate

### 🔹 Database (MongoDB)
- Collections:
  - `users`
  - `candidateProfiles`
  - `jobApplications`
  - `operatorAssignments`

---

## 🔐 3. Security

- Passwords hashed with bcrypt
- JWT-based authentication
- Role-based access control for endpoints
- Secure file uploads with validation

---

## 🌩️ 4. File Storage (Cloud)

- Resume, cover letter, and job files will be stored in:
  - Firebase Storage or
  - AWS S3 (future-proof)

---

## 🔮 5. Future Additions

- Notifications (email/web)
- Automation using Puppeteer or Playwright
- Payment or credits system

---

## ✅ MVP Focus Areas

- Candidate Resume/Profile Upload
- Operator Dashboard & Job Tracker
- Admin Assignments
```

---
