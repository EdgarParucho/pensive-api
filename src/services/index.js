const sequelize = require("../database/sequelize");
const { Op } = require("sequelize");

const { models } = sequelize;

class Service {

  async create(fields){
    if (!models.Note) throw new Error("Model 'Note' is not defined");
    return await models.Note.create(fields);
  }

  async read({ author, search }) {
    if (!models.Note) throw new Error("Model 'Note' is not defined");
    return await models.Note.findAll({
      where: {
        author,
        [Op.or]: {
          title: { [Op.iLike]: `%${search}%` },
          body: { [Op.iLike]: `%${search}%` },
          keywords: { [Op.iLike]: `%${search}%` }
        }
      },
      attributes: { exclude: ["author"] }, raw: true
    });
  }

  async update(id, fields) {
    if (!models.Note) throw new Error("Model 'Note' is not defined");
    return await models.Note.update(fields, { where: { id } });
  }

  async delete(id) {
    if (!models.Note) throw new Error("Model 'Note' is not defined");
    return await models.Note.destroy({ where: { id } });
  }
}

module.exports = Service;