import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import PeminjamanValidator from "App/Validators/PeminjamanValidator";
import Peminjaman from "App/Models/Peminjaman";

export default class PeminjamenController {
  public async store({ request, response, auth }: HttpContextContract) {
    try {
      const user = auth.user;
      const payload = await request.validate(PeminjamanValidator);
      const newData = await Peminjaman.create({
        user_id: user?.id,
        buku_id: payload.buku_id,
        loan_date: payload.loan_date,
        return_date: payload.return_date,
      });

      return response.status(200).json({
        code: 200,
        status: "Succees",
        data: newData,
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
