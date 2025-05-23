import sequelize from "../database/sequelize";
import Note from "../database/models";
import { Model } from "sequelize";
import { Op } from "sequelize";

const { models } = sequelize;

class Service {

  public async create(fields: Partial<Note>): Promise<Model>{
    if (!models.Note) throw new Error("Model 'Note' is not defined");
    return await models.Note.create(fields);
  }

  public async read({ author, search }: { author: string, search: string }): Promise<Note[]> {
    if (!models.Note) throw new Error("Model 'Note' is not defined");
    return await models.Note.findAll({
      where: {
        author,
        [Op.or]: {
          body: { [Op.iLike]: `%${search}%` },
          keywords: { [Op.iLike]: `%${search}%` },
          reference: { [Op.iLike]: `%${search}%` }
        }
      },
      attributes: { exclude: ["author"] }, raw: true
    }) as Note[];
  }

  public async update(id: string, fields: Partial<Note>): Promise<number[]> {
    if (!models.Note) throw new Error("Model 'Note' is not defined");
    return await models.Note.update(fields, { where: { id } });
  }

  public async delete(id: string): Promise<number> {
    if (!models.Note) throw new Error("Model 'Note' is not defined");
    return await models.Note.destroy({ where: { id } });
  }
}

export default Service;