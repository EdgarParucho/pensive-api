import sequelize from "../database/sequelize";
import Note from "../database/models";
import { Model } from "sequelize";

const { models } = sequelize;

class Service {

  public async create(note: Partial<Note>): Promise<Model>{
    return await models.Note.create(note);
  }

  public async read(author: string): Promise<Note[]> {
    return await models.Note.findAll({ where: { author }, raw: true }) as Note[];
  }

  public async update(id: string, note: Partial<Note>): Promise<number[]> {
    return await models.Note.update(note, { where: { id } });
  }

  public async delete(id: string): Promise<number> {
    return await models.Note.destroy({ where: { id } });
  }
}

export default Service;