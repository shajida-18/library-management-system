const { bookModel, userModel } = require("../model");
const issuedBook = require("../dtos/book-dtos");

// const getAllBooks = () => {};
// const grtSingleBookById = () => {};

// module.exports = {
//   getAllBooks,
//   grtSingleBookById,
// };

exports.getAllBooks = async (req, res) => {
  const Books = await bookModel.find();
  if (Books.length === 0) {
    return res.status.json({
      success: false,
      message: "No books in the system",
    });
  }
  res.status(200).json({
    success: true,
    data: Books,
  });
};
exports.getSingleBookById = async (req, res) => {
  const { id } = req.params;
  const Book = await bookModel.findById(id);

  if (!Book) {
    return res.status(400).json({
      success: false,
      message: `Book not found by id:${id}`,
    });
  }
  res.status(200).json({
    success: true,
    data: Book,
  });
};
exports.getAllIssuedBooks = async (req, res) => {
  const users = await userModel
    .find({ issuedBook: { $exists: true } })
    .populate("issuedBook");

  const issuedBooks = users.map((user) => {
    return new issuedBook(user);
  });
  res.status(200).json({
    success: true,
    data: issuedBooks,
  });
};
exports.addNewBook = async (req, res) => {
  const { name, author, genre, price, publisher } = req.body;
  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({
      success: false,
      message: "Book data is required",
    });
  }
  await bookModel.create(data);
  const allBooks = await bookModel.find();
  res.status(201).json({
    success: true,
    message: "Book added successfully",
    data: allBooks,
  });
};
exports.updateBookById = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({
      success: false,
      message: "No data to update",
    });
  }
  const book = await bookModel.findById(id);
  if (!book) {
    return res.status(404).json({
      success: false,
      message: `Book not found for id: ${id}`,
    });
  }
  Object.assign(book, data);
  await book.save();
  res.status(200).json({
    success: true,
    message: "Book updated successfully",
    data: book,
  });
};
exports.deleteBookById = async (req, res) => {
  const { id } = req.params;
  const book = await bookModel.findByIdAndDelete(id);
  if (!book) {
    return res.status(404).json({
      success: false,
      message: `Book not found for id: ${id}`,
    });
  }
  await bookModel.findByIdAndDelete(id);
  res.status(200).json({
    success: true,
    message: "Book deleted successfully",
  });
};
