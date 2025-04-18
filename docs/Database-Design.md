# 🧩 Database Design Document

## 1. Overview

This document outlines the database schema for the Job Application Outsourcing Platform. It includes the main entities and their relationships.

---

## 2. Entities & Fields

### 🧍 User

Represents any user on the platform — Candidate, Operator, or Admin.

- `_id`: ObjectId
- `name`: String
- `email`: String
- `passwordHash`: String
- `role`: Enum — "candidate", "operator", or "admin"
- `createdAt`: Date
- `updatedAt`: Date

---

### 📄 CandidateProfile

Additional details provided by the candidate.

- `_id`: ObjectId
- `userId`: ObjectId (references User)
- `resumeUrl`: String (link to uploaded resume)
- `coverLetterUrl`: String (optional)
- `profileFormData`: Object (JSON with fields like phone, location, etc.)
- `jobLinksDocumentUrl`: String (uploaded file containing job links)
- `createdAt`: Date
- `updatedAt`: Date

---

### 📋 JobApplication

Individual job listings the candidate wishes to apply for.

- `_id`: ObjectId
- `candidateId`: ObjectId (references User)
- `operatorId`: ObjectId (references User, optional)
- `jobTitle`: String
- `company`: String
- `jobLink`: String (URL to job post)
- `status`: Enum — "pending", "applied", "rejected"
- `appliedAt`: Date (optional)
- `notes`: String (optional)
- `createdAt`: Date
- `updatedAt`: Date

---

### 🧑‍💼 OperatorAssignment

Connects operators to candidates (assigned by admin).

- `_id`: ObjectId
- `candidateId`: ObjectId (references User)
- `operatorId`: ObjectId (references User)
- `assignedBy`: ObjectId (Admin user ID)
- `createdAt`: Date

---

## 3. Relationships

- One **User** can be a **Candidate**, **Operator**, or **Admin**
- One **Candidate** can upload multiple **JobApplications**
- One **Operator** can be assigned to multiple **Candidates**
- One **Admin** assigns operators using **OperatorAssignment**

---

## 4. Optional (Future) Tables

- `Notifications` — to notify candidates/operators of updates
- `PaymentLogs` — for billing or subscription features
- `JobBoardScrapingQueue` — for potential automation in the future

---

## 5. Notes

- Passwords will be securely hashed using bcrypt.
- Files (resume, cover letter, job list) will be uploaded to cloud storage like AWS S3 or Firebase.
