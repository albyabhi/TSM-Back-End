require('dotenv').config();  // Load environment variables

const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  if (!user || !user._id || !user.username || !user.email) {
    throw new Error('User data is incomplete');
  }

  const payload = {
    userId: user._id,
    username: user.username,
    email: user.email,
  };

  const expiresIn = '1h';  // Expiration time for the JWT token

  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn });

  return token;
};

module.exports = {
  generateToken,
  mongoURI: process.env.MONGO_URI,
  port: process.env.PORT || 5000,
  secretKey: process.env.SECRET_KEY,
};
