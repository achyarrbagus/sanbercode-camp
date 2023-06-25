// // import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import GameValidator from "App/Validators/GameValidator";
import Database from "@ioc:Adonis/Lucid/Database";

import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class GamesController {
  public async store({ request, response }: HttpContextContract) {
    try {
      const payload = await request.validate(GameValidator);
      console.log(payload);

      await Database.insertQuery().table("games").insert(payload);

      response.status(200).json({
        status: " success",
        data: payload,
      });
    } catch (error) {
      response.status(400).json({
        status: "failed",
        message: error,
      });
    }
  }
  public async show({ request, response }: HttpContextContract) {
    try {
      const id: string = request.param("id");
      const books = await Database.from("games").where("id", id);

      if (books.length == 0) {
        return response.status(404).json({
          status: " success",
          message: "Books Not Found",
        });
      }
      response.status(200).json({
        status: " success",
        data: books,
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

      const payload = await request.validate(GameValidator);

      const game = await Database.from("games").where("id", id);
      console.log(game[0].title);

      if (game.length == 0) {
        return response.status(404).json({
          status: " success",
          message: "game Not Found",
        });
      }
      console.log();

      if (request.body().title != null) {
        game[0].title = payload.title;
      }
      if (request.body().gameplay != null) {
        game[0].gameplay = payload.gameplay;
      }
      if (request.body().release_date != null) {
        game[0].release_date = payload.release_date;
      }
      if (request.body().categories != null) {
        game[0].categories_id = payload.categories_id;
      }

      const query =
        "UPDATE games SET title = ?,gameplay =?,release_date = ? WHERE id = ?";

      let result = await Database.rawQuery(query, [
        game[0].title,
        game[0].gameplay,
        game[0].release_date,
        game[0].categories_id,
      ]);

      //   let result = await game.merge([...game]).save();

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

  public async index({ response }: HttpContextContract) {
    try {
      const buku = await Database.from("games").select("*");
      response.status(200).json(buku);
    } catch (error) {
      response.status(400).json({
        status: error,
      });
    }
  }

  public async destroy({ request, response }: HttpContextContract) {
    try {
      const id: string = request.param("id");

      const query = "DELETE FROM games WHERE id = ?";

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
