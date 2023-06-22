import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class UsersController {
  static async GetUser({ request, response }: HttpContextContract) {
    console.log(request.body.name);
  }
}
