const { Sequelize, DataTypes, Model } = require('sequelize');

const NOTE_TABLE = 'notes';

const noteScehma = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  author: {
    type: DataTypes.String,
    allowNull: false,
  },
  date: {
    allowNull: false,
    type: DataTypes.DATEONLY,
    defaultValue: Sequelize.NOW,
  },
  title: {
    type: DataTypes.String,
    allowNull: false,
  },
  body: {
    type: DataType.TEXT('medium'),
    allowNull: false,
  },
  type: {
    type: DataTypes.String,
    allowNull: false,
  },
  keywords: {
    type: DataTypes.String,
  },
  reference: {
    type: DataTypes.String,
  },
}

class Note extends Model {
  static config(sequelize) {
    return {
      sequelize,
      tableName: NOTE_TABLE,
      modelName: 'Note',
      timeStamps: false,
      createdAt: false,
      updatedAt: false,
    }
  }
}

module.exports = { NOTE_TABLE, noteScehma, Note };
