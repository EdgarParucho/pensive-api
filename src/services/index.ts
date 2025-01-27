import sequelize from "../database/sequelize";
import Note from "../database/models";
import { Model } from "sequelize";

const { models } = sequelize;

class Service {

  public async create(note: Partial<Note>): Promise<Model>{
    if (!models.Note) throw new Error("Model 'Note' is not defined");
    return await models.Note.create(note);
  }
  
  public async read(author: string): Promise<Note[]> {
    if (!models.Note) throw new Error("Model 'Note' is not defined");
    return await models.Note.findAll({ where: { author }, raw: true }) as Note[];
  }
  
  public async update(id: string, note: Partial<Note>): Promise<number[]> {
    if (!models.Note) throw new Error("Model 'Note' is not defined");
    return await models.Note.update(note, { where: { id } });
  }
  
  public async delete(id: string): Promise<number> {
    if (!models.Note) throw new Error("Model 'Note' is not defined");
    return await models.Note.destroy({ where: { id } });
  }
}

export default Service;