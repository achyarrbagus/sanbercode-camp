import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import KategoriValidator from "App/Validators/KategoriValidator";
import Kategori from "App/Models/Kategori";
import { DateTime } from "luxon";

export default class KategorisController {
  public async destroy({ request, response }: HttpContextContract) {
    try {
      const id: string = request.param("id");
      const data = await Kategori.findOrFail(id);
      await data.delete();
      response.status(200).json({
        code: 200,
        status: "Delete Data Success",
      });
    } catch (error) {
      response.status(400).json({
        code: 400,
        status: "Server Error",
        message: error,
      });
    }
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const id: string = request.param("id");
      const data = await Kategori.findOrFail(id);

      if (request.body.name != "") {
        const payload = await request.validate(KategoriValidator);
        data.name = payload.name;
        data.updatedAt = DateTime.local();
      }
      data.save();
      response.status(200).json({
        code: 200,
        status: "Update Data Success",
        data: data,
      });
    } catch (error) {
      response.status(400).json({
        code: 400,
        status: "Server Error",
        message: error,
      });
    }
  }

  public async show({ request, response }: HttpContextContract) {
    try {
      const id: string = request.param("id");
      const data = await Kategori.findOrFail(id);

      console.log(data);

      if (data == null) {
        response.status(404).json({
          code: new Error(),
          status: "Not Found",
        });
      }

      response.status(200).json({
        code: 200,
        status: "Success",
        data: data,
      });
    } catch (error) {
      response.status(400).json({
        code: 400,
        status: "Server Error",
        message: error,
      });
    }
  }

  public async index({ response }: HttpContextContract) {
    try {
      let data = await Kategori.query().preload("buku");
      response.status(200).json({
        code: 200,
        status: "success",
        data: data,
      });
    } catch (error) {
      response.status(400).json({
        code: 400,
        status: "Server Error",
        message: error,
      });
    }
  }

  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(KategoriValidator);

      const kategori = await Kategori.create({
        name: payload.name,
      });

      response.status(200).json({
        code: 200,
        status: "Add kategori succees",
        data: kategori,
      });
    } catch (error) {
      response.status(400).json({
        code: 400,
        status: "Server Error",
        message: error,
      });
    }
  }
}
