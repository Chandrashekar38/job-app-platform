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
