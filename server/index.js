const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
const port = 8000;
let users = [];
let counter = 1;

// GET /user สำหรับ get users ทั้งหมด
// POST /users สำหรับเพิ่ม user ใหม่เข้าไป
// DELETE /users/:id สำหรับลบ user ที่มี id ตามที่ระบุ
// GET /users/:id สำหรับ get user ที่มี id ตามที่ระบุ
// PUT /users/:id สำหรับ update user ที่มี id ตามที่ระบุ
// path = GET /users
app.get("/users", (req, res) => {
  res.json(users);
});

//path = POST /user
app.post("/user", (req, res) => {
  let user = req.body;
  user.id = counter;
  counter += 1;
  users.push(user);
  res.json({
    message: "User added successfully",
    user: user,
  });
});

app.put("/user/:id", (req, res) => {
  let id = req.params.id;
  let updatedUser = req.body;
  //หา index ของ user ที่จะ update
  let selectedIndex = users.findIndex((user) => {
    if (user.id == id) {
      return true;
    } else {
      return false;
    }
  });
  // หา user จาก id ที่ส่งมา
  //update user นั้น
  //ส่งข้อมูล user ที่ update กลับไป
  if (updatedUser.firstname) {
    users[selectedIndex].firstname = updatedUser.firstname;
  }
  if (updatedUser.lastname) {
    users[selectedIndex].lastname = updatedUser.lastname;
  }

  res.json({
    message: "User updated successfully",
    data: {
      user: updatedUser,
      indexUpdated: selectedIndex,
    },
  });
});
app.delete("/user/:id", (req, res) => {
  let id = req.params.id;
  let selectedIndex = users.findIndex((user) => user.id == id);

  users.splice(selectedIndex, 1);
  res.json({
    message: "User deleted successfully",
    indexDeleted: selectedIndex,
  });
});
app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
