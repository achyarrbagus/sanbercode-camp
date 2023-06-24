import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import CategoryValidator from "App/Validators/CategoryValidator";
import Database from "@ioc:Adonis/Lucid/Database";
import { Query } from "mysql2/typings/mysql/lib/protocol/sequences/Query";

export default class CategoriesController {
  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(CategoryValidator);
      console.log(payload);

      await Database.insertQuery().table("kategoris").insert(payload);

      response.status(200).json({
        status: " success",
        nama: payload.nama,
      });
    } catch (error) {
      response.status(400).json({
        request: "tagu",
      });
    }
  }

  public async index({ response }: HttpContextContract) {
    try {
      const category = await Database.from("kategoris").select("*");
      response.status(200).json(category);
    } catch (error) {
      response.status(400).json({
        status: error,
      });
    }
  }
  public async show({ request, response }: HttpContextContract) {
    try {
      const id: string = request.param("id");
      const category = await Database.from("kategoris").where("id", id);

      if (category.length == 0) {
        return response.status(404).json({
          status: " success",
          message: "Category Not Found",
        });
      }
      response.status(200).json({
        status: " success",
        data: category,
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

      const payload = await request.validate(CategoryValidator);

      const category = await Database.from("kategoris").where("id", id);

      if (category.length == 0) {
        return response.status(404).json({
          status: " success",
          message: "Category Not Found",
        });
      }

      if (payload.nama != null) {
        category[0].nama = payload.nama;
      }
      // const Query = `UPDATE kategori SET nama = ${payload.nama} id = ${id}`;

      const query = "UPDATE kategoris SET nama = ? WHERE id = ?";

      let result = await Database.rawQuery(query, [payload.nama, id]);

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
  public async destroy({ request, response }: HttpContextContract) {
    try {
      const id: string = request.param("id");

      // const Query = `UPDATE kategori SET nama = ${payload.nama} id = ${id}`;

      const query = "DELETE FROM kategoris WHERE id = ?";

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
