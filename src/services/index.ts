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

  public async read({ author, query }: { author: string, query: string }): Promise<Note[]> {
    if (!models.Note) throw new Error("Model 'Note' is not defined");
    return await models.Note.findAll({
      where: {
        author,
        [Op.or]: {
          title: { [Op.iLike]: query },
          body: { [Op.iLike]: query },
          keywords: { [Op.iLike]: query }
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