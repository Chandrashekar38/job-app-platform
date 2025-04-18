# 🏗️ Technical Architecture Document

## 1. Overview

The system is a web-based platform designed to streamline job application outsourcing. It supports three user roles: **Candidate**, **Operator**, and **Admin**. The architecture follows a modular design with a clear separation of concerns across the **Frontend**, **Backend**, and **Database** layers.

---

## 2. High-Level Architecture Diagram

![Architecture Diagram](./docs/architecture.md)


---

## 3. Frontend

- **Framework:** React or Next.js  
- **Styling:** Tailwind CSS  
- **Responsibilities:**
  - Building responsive and role-based user interfaces
  - Handling user inputs via forms (e.g., job list upload, resume upload)
  - Communicating with backend services via RESTful APIs

---

## 4. Backend

- **Runtime:** Node.js  
- **Framework:** Express.js  
- **Responsibilities:**
  - Authentication and role-based authorization using JWT
  - Business logic and API endpoint handling
  - File handling (upload/download)
  - Database operations and validations

---

## 5. Database

- **Technology:** MongoDB or PostgreSQL (select based on your familiarity)  
- **Responsibilities:**
  - Storing structured data like user profiles, job list links, resumes
  - Logging and tracking operator actions and task progress
  - Admin settings and role configurations

---

## 6. Authentication Flow

- Login flow generates a **JWT token**
- Role information is encoded within the token
- Frontend uses the token to guard routes
- Backend middleware authorizes API access based on roles

---

## 7. Deployment Plan

| Component | Platform              |
|-----------|------------------------|
| Frontend  | Vercel or Netlify      |
| Backend   | Render or Railway      |
| Database  | MongoDB Atlas / Railway PostgreSQL |

---

## 8. Future Considerations

- Integration of email notification system for application updates
- Scheduled background jobs (e.g., job board scraping)
- Payment gateway for premium features or subscriptions
