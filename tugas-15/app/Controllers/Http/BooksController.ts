// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class BookController {
  public store({ request, response }: HttpContextContract) {
    console.log("hello world kontroller terpanggil");
    console.log(request.body());
    response.status(200).json({
      request: "bahis",
    });
  }
}
