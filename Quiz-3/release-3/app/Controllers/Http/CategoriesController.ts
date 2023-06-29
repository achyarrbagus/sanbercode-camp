import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import CategoryValidator from "App/Validators/CategoryValidator";
import Database from "@ioc:Adonis/Lucid/Database";
import Category from "App/Models/Category";

export default class CategoriesController {
  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(CategoryValidator);
      console.log(payload);

      await Database.insertQuery().table("categories").insert(payload);

      response.status(200).json({
        status: " success",
        nama: payload.name,
      });
    } catch (error) {
      response.status(400).json({
        status: "error",
        message: error,
      });
    }
  }

  public async index({ response }: HttpContextContract) {
    try {
      const category = await Database.from("categories").select("*");
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
      const category = await Category.query().where("id", id).preload("games");
      // const ctgr = await Category.query()
      //   .preload("games", (query) => {
      //     query.where("categories_id", id);
      //   })
      //   .first();

      // if (category.length == 0) {
      //   return response.status(404).json({
      //     status: " success",
      //     message: "Category Not Found",
      //   });
      // }
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

      const category = await Database.from("categories").where("id", id);

      if (category.length == 0) {
        return response.status(404).json({
          status: " success",
          message: "Category Not Found",
        });
      }

      if (payload.name != null) {
        category[0].name = payload.name;
      }
      // const Query = `UPDATE kategori SET nama = ${payload.nama} id = ${id}`;

      const query = "UPDATE categories SET name = ? WHERE id = ?";

      let result = await Database.rawQuery(query, [payload.name, id]);

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

      const query = "DELETE FROM categories WHERE id = ?";

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
