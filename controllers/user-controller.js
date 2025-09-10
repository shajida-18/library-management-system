const { userModel, bookModel } = require("../model");

exports.getAllUsers = async (req, res) => {
  const users = await userModel.find();
  if (!users || users.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No users found",
    });
  }
  return res.status(200).json({
    success: true,
    data: users,
  });
};
exports.getSingleUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.findById(id);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: `User not found for id: ${id}`,
    });
  }
  res.status(200).json({
    success: true,
    data: user,
  });
};
exports.createUser = async (req, res) => {
  const { data } = req.body;
  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({
      success: false,
      message: "No data provided",
    });
  }
  await userModel.create(data);
  const getAllUsers = await userModel.find();
  return res.status(201).json({
    success: true,
    message: "User created successfully",
    data: getAllUsers,
  });
};
exports.updateUserById = async (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  const user = await userModel.findById(id);
  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({
      success: false,
      message: "No data provided",
    });
  }
  if (!user) {
    return res.status(404).json({
      success: false,
      message: `User not found for id: ${id}`,
    });
  }
  const updatedUser = await userModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  res.status(200).json({
    success: true,
    message: "User updated successfully",
    data: updatedUser,
  });
};
exports.deleteUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.findById(id);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: `User not found for id: ${id}`,
    });
  }
  await userModel.findByIdAndDelete(id);
  // also we have to delete all the books associated with this user
  await bookModel.updateMany(
    { issuedTo: id },
    { $set: { issuedTo: null, issueDate: null, returnDate: null } }
  );
  res.status(200).json({
    success: true,
    message: "User deleted successfully",
  });
};
