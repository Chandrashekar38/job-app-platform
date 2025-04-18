### 🧩 Step 3: Create the Database Design Document

**Filename:**  
```
docs/Database-Design.md
```

This document will describe the core models, their fields, and relationships. Since your platform supports multiple roles and actions, this will be the foundation for your backend schema.

---

### 📄 Content to paste:

```markdown
# 🧩 Database Design Document

## 1. Overview

This document outlines the database schema for the Job Application Outsourcing Platform. It includes the main entities and their relationships.

---

## 2. Entities & Schema

### 🧍 User

Represents any user on the platform (Candidate, Operator, Admin).

```json
{
  "_id": ObjectId,
  "name": String,
  "email": String,
  "passwordHash": String,
  "role": "candidate" | "operator" | "admin",
  "createdAt": Date,
  "updatedAt": Date
}
```

---

### 📄 CandidateProfile

Additional profile details submitted by the candidate.

```json
{
  "_id": ObjectId,
  "userId": ObjectId,  // references User
  "resumeUrl": String,
  "coverLetterUrl": String,
  "profileFormData": Object, // name, phone, address, etc.
  "jobLinksDocumentUrl": String,
  "createdAt": Date,
  "updatedAt": Date
}
```

---

### 📋 JobApplication

Each job link the candidate provides.

```json
{
  "_id": ObjectId,
  "candidateId": ObjectId, // references User
  "operatorId": ObjectId,  // references User (optional)
  "jobTitle": String,
  "company": String,
  "jobLink": String,
  "status": "pending" | "applied" | "rejected",
  "appliedAt": Date (optional),
  "notes": String (optional),
  "createdAt": Date,
  "updatedAt": Date
}
```

---

### 🧑‍💼 OperatorAssignment

Links operators to candidates via admin approval.

```json
{
  "_id": ObjectId,
  "candidateId": ObjectId,
  "operatorId": ObjectId,
  "assignedBy": ObjectId, // Admin user ID
  "createdAt": Date
}
```

---

## 3. Relationships

- One **User** can be a **Candidate**, **Operator**, or **Admin**
- One **Candidate** can upload multiple **JobApplications**
- One **Operator** can be assigned to multiple **Candidates**
- One **Admin** manages assignments via **OperatorAssignment**

---

## 4. Optional Future Tables

- `Notifications`
- `PaymentLogs`
- `JobBoardScrapingQueue`

---

## 5. Notes

- All passwords are hashed using bcrypt
- File uploads (resume, cover letter, job list) are stored via cloud (e.g., AWS S3 or Firebase)

```
