const express = require("express");
const { users } = require("../data/users.json");
const {
  getAllUsers,
  getSingleUserById,
  createUser,
  updateUserById,
  deleteUserById,
} = require("../controllers/user-controller");
const { create } = require("../model/user-model");
const router = express.Router();

router.use(express.json());
// Get all users
// router.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: users,
//   });
// });
router.get("/", getAllUsers);

// Get user by ID
// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   const user = users.find((each) => each.id === parseInt(id));
//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: `User not found for id: ${id}`,
//     });
//   }

//   res.status(200).json({
//     success: true,
//     data: user,
//   });
// });
router.get("/:id", getSingleUserById);

//Create new user
// router.post("/", (req, res) => {
//   const {
//     id,
//     name,
//     username,
//     email,
//     issuedDate,
//     issuedBooks,
//     returnDate,
//     subscriptionType,
//     subscriptionDate,
//   } = req.body;

//   // Validate all fields
//   if (
//     !id ||
//     !name ||
//     !username ||
//     !email ||
//     !issuedDate ||
//     !issuedBooks ||
//     !returnDate ||
//     !subscriptionType ||
//     !subscriptionDate
//   ) {
//     return res.status(400).json({
//       success: false,
//       message: "All fields are required",
//     });
//   }

//   // Check if user already exists
//   const user = users.find((each) => each.id === parseInt(id));
//   if (user) {
//     return res.status(409).json({
//       success: false,
//       message: `User already exists for id: ${id}`,
//     });
//   }

//   // Push new user
//   users.push({
//     id,
//     name,
//     username,
//     email,
//     issuedDate,
//     issuedBooks,
//     returnDate,
//     subscriptionType,
//     subscriptionDate,
//   });

//   res.status(201).json({
//     success: true,
//     message: "User created successfully",
//     data: users,
//   });
// });
router.post("/", createUser);

// Update user
// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const { data } = req.body;

//   const user = users.find((each) => each.id === parseInt(id));
//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: `User not found for id: ${id}`,
//     });
//   }

//   // Update user
//   Object.assign(user, data);

//   res.status(200).json({
//     success: true,
//     message: "User updated successfully",
//     data: user,
//   });
// });
router.put("/:id", updateUserById);

//delete user
// router.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   const user = users.find((each) => each.id === parseInt(id));

//   if (!user) {
//     return res.status(404).json({
//       success: false,
//       message: `User not found for id: ${id}`,
//     });
//   }

//   // Delete user
//   users = users.filter((each) => each.id !== parseInt(id));

//   res.status(200).json({
//     success: true,
//     message: "User deleted successfully",
//   });
// });
router.delete("/:id", deleteUserById);
module.exports = router;
