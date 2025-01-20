import sequelize from "../database/sequelize";
import Note from "../database/models";

const { models } = sequelize;

class Service {

  public async create(note: Partial<Note>): Promise<void> {
    try {
      await models.Note.create(note);
      return;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async read(author: string): Promise<Note[]> {
    try {
      const data = await models.Note.findAll({ where: { author }, raw: true }) as Note[];
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async update(id: string, note: Partial<Note>): Promise<void> {
    try {
      await models.Note.update(note, { where: { id } });
      return;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async delete(id: string): Promise<void> {
    try {
      await models.Note.destroy({ where: { id } });
      return;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default Service;