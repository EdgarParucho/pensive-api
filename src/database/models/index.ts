import {
  Table,
  Model,
  Column,
  PrimaryKey,
  NotNull,
  DataType,
  Default
} from 'sequelize-typescript';

@Table({ timestamps: false })
class Note extends Model {
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  id!: string;

  @NotNull
  @Column({ allowNull: false })
  author!: string;

  @Default(DataType.NOW)
  @Column
  date!: Date;

  @NotNull
  @Column({ allowNull: false })
  title!: string;

  @NotNull
  @Column({ allowNull: false })
  body!: string;

  @Column
  keywords?: string;

  @Column
  reference?: string;

}

export default Note;
