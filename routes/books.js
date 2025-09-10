const express = require("express");
const { books } = require("../data/books.json");
const { users } = require("../data/users.json");

const { userModel, bookModel } = require("../model");
const {
  getAllBooks,
  getSingleBookById,
  getAllIssuedBooks,
  addNewBook,
  updateBookById,
  deleteBookById,
} = require("../controllers/book-controller");
const router = express.Router();

/**
 * Router:/books
 * Method:GET
 * Description:Get all books
 * access:public
 * Parameters:none
 */
// router.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: books,
//   });
// });
router.get("/", getAllBooks);

/**
 * Router:/books/id
 * Method:GET
 * Description:Get all books by id
 * access:public
 * Parameters:none
 */
// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   const book = books.find((each) => each.id === parseInt(id));
//   if (!book) {
//     return res.status(404).json({
//       success: false,
//       message: `Book not found for id: ${id}`,
//     });
//   }
//   res.status(200).json({
//     success: true,
//     data: book,
//   });
// });
router.get("/:id", getSingleBookById);

/**
 * Router:/books
 * Method:POST
 * Description:Add new book
 * access:public
 * Parameters:none
 */
// router.post("/", (req, res) => {
//   const { id, name, author, genre, price, publisher } = req.body;

//   //validate all fields
//   if (!id || !name || !author || !genre || !price || !publisher) {
//     return res.status(400).json({
//       success: false,
//       message: "All fields are required",
//     });
//   }
//   const book = books.find((each) => each.id === parseInt(id));
//   if (!book) {
//     return res.status(404).json({
//       success: false,
//       message: `Book already exists with id: ${id}`,
//     });
//   }
//   books.push({ id, name, author, genre, price, publisher });
//   res.status(201).json({
//     success: true,
//     message: "Book added successfully",
//     data: { id, name, author, genre, price, publisher },
//   });
// });
router.post("/", addNewBook);

/* Router:/books/id
 * Method:PUT
 * Description:Add new books by id
 * access:public
 * Parameters:none
 */

// router.put("/:id", (req, res) => {
//   const { id } = req.params;
//   const { data } = req.body;
//   if (!data || Object.keys(data).length === 0) {
//     res.status(400).json({
//       success: false,
//       message: "No data to update",
//     });
//   }
//   const book = books.find((each) => each.id === parseInt(id));
//   if (!book) {
//     return res.status(404).json({
//       success: false,
//       message: `Book not found for id: ${id}`,
//     });
//   }
//   Object.assign(book, data);

//   res.status(200).json({
//     success: true,
//     message: "Book updated successfully",
//     data: book,
//   });
// });
router.put("/:id", updateBookById);

/* * Router:/books
 * Method:DELETE
 * Description:Delete books by id
 * access:public
 * Parameters:none
 */

// router.delete("/:id", (req, res) => {
//   const { id } = req.params;
//   const book = books.find((each) => each.id === parseInt(id));
//   if (!book) {
//     return res.status(404).json({
//       success: false,
//       message: `Book not found for id: ${id}`,
//     });
//   }
//   books = books.filter((each) => each.id !== parseInt(id));
//   res.status(200).json({
//     success: true,
//     message: "Book deleted successfully",
//   });
// });
router.delete("/:id", deleteBookById);

/**
 * Router:/books/issued
 * Method:GET
 * Description:Get issued
 * access:public
 * Parameters:none
 */
router.get("/issued/for-users", getAllIssuedBooks);
module.exports = router;
