const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your-secret-key';

const authMiddleware = (req) => {
  const authHeader = req.headers.authorization;
  
  if (authHeader) {
    const token = authHeader.replace('Bearer ', '');
    try {
      const user = jwt.verify(token, JWT_SECRET);
      req.user = user;
    } catch (error) {
      console.error('Invalid token:', error);
    }
  }
};

module.exports = authMiddleware; 