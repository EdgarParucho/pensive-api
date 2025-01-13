'use strict';

const { DataType } = require('sequelize-typescript');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('notes', {
      id: { type: DataType.STRING, primaryKey: true },
      author: { type: DataType.STRING, allowNull: false },
      date: { type: DataType.DATEONLY, defaultValue: DataType.NOW },
      title: { type: DataType.STRING, allowNull: false },
      body: { type: DataType.STRING, allowNull: false },
      type: { type: DataType.STRING, allowNull: false },
      keywords: { type: DataType.STRING },
      reference: { type: DataType.STRING },
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
