# 📘 Student Management API

A RESTful API built with **Node.js**, **Express.js**, **MongoDB**, and **Mongoose** to manage student records. It supports full **CRUD** operations.

---

##  Features

- Create new student records
- Read one or all student records
- Update student details
- Delete student records
- Mongoose schema validation
- Pagination support (optional)

---

##  Folder Structure

```
student-api/
│
├── models/              # Mongoose schemas
│   └── student.js
│
├── routes/              # Express routes
│   └── studentRoutes.js
│
├── .env                 # Environment variables
├── server.js            # Entry point
├── package.json
└── README.md
```

---

##  Tech Stack

- Node.js
- Express.js
- MongoDB (Atlas or Local)
- Mongoose
- dotenv

---

##  Installation

1. **Clone the repo**

```bash
git clone https://github.com/your-username/student-api.git
cd student-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file**

```
MONGODB_URL=your-mongodb-connection-string
PORT=3000
```

> For MongoDB Atlas, your URI looks like:  
> `mongodb+srv://<username>:<password>@<cluster-url>.mongodb.net/?retryWrites=true&w=majority`

4. **Run the server**

```bash
node server.js
```

---

##  API Endpoints

| Method | Endpoint        | Description          |
|--------|------------------|----------------------|
| POST   | `/students`      | Create a new student |
| GET    | `/students`      | Get all students     |
| GET    | `/students/:id`  | Get student by ID    |
| PUT    | `/students/:id`  | Update student by ID |
| DELETE | `/students/:id`  | Delete student by ID |

---

##  Sample JSON

```json
{
  "name": "Alice Johnson",
  "age": 20,
  "department": "Electrical"
}
```

---

##  Testing Instructions

Use **Postman** or **Thunder Client** to:

-  Create 3 students
-  View all students
-  View a specific student by ID
-  Update one student
-  Delete one student


## 🙌 Acknowledgements

- Node.js Docs
- MongoDB Atlas
- Mongoose Docs
- Postman / Thunder Client for API testing
