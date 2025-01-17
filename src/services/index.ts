import Note from '../database/models';

class Service {

  public async create(note: Partial<Note>): Promise<Note> {
    try {
      const data = await Note.create(note);
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async read(author: string): Promise<Note[]> {
    try {
      const data = await Note.findAll({ where: { author }, raw: true });
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async update(id: string, note: Partial<Note>): Promise<void> {
    try {
      await Note.update(note, { where: { id } });
      return;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  public async delete(id: string): Promise<void> {
    try {
      await Note.destroy({ where: { id } });
      return;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default Service;