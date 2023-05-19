const { catchAsync } = require('../utils');
const User = require('../models/userModel');

const getUserList = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { page, limit } = req.query;
  const skip = (page - 1) * limit;

  const cards = await User.find({ id }, "", {skip, limit: 3}); 
  
  res.status(200).json({
      cards,
    });
});

module.exports = getUserList;
