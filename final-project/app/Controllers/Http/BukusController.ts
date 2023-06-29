import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import BukuValidator from "App/Validators/BukuValidator";
import { DateTime } from "luxon";

import Buku from "App/Models/Buku";

export default class BukusController {
  public async store({ request, response, auth }: HttpContextContract) {
    try {
      const user = auth.user;
      const payload = await request.validate(BukuValidator);
      const newData = await Buku.create(payload);

      if (user?.role !== "admin") {
        return response.status(500).json({
          code: 500,
          message: "Accees Denied",
        });
      }

      let result = await user.related("buku").save(newData);

      return response.status(200).json({
        code: 200,
        status: "Succees",
        data: result,
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
      let data = await Buku.query().preload("kategori");

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
  public async show({ request, response }: HttpContextContract) {
    try {
      const id: number = parseInt(request.param("id"));
      const data = await Buku.query().where("id", id).preload("kategori");
      if (data.length === 0) {
        return response.status(404).json({
          code: 404,
          status: "Not Found",
          message: "Data Not Found",
        });
      }

      return response.status(200).json({
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
  public async update({ request, response, auth }: HttpContextContract) {
    try {
      const user = auth.user;

      if (user?.role !== "admin") {
        return response.status(500).json({
          code: 500,
          message: "Accees Denied",
        });
      }

      let id = request.param("id");
      const data = await Buku.findByOrFail("id", id);
      if (request.body().judul !== "") {
        const payload = await request.validate(BukuValidator);
        data.judul = payload.judul;
      }
      if (request.body().ringkasan !== "") {
        const payload = await request.validate(BukuValidator);
        data.ringkasan = payload.ringkasan;
      }
      if (request.body().tahun_terbit != "") {
        const payload = await request.validate(BukuValidator);
        data.tahun_terbit = payload.tahun_terbit;
      }
      if (request.body().halaman != "") {
        const payload = await request.validate(BukuValidator);
        data.halaman = payload.halaman;
      }
      if (request.body().kategori_id != "") {
        const payload = await request.validate(BukuValidator);
        data.Kategori_id = payload.kategori_id;
      }
      data.user_id = user.id;
      await data.save();

      data.updatedAt = DateTime.local();

      response.status(200).json({
        code: 200,
        status: "Update Success ",
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
  public async destroy({ request, response, auth }: HttpContextContract) {
    try {
      const user = auth.user;
      if (user?.role !== "admin") {
        return response.status(500).json({
          code: 500,
          message: "Accees Denied",
        });
      }
      let id = request.param("id");
      const data = await Buku.findByOrFail("id", id);
      await data.delete();

      response.status(200).json({
        code: 200,
        status: "Delete Success ",
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
}
