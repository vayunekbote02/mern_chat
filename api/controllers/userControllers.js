const UserModel = require("../models/userModel");

const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await UserModel.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    return res.status(200).json(filteredUsers);
  } catch (err) {
    console.log("Error in getUsersForSidebar: ", err.message);
    res.status(500).json({ error: "Internal server error." });
  }
};

module.exports = { getUsersForSidebar };
