const fetch = require('node-fetch');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'your-secret-key';
const BACKEND_URL = 'http://localhost:8080/api';

const resolvers = {
  users: async ({ offset, limit }) => {
    try {
      const response = await fetch(
        `${BACKEND_URL}/users?offset=${offset}&limit=${limit}`
      );
      return await response.json();
    } catch (error) {
      console.error('Error fetching users:', error);
      throw new Error('Failed to fetch users');
    }
  },

  user: async ({ id }) => {
    try {
      const response = await fetch(`${BACKEND_URL}/users/${id}`);
      return await response.json();
    } catch (error) {
      console.error('Error fetching user:', error);
      throw new Error('Failed to fetch user');
    }
  },

  login: async ({ email, password }) => {
    // 模拟登录验证
    if (email === 'demo@example.com' && password === 'demo123') {
      const user = {
        id: '1',
        name: 'Demo User',
        email: 'demo@example.com',
        role: 'ADMIN'
      };

      const token = jwt.sign(
        { userId: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: '1h' }
      );

      return {
        token,
        user
      };
    }

    throw new Error('Invalid credentials');
  }
};

module.exports = resolvers; 