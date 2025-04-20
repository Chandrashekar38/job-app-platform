```markdown
# 📘 API Documentation

This document outlines the key RESTful API endpoints used in the **Job Application Outsourcing Platform**.

---

## 🔐 Authentication APIs

### 📝 POST `/api/auth/signup`

Registers a new user (Candidate, Operator, or Admin).

**Request Body**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "yourpassword",
  "role": "candidate"
}
```

**Response**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "abc123",
    "role": "candidate"
  }
}
```

---

### 🔑 POST `/api/auth/login`

Authenticates user and returns JWT.

**Request Body**
```json
{
  "email": "john@example.com",
  "password": "yourpassword"
}
```

**Response**
```json
{
  "token": "jwt_token_here",
  "user": {
    "id": "abc123",
    "role": "operator"
  }
}
```

---

## 👤 Candidate APIs

### 📄 GET `/api/candidate/profile`

Returns the candidate's profile details.

**Headers**
```
Authorization: Bearer <jwt_token>
```

---

### 📤 POST `/api/candidate/resume`

Uploads candidate's resume and cover letter.

**Form Data**
- `resume`: file (required)
- `coverLetter`: file (optional)

---

### 🔗 POST `/api/candidate/job-links`

Uploads list of job links (JSON or CSV).

**Request Body**
```json
{
  "jobLinks": [
    "https://jobboard.com/job1",
    "https://jobboard.com/job2"
  ]
}
```

---

## 🛠️ Operator APIs

### 📥 GET `/api/operator/assignments`

Returns a list of candidates assigned to the operator.

**Headers**
```
Authorization: Bearer <jwt_token>
```

---

### 📌 POST `/api/operator/progress`

Updates job application status for a candidate.

**Request Body**
```json
{
  "candidateId": "abc123",
  "status": "applied",
  "notes": "Application submitted on XYZ portal"
}
```

---

## 🧑‍💼 Admin APIs

### 👥 GET `/api/admin/users`

Returns all users with filtering options by role.

**Headers**
```
Authorization: Bearer <admin_token>
```

---

### 🔁 POST `/api/admin/assign-operator`

Assigns an operator to a candidate.

**Request Body**
```json
{
  "candidateId": "abc123",
  "operatorId": "xyz789"
}
```

---

## 📎 Notes

- All endpoints are protected and require JWT-based authentication.
- Use proper `Content-Type` headers for `application/json` or `multipart/form-data`.
- Validation and error messages are returned in the format:
```json
{
  "error": "Detailed error message here"
}
```

---
