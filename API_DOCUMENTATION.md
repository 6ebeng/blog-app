# API Documentation

## Base URL
```
http://localhost:3001/api
```

## Authentication
The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:
```
Authorization: Bearer <your-jwt-token>
```

---

## Endpoints

### 🔐 Authentication

#### Register User
- **POST** `/users`
- **Body:**
```json
{
  "user": {
    "username": "string",
    "email": "string",
    "password": "string",
    "bio": "string (optional)",
    "image": "string (optional)"
  }
}
```

#### Login User
- **POST** `/users/login`
- **Body:**
```json
{
  "user": {
    "email": "string",
    "password": "string"
  }
}
```

#### Get Current User
- **GET** `/user`
- **Auth required:** YES

#### Update User
- **PUT** `/user`
- **Auth required:** YES
- **Body:**
```json
{
  "user": {
    "email": "string (optional)",
    "username": "string (optional)",
    "bio": "string (optional)",
    "image": "string (optional)",
    "password": "string (optional)"
  }
}
```

---

### 👤 Profiles

#### Get Profile
- **GET** `/profiles/:username`

#### Follow User
- **POST** `/profiles/:username/follow`
- **Auth required:** YES

#### Unfollow User
- **DELETE** `/profiles/:username/follow`
- **Auth required:** YES

---

### 📝 Articles

#### List Articles
- **GET** `/articles`
- **Query Parameters:**
  - `tag`: Filter by tag
  - `author`: Filter by author username
  - `favorited`: Filter by favorited articles of username
  - `limit`: Number of articles to return (default: 3)
  - `offset`: Number of articles to skip

#### Get Article Feed
- **GET** `/articles/feed`
- **Auth required:** YES
- **Query Parameters:**
  - `limit`: Number of articles to return (default: 3)
  - `offset`: Number of articles to skip

#### Get Single Article
- **GET** `/articles/:slug`

#### Create Article
- **POST** `/articles`
- **Auth required:** YES
- **Body:**
```json
{
  "article": {
    "title": "string",
    "description": "string",
    "body": "string",
    "tagList": ["string"]
  }
}
```

#### Update Article
- **PUT** `/articles/:slug`
- **Auth required:** YES
- **Body:**
```json
{
  "article": {
    "title": "string (optional)",
    "description": "string (optional)",
    "body": "string (optional)"
  }
}
```

#### Delete Article
- **DELETE** `/articles/:slug`
- **Auth required:** YES

#### Favorite Article
- **POST** `/articles/:slug/favorite`
- **Auth required:** YES

#### Unfavorite Article
- **DELETE** `/articles/:slug/favorite`
- **Auth required:** YES

---

### 💬 Comments

#### Get Article Comments
- **GET** `/articles/:slug/comments`

#### Create Comment
- **POST** `/articles/:slug/comments`
- **Auth required:** YES
- **Body:**
```json
{
  "comment": {
    "body": "string"
  }
}
```

#### Delete Comment
- **DELETE** `/articles/:slug/comments/:commentId`
- **Auth required:** YES

---

### 🏷️ Tags

#### Get All Tags
- **GET** `/tags`

---

## Response Format

### Success Response
```json
{
  "user": {...},
  "article": {...},
  "articles": [...],
  "comments": [...],
  "tags": [...]
}
```

### Error Response
```json
{
  "errors": {
    "body": ["error message"]
  }
}
```

---

## Status Codes

- `200` - OK
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `422` - Unprocessable Entity
- `500` - Internal Server Error 