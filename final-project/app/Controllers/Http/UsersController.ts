import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import UserValidator from "App/Validators/UserValidator";
import User from "App/Models/User";
import LoginValidator from "App/Validators/LoginValidator";
const user = new User();

export default class UsersController {
  public async Register({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(UserValidator);
      const result = await user
        .fill({
          name: payload.name,
          email: payload.email,
          role: "user",
          password: payload.password,
        })
        .save();

      response.created({
        code: 400,
        status: "Register Success",
        data: result,
      });
    } catch (error) {
      if (error.guard) {
        return response.badRequest({
          massage: "register gagal",
          error: error.message(),
        });
      }

      response.status(400).json({
        code: 400,
        status: "Server Error",
        message: error.message,
      });
    }
  }
  public async Login({ auth, request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(LoginValidator);
      const email = payload.email;
      const password = payload.password;
      const token = await auth
        .use("api")
        .attempt(email, password, { expiresIn: "30 mins" });
      response.status(200).json({
        code: 200,
        status: "Login Succees",
        data: {
          email: email,
          token: token,
        },
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
