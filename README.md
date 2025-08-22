# 📝 Blog-APP (Express + MongoDB)

A simple RESTful backend for a blog application, built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.
This API allows you to create posts, add comments, like/unlike posts, and fetch posts with their associated likes and comments.

---

## 🚀 Features

* Create and fetch blog posts
* Add comments to posts
* Like and unlike posts
* MongoDB + Mongoose models with relations
* Modular MVC structure (routes, controllers, models)
* Environment-based configuration

---

## 🛠 Tech Stack

* **Runtime:** Node.js
* **Framework:** Express
* **Database:** MongoDB (Mongoose ODM)
* **Config:** dotenv
* **Dev Tools:** Nodemon

---

## 📂 Project Structure

```
.
├── index.js                # App entry point
├── package.json            # Scripts & dependencies
├── config/
│   └── database.js         # MongoDB connection logic
├── routes/
│   └── blog.js             # All blog-related routes
├── controllers/
│   ├── postController.js   # Create & fetch posts
│   ├── commentController.js# Add comments
│   └── likeController.js   # Like/unlike posts
└── models/
    ├── postModel.js        # Post schema
    ├── commentModel.js     # Comment schema
    └── likeModel.js        # Like schema
```

---

## ⚙️ Installation & Setup

### Prerequisites

* Node.js (v16+ recommended)
* MongoDB instance (local or [Atlas](https://www.mongodb.com/cloud/atlas))

### Steps

```bash
# Clone repo
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# Install dependencies
npm install

# Create .env file in root
touch .env
```

Add the following to `.env`:

```env
PORT=3000
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/blog
```

Start the server:

```bash
# Development (with auto-reload)
npm run dev

# Production
node index.js
```

---

## 🔗 API Endpoints

Base URL: `http://localhost:3000/api/v1`

| Method   | Endpoint           | Description                         | Body Example                                               |
| -------- | ------------------ | ----------------------------------- | ---------------------------------------------------------- |
| **GET**  | `/posts`           | Get all posts with likes & comments | —                                                          |
| **POST** | `/posts/create`    | Create a new post                   | `{ "title": "My Post", "body": "Hello World" }`            |
| **POST** | `/comments/create` | Add a comment to a post             | `{ "post": "<postId>", "user": "alice", "body": "Nice!" }` |
| **POST** | `/likes/like`      | Like a post                         | `{ "post": "<postId>", "user": "bob" }`                    |
| **POST** | `/likes/unlike`    | Unlike a post                       | `{ "post": "<postId>", "like": "<likeId>" }`               |

---

## 🧪 Example Usage

### Create a Post

```bash
curl -X POST http://localhost:3000/api/v1/posts/create \
-H "Content-Type: application/json" \
-d '{"title":"First Post","body":"This is my first blog post"}'
```

### Comment on a Post

```bash
curl -X POST http://localhost:3000/api/v1/comments/create \
-H "Content-Type: application/json" \
-d '{"post":"<POST_ID>","user":"alice","body":"Great post!"}'
```

### Like a Post

```bash
curl -X POST http://localhost:3000/api/v1/likes/like \
-H "Content-Type: application/json" \
-d '{"post":"<POST_ID>","user":"bob"}'
```

---

## 🛡 Security & Improvements (To-Do)

* [ ] Add authentication (JWT/session)
* [ ] Validate request bodies (e.g., Joi/Zod)
* [ ] Add pagination for `GET /posts`
* [ ] Prevent duplicate likes per user
* [ ] Global error handling middleware
* [ ] Unit tests (Jest + Supertest)

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -m "Add feature"`)
4. Push branch (`git push origin feature/your-feature`)
5. Open a Pull Request 🚀

---

## 📜 License

This project is licensed under the **ISC License**. See [LICENSE](./LICENSE) for details.

---
