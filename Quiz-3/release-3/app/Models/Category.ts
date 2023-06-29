import { DateTime } from "luxon";
import Game from "./Game";
import {
  column,
  BaseModel,
  hasMany,
  HasMany,
  HasOne,
} from "@ioc:Adonis/Lucid/Orm";

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => Game)
  public games: HasMany<typeof Game>;
}
