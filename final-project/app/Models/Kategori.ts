import { DateTime } from "luxon";
import { BaseModel, HasMany, column, hasMany } from "@ioc:Adonis/Lucid/Orm";
import Buku from "App/Models/Buku";

export default class Kategori extends BaseModel {
  @column({ isPrimary: true })
  public id: number;
  @column()
  public name: string;

  @hasMany(() => Buku, {
    foreignKey: "Kategori_id",
  })
  public buku: HasMany<typeof Buku>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
