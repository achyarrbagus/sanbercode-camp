import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";

export default class BooksController {
  public async PostBook({ request, response }: HttpContextContract) {
    const newPostSchema = schema.create({
      judul_buku: schema.string(),
      ringkasan_buku: schema.string(),
      tahun_terbit: schema.number(),
      halaman: schema.number(),
    });

    /**
     * Validate request body against the schema
     */
    const payload = await request.validate({ schema: newPostSchema });
    response.status(200).send({
      status: "succeess",
      data: payload,
    });
  }

  public async PostCategory({ request, response }: HttpContextContract) {
    const newPostSchema = schema.create({
      name: schema.string(),
    });

    const payload = await request.validate({ schema: newPostSchema });
    response.status(200).send({
      status: "succeess",
      data: payload,
    });
  }
}
