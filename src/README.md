# Backend Developer Intern – Assignment

This project is a scalable REST API with authentication, role-based access control, and a basic frontend to demonstrate API usage.

---

## 🚀 Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcrypt (password hashing)
- Swagger (API documentation)

### Frontend

- React.js
- Axios
- React Router

---

## 📂 Project Structure

backend/
├── src/
│ ├── config/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── swagger.js
│ ├── app.js
│ └── server.js
├── .env
└── package.json

frontend/
├── src/
│ ├── api/
│ ├── pages/
│ ├── App.js
│ └── index.js
└── package.json

---

## 🔐 Features Implemented

- User registration & login
- Password hashing using bcrypt
- JWT-based authentication
- Role-based access control (user/admin)
- CRUD APIs for Tasks
- Protected routes using middleware
- Swagger API documentation
- Basic React frontend for API interaction

---

## 🔑 Environment Variables

Create a `.env` file in backend root:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
```

cd backend
npm install
npm run dev

cd frontend
npm install
npm start

Access Swagger UI at:
http://localhost:5000/api/docs

API Testing

All APIs can be tested using:

Postman

Swagger UI (Try it out)

Authentication uses:

Authorization: Bearer <6960cc5c50f221f793473be9>
