import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class extends BaseSchema {
  protected tableName = "peminjaman";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments("id");
      table.integer("user_id").unsigned();
      table.integer("buku_id").unsigned();
      table.timestamp("tanggal_pinjam").nullable();
      table.timestamp("tanggal_kembali").nullable();
      table
        .timestamp("created_at", { useTz: true })
        .notNullable()
        .defaultTo(this.now());
      table
        .timestamp("updated_at", { useTz: true })
        .notNullable()
        .defaultTo(this.now());

      table
        .foreign("user_id")
        .references("id")
        .inTable("users")
        .onDelete("cascade");
      table
        .foreign("buku_id")
        .references("id")
        .inTable("buku")
        .onDelete("cascade");
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
