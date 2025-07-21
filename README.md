
# 📰 ReBlog Blog — A Full-Stack Production-Ready React Blog App (with Appwrite)

**ReBlog Blog** is a fully functional, production-ready **full-stack blog application** built using **ReactJS** on the frontend and **Appwrite** as the backend. This was developed as a **capstone project** during the **"Chai aur React"** course by *Hitesh Choudhary (Chai aur Code)* ☕.

The project features scalable architecture using **Redux Toolkit**, **service classes**, and a clear separation of concerns to support long-term maintainability and backend interchangeability.

---

## 🚀 Features

* 🔐 User Authentication (Signup, Login)
* 📝 Add, Edit, and Delete Posts
* 📚 View All Posts or a Single Post
* 🖋️ Rich Text Editor Integration
* 🗃️ File Upload with Appwrite Storage
* 📦 Redux Toolkit for Global State Management
* 🧱 Service Classes for API Abstraction
* 💡 Easily Switch Backend Logic by Modifying Services
* 📱 Responsive and Modular UI
* ⚙️ Clean, Maintainable Codebase

---

## 🧰 Tech Stack

### Frontend:

* **ReactJS**
* **Redux Toolkit** (state management)
* **React Router**
* **Rich Text Editor (RTE)**
* **Vite** (build tool)

### Backend (via Appwrite):

* **Auth** (email/password)
* **Database** (Collections/Documents)
* **Storage** (File uploads)
* **Appwrite SDK** for API communication

---

## 🗂️ Folder Structure Snapshot

```
.
├── eslint.config.js
├── folder.txt
├── index.html
├── package.json
├── package-lock.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.jsx
│   ├── appwrite
│   │   ├── AuthService.js
│   │   ├── FileService.js
│   │   └── PostsService.js
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── AuthLayout.jsx
│   │   ├── Button.jsx
│   │   ├── Container
│   │   ├── Footer
│   │   ├── Header
│   │   ├── index.js
│   │   ├── Input.jsx
│   │   ├── Login.jsx
│   │   ├── Logo.jsx
│   │   ├── PostCard.jsx
│   │   ├── PostForm
│   │   ├── RTE.jsx
│   │   ├── Select.jsx
│   │   └── SignUp.jsx
│   ├── Config
│   │   └── config.js
│   ├── index.css
│   ├── main.jsx
│   ├── pages
│   │   ├── AddPost.jsx
│   │   ├── AllPosts.jsx
│   │   ├── EditPost.jsx
│   │   ├── Home.jsx
│   │   ├── index.js
│   │   ├── Login.jsx
│   │   ├── Post.jsx
│   │   └── SignUp.jsx
│   └── store
│       ├── authSlice.js
│       └── store.js
└── vite.config.js
```

---

## 🛠️ Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/cyxabima/ReBlog
cd ReBlog
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Appwrite Environment

Create a `.env` file with the following:

```env
VITE_APPWRITE_URL=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_db_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

### 4️⃣ Start the Development Server

```bash
npm run dev
```

Visit the app at [http://localhost:5173](http://localhost:5173)

---

## 💡 Key Concepts & Architecture

* ✅ **Redux Toolkit**: clean and scalable global state
* ✅ **Service Layer Pattern**: all API logic is abstracted, backend is swappable
* ✅ **Component Reusability**: form inputs, buttons, post cards, layouts
* ✅ **Appwrite SDK**: seamless integration for auth, DB, storage
* ✅ **Modular Design**: easy-to-maintain folder structure

---

## 🔮 Future Improvements

* Add comments and likes
* User profile page with avatars
* Tagging and category filters
* SEO optimization for blog content
* Deployment (Vercel or Netlify + Appwrite Cloud)

---

## 🙌 Acknowledgement

This project was built as a **capstone** during the **Chai aur React** course by [@hiteshdotcom](https://github.com/hiteshchoudhary).
Truly thankful for a learning experience that went beyond tutorials and into real-world application building. 🙏

---

📌 **Project Name**: `ReBlog Blog`
🛠️ **Stack**: React + Redux Toolkit + Appwrite


