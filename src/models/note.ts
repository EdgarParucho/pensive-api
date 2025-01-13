import {
  Table,
  Model,
  Column,
  PrimaryKey,
  NotNull,
  DataType,
  Default
} from 'sequelize-typescript';

@Table
class Note extends Model {
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

  @NotNull
  @Column({ allowNull: false })
  type!: string;

  @Column
  keywords?: string;

  @Column
  reference?: string;

}

export default Note;
