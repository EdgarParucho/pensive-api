'use strict';

const DataType = require('sequelize').DataTypes;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Notes', {
      id: { type: DataType.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
      author: { type: DataType.STRING, allowNull: false },
      date: { type: DataType.DATEONLY, defaultValue: DataType.NOW },
      body: { type: DataType.TEXT, allowNull: false },
      keywords: { type: DataType.STRING },
      reference: { type: DataType.STRING(500) },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Notes');
  }
};
