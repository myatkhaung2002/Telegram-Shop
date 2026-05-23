// user.service.js
// Service functions for user operations

const db = require('../models'); // Assuming Sequelize or similar ORM

class UserService {
  static async createUser(userData) {
    try {
      const user = await db.User.create(userData);
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async getUserById(userId) {
    try {
      const user = await db.User.findByPk(userId);
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(userId, updateData) {
    try {
      const user = await db.User.findByPk(userId);
      if (!user) return null;
      await user.update(updateData);
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(userId) {
    try {
      const user = await db.User.findByPk(userId);
      if (!user) return null;
      await user.destroy();
      return true;
    } catch (error) {
      throw error;
    }
  }

  static async getAllUsers() {
    try {
      const users = await db.User.findAll();
      return users;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
