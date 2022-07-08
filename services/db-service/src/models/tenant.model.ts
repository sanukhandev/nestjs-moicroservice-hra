import { Column, Model, Table } from "sequelize-typescript";

@Table({ tableName: "tenent" })
export class Tenant extends Model<Tenant> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;
  @Column({ allowNull: false })
  name: string;
  @Column({ allowNull: false })
  host: string;
  @Column({ allowNull: false })
  database: string;
  @Column({ allowNull: true })
  table: string;
  @Column({ allowNull: false })
  createdAt: Date;
  @Column({ allowNull: false })
  updatedAt: Date;
  
}