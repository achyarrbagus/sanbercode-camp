import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Profile from "App/Models/Profile";
import ProfileValidator from "App/Validators/ProfileValidator";
import { DateTime } from "luxon";

export default class ProfilesController {
  public async store({ request, response, auth }: HttpContextContract) {
    try {
      const user = auth.user;
      const payload = await request.validate(ProfileValidator);

      let result = await user
        ?.related("profile")
        .create({ bio: payload.bio, alamat: payload.alamat });

      response.status(200).json({
        code: 200,
        status: "Success",
        data: result,
      });
    } catch (error) {
      response.status(400).json({
        code: 400,
        status: "Server Error",
        message: error.message,
      });
    }
  }
  public async show({ response }: HttpContextContract) {
    try {
      let data = await Profile.query().preload("user");
      console.log(data);
      response.status(200).json({
        code: 200,
        status: "Success",
        data: data,
      });
    } catch (error) {
      response.status(400).json({
        code: 400,
        status: "Server Error",
        message: error.message,
      });
    }
  }
  public async destroy({ response, auth }: HttpContextContract) {
    try {
      const user = auth.user;
      const data = await Profile.findOrFail(user?.id);
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
  public async update({ request, response, auth }: HttpContextContract) {
    try {
      const id = auth.user?.id;

      const data = await Profile.findByOrFail("user_id", id);

      if (request.body().bio !== "") {
        const payload = await request.validate(ProfileValidator);
        data.bio = payload.bio;
      }
      if (request.body().alamat !== "") {
        const payload = await request.validate(ProfileValidator);
        data.alamat = payload.alamat;
      }

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
  public async index({ response }: HttpContextContract) {
    try {
      let data = await Profile.query().preload("user");
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
}
