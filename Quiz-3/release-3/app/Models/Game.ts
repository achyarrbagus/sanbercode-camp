import { DateTime } from "luxon";
import { column, BaseModel, hasOne, HasOne } from "@ioc:Adonis/Lucid/Orm";
import Category from "./Category";

export default class Game extends BaseModel {
  @hasOne(() => Category)
  public Category: HasOne<typeof Category>;
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
