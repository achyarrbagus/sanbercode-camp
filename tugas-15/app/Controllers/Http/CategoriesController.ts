import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import CategoryValidator from "App/Validators/CategoryValidator";
import Database from "@ioc:Adonis/Lucid/Database";

export default class CategoriesController {
  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(CategoryValidator);
      console.log(payload);

      await Database.insertQuery().table("kategoris").insert(payload);

      response.status(200).json({
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
}
