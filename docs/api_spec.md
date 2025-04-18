
```markdown
# 📡 API Specification Document

This document outlines all the RESTful API endpoints for the Job Application Outsourcing Platform MVP.

---

## 🧍 Auth Routes (Signup/Login)

### POST `/api/auth/signup`
- **Description**: Register a new user
- **Request Body**:
  ```json
  {
    "name": "Chandu",
    "email": "chandu@example.com",
    "password": "securePassword123",
    "role": "candidate"
  }
  ```
- **Response**:
  - 201 Created
  - 400 Bad Request (duplicate email, etc.)

---

### POST `/api/auth/login`
- **Description**: Login and return auth token
- **Request Body**:
  ```json
  {
    "email": "chandu@example.com",
    "password": "securePassword123"
  }
  ```
- **Response**:
  - 200 OK + JWT token
  - 401 Unauthorized

---

## 📄 Candidate Profile

### POST `/api/candidate/profile`
- **Description**: Upload resume, cover letter, and form data
- **Request**: `multipart/form-data`
  - `resume` (file)
  - `coverLetter` (file, optional)
  - `formData` (JSON as string)
- **Auth**: Bearer Token (Candidate only)
- **Response**:
  - 201 Created

---

### GET `/api/candidate/profile`
- **Description**: Get current candidate's profile
- **Auth**: Bearer Token
- **Response**: 200 OK with profile data

---

## 📋 Job Applications

### POST `/api/candidate/jobs`
- **Description**: Upload desired job list (as file or link array)
- **Request**: JSON or `multipart/form-data`
- **Auth**: Bearer Token
- **Response**: 201 Created

---

### GET `/api/candidate/jobs`
- **Description**: Get all job applications of the candidate
- **Response**: 200 OK

---

### PATCH `/api/operator/job/:jobId`
- **Description**: Update job status to `applied`, add notes, etc.
- **Auth**: Operator only
- **Request Body**:
  ```json
  {
    "status": "applied",
    "notes": "Applied via LinkedIn"
  }
  ```
- **Response**: 200 OK

---

## 🧑‍💼 Operator Access

### GET `/api/operator/assigned-candidates`
- **Description**: View all candidate profiles assigned to this operator
- **Auth**: Operator only

---

## 🔐 Admin Panel

### POST `/api/admin/assign-operator`
- **Description**: Admin assigns operator to a candidate
- **Request Body**:
  ```json
  {
    "candidateId": "...",
    "operatorId": "..."
  }
  ```
- **Auth**: Admin only
- **Response**: 200 OK

---

## 🔁 Common

- All routes require proper authentication and role-based access.
- Use HTTP status codes and JSON error responses.

---

## 📌 Notes

- Token authentication with JWT
- Rate-limiting and CORS will be handled at server level
```
