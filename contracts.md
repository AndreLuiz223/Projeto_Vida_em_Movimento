# API Contracts - ONG Vida em Movimento

## Overview
This document defines the API contracts between frontend and backend for seamless integration.

## Mock Data Location
- **File**: `/app/frontend/src/mock.js`
- **Data**: Projects, Volunteers, Stats, Contact submissions

## Backend Implementation

### 1. Volunteer Registration System

#### POST /api/volunteers
**Purpose**: Register new volunteer
**Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (required)",
  "area": "string (required)",
  "message": "string (optional)"
}
```

**Response**: 
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "phone": "string",
  "area": "string",
  "message": "string",
  "createdAt": "datetime"
}
```

#### GET /api/volunteers
**Purpose**: Get all volunteer registrations
**Response**: Array of volunteer objects

**MongoDB Collection**: `volunteers`
**Schema**: name, email, phone, area, message, createdAt

---

### 2. Contact Form System

#### POST /api/contact
**Purpose**: Submit contact form
**Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "subject": "string (required)",
  "message": "string (required)"
}
```

**Response**:
```json
{
  "id": "string",
  "name": "string",
  "email": "string",
  "subject": "string",
  "message": "string",
  "createdAt": "datetime"
}
```

#### GET /api/contact
**Purpose**: Get all contact submissions
**Response**: Array of contact objects

**MongoDB Collection**: `contacts`
**Schema**: name, email, subject, message, createdAt

---

### 3. Projects System

#### GET /api/projects
**Purpose**: Get all projects
**Response**: Array of project objects

**MongoDB Collection**: `projects`
**Schema**: id, title, description, category, image, participants, status

---

### 4. Stats Endpoint

#### GET /api/stats
**Purpose**: Get NGO statistics
**Response**:
```json
{
  "volunteers": number,
  "beneficiaries": number,
  "projects": number,
  "years": number
}
```

**Source**: Calculated from database (volunteer count, project count) + static values

---

## Frontend Integration Changes

### Files to Update:
1. **`/app/frontend/src/pages/Voluntarios.jsx`**
   - Replace mock submission with API call to POST /api/volunteers
   - Remove mock data usage

2. **`/app/frontend/src/pages/Contato.jsx`**
   - Replace mock submission with API call to POST /api/contact
   - Remove mock data usage

3. **`/app/frontend/src/pages/Projetos.jsx`**
   - Replace mockProjects with API call to GET /api/projects
   - Use useEffect to fetch data on mount

4. **`/app/frontend/src/pages/Home.jsx`**
   - Replace mockStats with API call to GET /api/stats
   - Use useEffect to fetch stats on mount

### API Client Setup:
- Use axios (already installed)
- Base URL: `${process.env.REACT_APP_BACKEND_URL}/api`

---

## Error Handling
- All endpoints return appropriate HTTP status codes
- Error responses include descriptive messages
- Frontend displays user-friendly error messages via toast notifications

## Validation
- Backend validates all required fields
- Email format validation
- Phone number format validation (Brazilian format)
