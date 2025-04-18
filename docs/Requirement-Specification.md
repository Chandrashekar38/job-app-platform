# 🧾 Requirement Specification Document

## 1. Project Overview
This project is a job application management platform that connects candidates (job seekers) with operators (job appliers) who apply on their behalf. Admins manage access and assign operators to candidates.

## 2. Stakeholders
- **Candidate:** Uploads resume, profile info, job list, and optionally a cover letter
- **Operator:** Applies to jobs on behalf of assigned candidates
- **Admin:** Oversees all users, assigns operators, and controls access

## 3. User Roles & Permissions

| Role     | Permissions                                                                 |
|----------|------------------------------------------------------------------------------|
| Candidate | Signup/Login, upload resume & job list, view application progress          |
| Operator | Signup/Login, view assigned candidate profiles & job links, mark jobs applied |
| Admin    | Manage users, assign operators to candidates, view platform-wide stats      |

## 4. Functional Requirements

### Candidate:
- [x] Signup/Login
- [x] Upload resume
- [x] Fill out profile info (form)
- [x] Upload optional cover letter
- [x] Upload job links (daily)
- [ ] View application history (future)

### Operator:
- [x] Signup/Login
- [x] Dashboard showing assigned candidates
- [x] Access candidate documents
- [x] Track which jobs are applied (manual marking)

### Admin:
- [x] Admin dashboard
- [x] Assign operator to candidate
- [ ] View stats (future)
- [ ] Remove/ban users (future)

## 5. Non-Functional Requirements
- Secure authentication (JWT)
- File upload support (.pdf, .doc)
- Role-based access control
- Responsive design
- Deployment-ready environment (Vercel/Render)

## 6. MVP Features
- Candidate/Operator/Admin roles
- Job link uploads
- Resume uploads
- Operator job application tracking
- Admin panel for operator assignment

## 7. Tech Stack
- **Frontend:** React + Tailwind (or Next.js)
- **Backend:** Node.js + Express
- **Database:** MongoDB (or PostgreSQL)
- **Deployment:** Vercel (Frontend), Render/Railway (Backend)

