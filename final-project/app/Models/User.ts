import { DateTime } from "luxon";
import Hash from "@ioc:Adonis/Core/Hash";
import {
  column,
  beforeSave,
  BaseModel,
  hasMany,
  HasMany,
  HasOne,
  hasOne,
} from "@ioc:Adonis/Lucid/Orm";
import Buku from "App/Models/Buku";
import Profile from "./Profile";
import Peminjaman from "./Peminjaman";

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public email: string;
  @column()
  public role: string;

  @column({ serializeAs: null })
  public password: string;

  @column()
  public rememberMeToken: string | null;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password);
    }
  }

  @hasMany(() => Peminjaman, {
    foreignKey: "user_id",
  })
  public peminjaman: HasMany<typeof Peminjaman>;

  @hasMany(() => Buku, {
    foreignKey: "user_id",
  })
  public buku: HasMany<typeof Buku>;

  @hasOne(() => Profile, {
    foreignKey: "user_id",
  })
  public profile: HasOne<typeof Profile>;
}
