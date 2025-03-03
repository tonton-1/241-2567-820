const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());
const mysql = require("mysql2/promise");

const port = 8000;
let users = [];

// GET /user สำหรับ get users ทั้งหมด
// POST /users สำหรับเพิ่ม user ใหม่เข้าไป
// DELETE /users/:id สำหรับลบ user ที่มี id ตามที่ระบุ
// GET /users/:id สำหรับ get user ที่มี id ตามที่ระบุ
// PUT /users/:id สำหรับ update user ที่มี id ตามที่ระบุ
const initMySQL = async () => {
  conn = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "webdb",
    port: 8830,
  });
};

// app.get("/testdb-new", async (req, res) => {
//   try {
//     const results = await conn.query("SELECT * FROM users");
//     res.json(results[0]);
//   } catch (error) {
//     console.log("error", error.message);
//     res.status(500).json({ error: "Error fetching users" });
//   }
// });

// path = GET /users
app.get("/users", async (req, res) => {
  const results = await conn.query("SELECT * FROM users");
  res.json(results[0]);
});

//path = POST /user
app.post("/users", async (req, res) => {
  try {
    let user = req.body;
    const results = await conn.query("INSERT INTO users SET ?", user);
    res.json({
      message: "User created successfully",
      data: results[0],
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error creating user", error: error.message });
  }
});
// path get user รายบุคคล
app.get("/users/:id", async (req, res) => {
  try {
    let id = req.params.id;
    const results = await conn.query("SELECT * FROM users WHERE id = ?", id);
    if (results[0].length == 0) {
      throw { statusCode: 404, message: "User not found" };
    }
    res.json(results[0][0]);
  } catch (error) {
    console.error("errorMessage", error.message);
    let statusCode = error.statusCode || 500;
    res.status(statusCode).json({
      message: "something went wrong",
      errorMessage: error.message,
    });
  }
});

app.put("/user/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let updatedUser = req.body;
    let user = req.body;
    const results = await conn.query("UPDATE users SET ? WHERE id = ?", [
      updatedUser,
      id,
    ]);
    res.json({
      message: "User updated successfully",
      data: results[0],
    });
  } catch (error) {
    console.error("errorMessage", error.message);
    let statusCode = error.statusCode || 500;
    res.status(statusCode).json({
      message: "something went wrong",
      errorMessage: error.message,
    });
  }
});

app.delete("/user/:id", async (req, res) => {
  try {
    let id = req.params.id;

    const result = await conn.query("DELETE FROM users WHERE id = ?", id);
    res.json({
      message: "User deleted successfully",
      data: result[0],
    });
  } catch (error) {
    console.error("errorMessage", error.message);
    res.status(500).json({
      message: "something went wrong",
      errorMessage: error.message,
    });
  }
});

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await initMySQL();
});
