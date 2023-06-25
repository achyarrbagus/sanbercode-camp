import BookValidator from "App/Validators/BookValidator";
import Database from "@ioc:Adonis/Lucid/Database";

import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class BookController {
  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(BookValidator);
      console.log(payload);

      await Database.insertQuery().table("buku").insert(payload);

      response.status(200).json({
        status: " success",
        data: payload,
      });
    } catch (error) {
      response.status(400).json({
        status: "failed",
        message: error,
      });
    }
  }
  public async show({ request, response }: HttpContextContract) {
    try {
      const id: string = request.param("id");
      const books = await Database.from("buku").where("id", id);

      if (books.length == 0) {
        return response.status(404).json({
          status: " success",
          message: "Books Not Found",
        });
      }
      response.status(200).json({
        status: " success",
        data: books,
      });
    } catch (error) {
      response.status(400).json({
        status: error,
      });
    }
  }
  public async update({ request, response }: HttpContextContract) {
    try {
      const id: string = request.param("id");

      const payload = await request.validate(BookValidator);

      const buku = await Database.from("buku").where("id", id);

      if (buku.length == 0) {
        return response.status(404).json({
          status: " success",
          message: "Book Not Found",
        });
      }

      if (payload.judul != null) {
        buku[0].judul = payload.judul;
      }
      if (payload.ringkasan != null) {
        buku[0].ringkasan = payload.ringkasan;
      }
      if (payload.tahun_terbit != null) {
        buku[0].tahun_terbit = payload.tahun_terbit;
      }
      if (payload.halaman != null) {
        buku[0].halaman = payload.halaman;
      }
      if (payload.kategoris_id != null) {
        buku[0].kategoris_id = payload.kategoris_id;
      }

      const query =
        "UPDATE buku SET judul = ?,ringkasan =?,tahun_terbit = ?,halaman =?, kategoris_id =? WHERE id = ?";

      let result = await Database.rawQuery(query, [
        payload.judul,
        payload.ringkasan,
        payload.tahun_terbit,
        payload.halaman,
        payload.kategoris_id,
        id,
      ]);

      response.status(200).json({
        status: " success",
        data: result,
      });
    } catch (error) {
      response.status(400).json({
        status: error,
      });
    }
  }

  public async index({ response }: HttpContextContract) {
    try {
      const buku = await Database.from("buku").select("*");
      response.status(200).json(buku);
    } catch (error) {
      response.status(400).json({
        status: error,
      });
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    try {
      const id: string = request.param("id");

      const query = "DELETE FROM buku WHERE id = ?";

      let result = await Database.rawQuery(query, [id]);

      response.status(200).json({
        status: " success",
        data: result,
      });
    } catch (error) {
      response.status(400).json({
        status: error,
      });
    }
  }
}
