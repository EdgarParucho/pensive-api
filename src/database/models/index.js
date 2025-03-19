const { Sequelize, DataTypes } = require('sequelize');

const NOTE_TABLE = 'Notes';

const noteSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    allowNull: false,
    type: DataTypes.DATEONLY,
    defaultValue: Sequelize.NOW,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT('medium'),
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  keywords: {
    type: DataTypes.STRING,
  },
  reference: {
    type: DataTypes.STRING,
  },
}

module.exports = { NOTE_TABLE, noteSchema };
