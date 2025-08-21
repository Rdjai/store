# ⭐ Store Rating App

The **Store Rating App** is a full-stack web application where users can explore stores, give ratings, and check average reviews.  
It is built using **MERN Stack** (MongoDB, Express, React, Node.js) with **Redux Toolkit** for state management.  

---

## 📌 Features
- 🔐 **User Authentication** – Sign Up & Login
- 🏬 **Store Management** – Add, Edit, Delete, and View Stores
- ⭐ **Rating System** – Users can give ratings (1–5 stars) to stores
- 📊 **Analytics** – Average rating calculation for each store
- 🎨 **UI/UX Design** – Built with TailwindCSS and responsive layout
- ⚡ **State Management** – Redux Toolkit implemented for global state
- 🌍 **REST API** – Backend provides endpoints for CRUD operations

---

## 🛠️ Tech Stack
### Frontend:
- ⚛️ React.js
- 🎨 TailwindCSS
- 📦 Redux Toolkit
- 🚏 React Router DOM

### Backend:
- 🟢 Node.js
- ⚡ Express.js
- 🍃 MongoDB (Mongoose ODM)

---

## 📂 Folder Structure
```bash
store-rating-app/
│
├── backend/
│   ├── models/          # Mongoose models (User, Store, Rating)
│   ├── routes/          # Express routes
│   ├── controllers/     # Business logic
│   ├── server.js        # Entry point
│   └── config/          # DB connection
│
├── frontend/
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # React pages
│   │   ├── redux/       # Redux slices & store
│   │   ├── App.js       # Main React app
│   │   └── index.js     # Entry point
│
├── README.md
└── package.json
