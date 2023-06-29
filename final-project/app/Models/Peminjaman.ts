import { DateTime } from "luxon";
import { BaseModel, column, belongsTo, BelongsTo } from "@ioc:Adonis/Lucid/Orm";
import User from "App/Models/User";
import Buku from "App/Models/Buku";

export default class Peminjaman extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public loan_date: string;

  @column()
  public return_date: string;

  @column()
  public user_id: number;

  @column()
  public buku_id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => User, { foreignKey: "User_id" })
  public user: BelongsTo<typeof User>;

  @belongsTo(() => Buku, { foreignKey: "Buku_id" })
  public buku: BelongsTo<typeof Buku>;
}
