import { DateTime } from "luxon";
import { BaseModel, BelongsTo, belongsTo, column } from "@ioc:Adonis/Lucid/Orm";
import Kategori from "App/Models/Kategori";
import User from "App/Models/Kategori";

export default class Buku extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public judul: string;

  @column()
  public ringkasan: string;

  @column()
  public halaman: string;

  @column()
  public tahun_terbit: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @column()
  public Kategori_id: number;
  @column()
  public user_id: number;

  @belongsTo(() => User, { foreignKey: "User_id" })
  public user: BelongsTo<typeof User>;

  @belongsTo(() => Kategori, {
    foreignKey: "Kategori_id",
  })
  public kategori: BelongsTo<typeof Kategori>;
}
