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
}

export default Service;